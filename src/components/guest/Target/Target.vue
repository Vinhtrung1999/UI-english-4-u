<template>
	<div class="pt-2">
		<Introduction />
		<CardTarget :listTarget="listTarget"/>
		<ModalAddTarget />
	</div>

	
		
</template>

<script>
import Introduction from './Introduction.vue'
import CardTarget from './CardTarget.vue'
import ModalAddTarget from './ModalAddTarget.vue'

export default {
	props:['listTarget'],
	components:{
		Introduction,
		CardTarget,
		ModalAddTarget
	}
}
</script>

<style scoped>

</style>