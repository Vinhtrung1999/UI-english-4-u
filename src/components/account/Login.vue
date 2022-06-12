<template>
    <div class="bg-base position-relative">
        <div class="area-cover p-4 bg-white border boder-1 position-absolute start-50 translate-middle shadow-sm">
            <form>
                <h1>E4u | Welcome !!!</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder="Enter your username"
                        v-model="username">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1"
                        placeholder="Enter your password"
                        v-model="password">
                </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mt-2">
                        Do you have account? <br><router-link to="/register">Register</router-link>
                    </p>
                    <button 
                        type="submit" 
                        class="btn btn-outline-primary btn-rounded px-5 h1" 
                        data-mdb-ripple-color="dark"
                        @click="submitForm($event)">Login</button>                
                </div>
            </form>        
        </div>
        <transition name="alertErr" appear>
            <div v-show="alert" class="alert alert-danger alert-dismissible w-75 mx-auto" role="alert">
                <strong>ERR!</strong> {{ msg_alert }}.
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    @click="this.alert = false"></button>
            </div>
        </transition>
    </div>
    
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
    data() {
        return {
            username: '',
            password:'',
            alert: false,
            msg_alert: '',
        }
    },
    created(){
        if(localStorage.getItem('user'))
            this.$router.push('/')
    },
    methods:{
        async submitForm(event){
            event.preventDefault();
            this.alert = false
            if(this.username && this.password){
                let data = await axios('http://localhost/english-for-you/api/guests/login.php',
                                    {
                                        method:'POST',
                                        headers: { 
                                            'content-type': 'application/x-www-form-urlencoded' 
                                        },
                                        data: qs.stringify({
                                            'username': this.username,
                                            'password': this.password,
                                        })
                                    }) 
                if(data.data.code == 0){
                    localStorage.setItem('user', JSON.stringify(data.data.data[0]))
                    this.$router.push('/')
                }
                else{
                    this.msg_alert = data.data.message
                    this.alert = true
                }           
            }
            else{
                this.msg_alert = 'You should enter username add password'
                this.alert = true
            }
        }
    }
}
</script>

<style scoped>
    .bg-base{
        background-image: linear-gradient(#00bfff3f, rgba(255, 255, 255, 0)), url('https://img.freepik.com/free-photo/english-lettering-blue-wooden-background_23-2148293461.jpg?w=2000');
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    }
    .area-cover{
        top: 45%;
        width: 30%;
        border-radius: 10px;
    }

    @media only screen and (max-width: 1200px) {
        .area-cover{
            width: 60%;
        }
    }

    @media only screen and (max-width: 600px) {
        .area-cover{
            width: 95%;
        }
    }

    .alertErr-enter-from,
    .alertErr-enter-active{
        animation: alertShow 0.8s ease-in;
    }
    .alertErr-leave-active,    
    .alertErr-leave-to {
        animation: alertClose .6s ease-out forwards;
        opacity: 0;
    }

    @keyframes alertShow {
        0%{
            opacity: .4;
            transform: translateX(20px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes alertClose {
        0%{
            opacity: .8;
            transform: translateX(0);
        }
        100%{
            opacity: .4;
            transform: translateX(20px);
        }
    }
</style>