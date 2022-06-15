<template>
    <div class="sidebar bg-primary text-white">
        <div class="text-center my-1">
            <img src="/abstract-user-flat-4.png" alt="" width="100">
        </div>
        <div class="text-center my-1">
            <div>{{ user.name }}</div>
        </div>
        <router-link class="text-white" to="/target" active-class="active" exact>Target</router-link>
        <router-link class="text-white" to="/profile" active-class="active" exact>Profile</router-link>
        <a class="text-white" href="javascript:void(0)" @click="logout()">Logout</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user : JSON.parse(localStorage.getItem('user')) || ''
        }
    },
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

    .sidebar {
        margin: 0;
        padding: 0;
        width: 15%;
        position: fixed;
        height: 100%;
        overflow: auto;
    }

    .sidebar a{
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }
    
    .sidebar a.active,
    .sidebar a:hover:not(.active) {
        background-color: rgba(151, 151, 151, 0.573);
        color: white;
    }

    @media screen and (max-width: 1000px) {
        .sidebar {
            display: none;
        }
    }
</style>