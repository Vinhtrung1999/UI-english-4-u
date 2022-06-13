<template>
    <div class="bg-base position-relative">
        <div class="card area-cover bg-white border boder-1 position-absolute start-50 translate-middle shadow-sm">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <button 
                            @click="showLogin()"
                            class="nav-link link-secondary"
                            aria-current="true"
                            :class="{'active': md_login}">Login</button>
                    </li>
                    <li class="nav-item">
                        <button
                            @click="showRegister()"
                            class="nav-link link-secondary"
                            aria-current="true"
                            :class="{'active': md_register}">Register</button>
                    </li>
                </ul>
            </div>
            <div class="card-body" style="height: 350px">
                <h1>E4u | Welcome !!!</h1>
                <!-- login -->
                <div v-show="md_login">
                    <div class="form-floating my-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="admin123"
                            v-model="username">
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                        <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        v-model="password"
                        @keydown.enter="submitForm()">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <p class="">
                            Do you have account? 
                            <br>
                            <router-link
                            to=""
                                @click="showRegister()">Register</router-link>
                        </p>
                        <button 
                            type="button" 
                            class="btn btn-outline-primary btn-rounded px-5 h1" 
                            data-mdb-ripple-color="dark"
                            @click="submitForm()">Login</button>                
                    </div>
                    <div class="text-center">
                        <div class=" badge bg-warning">
                            <p class="text-dark">This is a personal product, please do not copy and attack</p>
                            <span>Thank you</span>
                        </div>                        
                    </div>
                </div>
                <!-- register -->
                <div v-show="md_register">
                    <div class="form-floating my-3">
                        <input
                            type="text"
                            class="form-control"
                            id="username_rg"
                            placeholder="admin"
                            v-model="username_rg">
                        <label for="username_rg">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                        type="text"
                        class="form-control"
                        id="name_rg"
                        placeholder="John, ..."
                        v-model="name_rg">
                        <label for="name_rg">Name</label>
                    </div>
                    <div class="form-floating">
                        <input
                        type="password"
                        class="form-control"
                        id="password_rg"
                        placeholder="******"
                        v-model="password_rg"
                        @keydown.enter="registerForm()">
                        <label for="password_rg">Password</label>
                    </div>
                    <div class="text-end mt-3">
                        <button 
                            type="button" 
                            class="btn btn-outline-primary btn-rounded px-5 h1" 
                            data-mdb-ripple-color="dark"
                            @click="registerForm()">Register</button>                
                    </div>
                </div>
            </div>
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
        <transition name="alertErr" appear>
            <div v-show="alert_success" class="alert alert-success alert-dismissible w-75 mx-auto" role="alert">
                <strong>SUCCESS:</strong> {{ msg_alert }}.
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    @click="this.alert_success = false"></button>
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
            
            username_rg: '',
            name_rg:'',
            password_rg: '',

            alert: false,
            msg_alert: '',
            md_login: true,
            md_register: false,
            alert_success: false
        }
    },
    created(){
        if(localStorage.getItem('user'))
            this.$router.push('/')
    },
    methods:{
        async submitForm(){
            this.alert = false
            this.alert_success = false
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
        },
        showLogin(){
            this.md_login = true
            this.md_register = false
        },
        showRegister(){
            this.md_login = false
            this.md_register = true
        },
        async registerForm(){
            this.alert = false
            this.alert_success = false
            if(this.username_rg && this.name_rg && this.password_rg){
                let data = await axios('http://localhost/english-for-you/api/guests/addGuest.php',
                                    {
                                        method:'POST',
                                        headers: { 
                                            'content-type': 'application/x-www-form-urlencoded' 
                                        },
                                        data: qs.stringify({
                                            'username': this.username_rg,
                                            'name': this.name_rg,
                                            'password': this.password_rg,
                                        })
                                    }) 
                if(data.data.code == 0){
                    this.msg_alert = 'Create account success'
                    this.alert_success = true
                    this.username_rg = ''
                    this.name_rg = ''
                    this.password_rg = ''
                }
                else{
                    this.alert = true
                    this.msg_alert = data.data.message
                    
                }
                // this.msg_alert = 'Create account success'
                // 
                // this.alert_success = true
                // console.log(this.alert_success)
            }
            else{
                this.msg_alert = 'Enter information, please!'
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