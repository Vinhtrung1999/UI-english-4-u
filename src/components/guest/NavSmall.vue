<template>
    <div class="navSmall fixed-top" style="width: 20px">
        <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
            <div class="overlay-content">
                <router-link to="/target" active-class="active" exact>Target</router-link>
                <router-link to="/sentence" active-class="active" exact>Profile</router-link>
                <router-link to="/logout" active-class="active" exact>Logout</router-link>
            </div>
        </div>
        <span style="font-size:25px;cursor:pointer" @click="openNav()">&#9776;</span>    
    </div>
</template>

<script>
export default {
    methods:{
        openNav(){
            document.getElementById("myNav").style.width = "100%";
        },
        closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
    }
}
</script>

<style scoped>
    .navSmall{
        display: none;
    }

    .overlay {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0, 0.9);
        overflow-x: hidden;
        transition: 0.5s;
    }

    .overlay-content {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;
    }

    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .overlay a:hover, .overlay a:focus {
        color: #f1f1f1;
    }

    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }

    @media screen and (max-width: 1000px) {
        .navSmall{
            display: block;
        }
    }

</style>