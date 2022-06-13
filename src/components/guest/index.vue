<template>
    <div>
        <NavSmall />
        <Sidebar />
        <div>
            <div class="content">
                <router-view></router-view>
            </div>
            
        </div>        
    </div>
</template>

<script>
import Sidebar from './SideBar.vue'
import NavSmall from './NavSmall.vue'
import axios from 'axios'
import qs from 'qs';
export default {
    async mounted(){
        if(!localStorage.getItem('user')){
            this.$router.push('/login')
        }

        let dataTarget = await axios('http://localhost/english-for-you/api/pkgTargets/getTargetByUser.php',
                                    {
                                        method:'GET',
                                        headers: { 
                                            'content-type': 'application/x-www-form-urlencoded' 
                                        },
                                        params: {'username': this.user.username}
                                    })
    },
    data() {
        return {
            user : JSON.parse(localStorage.getItem('user'))
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

    @media screen and (max-width: 1000px) {
        div.content {margin-left: 0px;}
    }
</style>