<template>
    
<div>
        <NavSmall />
        <Sidebar />
        <div v-show="!pageReady">
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <transition name="sl-on">
            <div v-show="pageReady">
                <div class="content">
                    <router-view :listTarget="listTarget"></router-view>
                </div>
            </div>
        </transition>        
    </div>    

    
</template>

<script>
import Sidebar from './SideBar.vue'
import NavSmall from './NavSmall.vue'
import axios from 'axios'
import emitter from 'tiny-emitter/instance'

export default {
    async mounted(){

        if(!localStorage.getItem('user')){
            this.$router.push('/login')
        }

        emitter.on('addTarget', (data) => {
            try{
                this.listTarget  = [...this.listTarget, data]
            }
            catch{
                this.listTarget = [data]
            }
        })

        emitter.on('updateTarget', async (data) => {
            console.log(data)
            if(data){
                let dataTarget = await axios('https://english-4-u.000webhostapp.com/api/pkgTargets/getTargetByUser.php',
                                    {
                                        method:'GET',
                                        headers: { 
                                            'content-type': 'application/x-www-form-urlencoded' 
                                        },
                                        params: {'username': this.user.username}
                                    })
                this.listTarget = dataTarget.data.data
            }
        })

        let dataTarget = await axios('https://english-4-u.000webhostapp.com/api/pkgTargets/getTargetByUser.php',
                                    {
                                        method:'GET',
                                        headers: { 
                                            'content-type': 'application/x-www-form-urlencoded' 
                                        },
                                        params: {'username': this.user.username}
                                    })
        this.listTarget = dataTarget.data.data
        this.pageReady = !this.pageReady
    },
    data() {
        return {
            user : JSON.parse(localStorage.getItem('user')),
            listTarget : [],
            pageReady: false
        }
    },
    components:{
        Sidebar,
        NavSmall
    },
}
</script>

<style scoped>

    div.content {
        margin-left: 15%;
    }

        .sl-on-enter-active,
    .sl-on-leave-active {
        animation: slide-on .6s ease-in;
    }

    @keyframes slide-on{
        0%{
            opacity: .4;
            transform: translateX(-100px);
        }
        100%{
            opacity: .6;
            transform: translateX(0px);
        }
    }

    @media screen and (max-width: 1000px) {
        div.content {margin-left: 0px;}
    }
</style>