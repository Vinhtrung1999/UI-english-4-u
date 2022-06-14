<template>
    <div class="p-5 base-profile">
        <div class="card text-center">
            <div class="card-header bg-primary">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <button class="nav-link active" aria-current="true" href="#">Profile</button>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text">
                    <img 
                        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" 
                        alt=""
                        class="w-50">
                </p>
                
                <button class="btn btn-sm btn-outline-warning" @click="ChangePass()">Change password</button>
            </div>
        </div>        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')) || ''
        }
    },
    methods:{
        ChangePass(){
            alert(`Sorry, we're coming soon!`)
        }
    }
}
</script>

<style scoped>
    .base-profile{
        width: 50%;
        margin: auto;
    }
    @media screen and (max-width: 800px) {
        .base-profile{
            width: 90%;
        }
    }
</style>