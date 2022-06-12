<template>
	<div class="pt-2">
		<Introduction />
		<CardTarget />
		<ModalAddTarget />
	</div>

	
		
</template>

<script>
import Introduction from './Introduction.vue'
import CardTarget from './CardTarget.vue'
import ModalAddTarget from './ModalAddTarget.vue'

export default {
	components:{
		Introduction,
		CardTarget,
		ModalAddTarget
	}
}
</script>

<style scoped>

</style>