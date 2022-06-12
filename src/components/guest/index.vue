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

export default {
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