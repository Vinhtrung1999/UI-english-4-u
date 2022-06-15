<template>
    <div class="card-body">
        <div class="card-body-content" ref="jk">
            <div v-show="!dataSentences.length" class="text-center">Write something</div>
            <template v-for="(item, index) in dataSentences" :key="index">
                <div class="border border-1 p-3 mb-3 m-auto" style="background-color:#f8f9fa; width:90%">
                    <div>{{ item.content }}</div>
                    <div class="text-secondary text-end" style="font-size:.8rem">{{ item.date }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props:['dataSentences']
}
</script>

<style scoped>
    .card-body-content{
        height: 450px;
        overflow-y: scroll;
    }
</style>