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
        <transition name="slide-sen">
            <div v-show="pageReady" class="card">
                    <CardHeader :title="title" :progress="progress" :target="target" />
                    <CardBody :dataSentences="dataSentences"/>
                    <div class="card-footer">
                        <div v-show="status">
                            <Congratulation />
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
import Congratulation from './Congratulation.vue'
import CardBody from './CardBody.vue'
import CardHeader from './CardHeader.vue'

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
    components:{
        Congratulation,
        CardHeader,
        CardBody
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
    .slide-sen-enter-active,
    .slide-sen-leave-active {
        animation: slide-on .6s ease-in;
    }

    @keyframes slide-on{
        0%{
            opacity: .3;
            transform: scale(.8);
        }
        100%{
            opacity: .6;
            transform: scale(1);
        }
    }
</style>