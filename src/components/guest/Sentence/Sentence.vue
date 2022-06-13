<template>
    <div class="p-lg-3">
        <div class="card">
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
                <!-- <h5 class="card-title">Primary card title</h5> -->
                <div class="card-body-content">
                    <div v-show="!dataSentences.length" class="text-center">Write something</div>
                    <template v-for="(item, index) in dataSentences" :key="index">
                        <div class="border border-1 p-3 mb-3">
                            <div>{{ item.content }}</div>
                            <div class="text-secondary text-end" style="font-size:.8rem">{{ item.date }}</div>
                        </div>
                    </template>
                </div>
            </div>
            <div v-show="!status" class="card-footer">
                <div class="form-floating">
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
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            dataSentences: [
                {
                    idContent: 'ST123458',
                    idTarget: '15326',
                    content: 'A cat too hot',
                    date: '2022/10/20'
                },
                {
                    idContent: 'ST123458',
                    idTarget: '15326',
                    content: 'A cat longer tail',
                    date: '2022/10/10'
                },
                {
                    idContent: 'ST123458',
                    idTarget: '15326',
                    content: 'A cat is pretty',
                    date: '2022/10/09'
                },
                
            ],
            title: 'A dogs and cats',
            status: false,
            target: 12,
            inputSentence : ''
        }
    },
    computed:{
        progress(){
            return (this.dataSentences.length * 100 / this.target).toFixed(2) + '%'
        },
    },
    methods:{
        addSentence(){
            if(this.inputSentence && !this.status){
                let temp = {
                    idContent: 'ST123458',
                    idTarget: '15326',
                    content: this.inputSentence,
                    date: '2022/10/20'
                }  
                
                this.dataSentences = [...this.dataSentences, temp]

                this.inputSentence = ''
                
                if(this.dataSentences.length == this.target)
                    this.status = true
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
</style>