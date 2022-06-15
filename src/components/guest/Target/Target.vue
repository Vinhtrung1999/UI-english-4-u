<template>

	<div class="pt-2">
		<transition name="sl-intro" v-show="pageReady">
			<Introduction />
		</transition>
		<transition name="sl-on" v-show="pageReady">
			<CardTarget :listTarget="listTarget"/>
		</transition>
		<transition name="sl-add" v-show="pageReady">
			<ModalAddTarget />
		</transition>
	</div>


	
		
</template>

<script>
import Introduction from './Introduction.vue'
import CardTarget from './CardTarget.vue'
import ModalAddTarget from './ModalAddTarget.vue'

export default {
	props:['listTarget', 'pageReady'],
	components:{
		Introduction,
		CardTarget,
		ModalAddTarget,
	}
}
</script>

<style scoped>
	.sl-intro-enter-active,
    .sl-intro-leave-active {
        animation: slide-intro-on .6s ease-in;
    }

    @keyframes slide-intro-on{
        0%{
            opacity: .4;
            transform: translateY(-10px);
        }
        100%{
            opacity: .6;
            transform: translateY(0p);
        }
    }

	.sl-on-enter-active,
    .sl-on-leave-active {
        animation: slide-on .6s ease-in;
    }

    @keyframes slide-on{
        0%{
            opacity: .4;
            transform: translateX(-100px);
        }
        100%{
            opacity: .6;
            transform: translateX(0px);
        }
    }

    @media screen and (max-width: 800px) {
        .base-profile{
            width: 90%;
        }
    }

	.sl-add-enter-active,
    .sl-add-leave-active {
        animation: slide-add-on .8s ease-in;
    }

    @keyframes slide-add-on{
        0%{
            opacity: .4;
            transform: translateY(-80vh);
        }
        100%{
            opacity: .6;
            transform: translateY(0px);
        }
    }

    @media screen and (max-width: 800px) {
        .base-profile{
            width: 90%;
        }
    }

</style>