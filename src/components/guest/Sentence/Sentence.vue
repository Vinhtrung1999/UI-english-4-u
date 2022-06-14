<template>
    <div class="p-lg-3">
        <!-- loading -->
        <div v-show="!pageReady">
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
            <transition name="slide-sen" appear>
    
                

        <div v-show="pageReady" class="card">

                <div class="card-header bg-primary text-white fs-5">{{ title }}
                    <div class="progress">
                        <div
                            class="progress-bar progress-bar-striped bg-warning"
                            role="progressbar"
                            :style="{width: progress}"
                            aria-valuemax="{{target}}">{{ progress }}</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-content" ref="jk">
                        <div v-show="!dataSentences.length" class="text-center">Write something</div>
                        <template v-for="(item, index) in dataSentences" :key="index">
                            <div class="border border-1 p-3 mb-3">
                                <div>{{ item.content }}</div>
                                <div class="text-secondary text-end" style="font-size:.8rem">{{ item.date }}</div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="card-footer">
                    <div v-show="status">
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </symbol>
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </symbol>
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </symbol>
                        </svg>
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                            <div>
                                Congratulation! You have been complete your target.
                            </div>
                        </div>
                        <div class="text-center">
                            <router-link to="/target">
                                <button class="btn btn-outline-primary">New Target</button>
                            </router-link>
                        </div>
                    </div>
                    <div v-show="!status" class="form-floating">
                        <textarea 
                            class="form-control" 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea2" 
                            style="height: 100px"
                            v-model="inputSentence"
                            @keydown.enter="addSentence()"></textarea>
                        <label
                            for="floatingTextarea2">Enter a sentence</label>
                        <div class="text-end mt-2">
                            <button 
                                @click="addSentence()" 
                                class="btn btn-outline-primary px-5" 
                                :disabled='!inputSentence'>
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            
        </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import emitter from 'tiny-emitter/instance'

export default {
    async mounted(){
        this.idTarget = this.$route.params.idTarget
        this.title = this.$route.query.title
        this.target = this.$route.query.target
        let listSentences = await axios('https://english-4-u.000webhostapp.com/api/sentences/getSentences.php',
                            {
                                method:'GET',
                                headers: { 
                                    'content-type': 'application/x-www-form-urlencoded' 
                                },
                                params: {'idTarget': this.idTarget}
                            })
        if(listSentences.data.code == 0){
            this.dataSentences = listSentences.data.data
            this.target = listSentences.data.data[0].target
            this.status = listSentences.data.data[0].status
        }

        this.pageReady = true
    },
    data: () => {
        return {
            dataSentences: [],
            title: '',
            status: false,
            target: 0,
            inputSentence : '',
            idTarget:'',
            pageReady: false
        }
    },
    computed:{
        progress(){
            return (this.dataSentences.length * 100 / this.target).toFixed(2) + '%'
        }
    },
    methods:{
        async addSentence(){
            if(this.inputSentence && !this.status){
                let data = {
                    'idTarget': this.idTarget,
                    'content': this.inputSentence
                }
                let response = await axios('https://english-4-u.000webhostapp.com/api/sentences/addSentence.php',
                            {
                                method:'POST',
                                headers: { 
                                    'content-type': 'application/x-www-form-urlencoded' 
                                },
                                data: qs.stringify(data)
                            })

                if(response.data.code == 0){
                    let temp = {...response.data.data[0], 'date':'just now'} 
                    
                    this.dataSentences = [...this.dataSentences, temp]

                    this.inputSentence = ''
                    
                    if(this.dataSentences.length == this.target)
                        this.status = true

                    emitter.emit('updateTarget', true)                    
                }
            }
        }
    }
}
</script>

<style scoped>
    .card-body-content{
        height: 450px;
        overflow-y: scroll;
    }

    .slide-sen-enter-active,
    .slide-sen-leave-active {
        animation: slide-on .6s ease-in;
    }

    @keyframes slide-on{
        0%{
            opacity: .3;
            transform: translateX(-100px);
        }
        100%{
            opacity: .6;
            transform: translateX(0px);
        }
    }
</style>