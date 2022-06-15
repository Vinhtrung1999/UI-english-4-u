<template>
    <div>
        <div class="add-target">
			<button class="btn-addTarget" data-bs-toggle="modal" data-bs-target="#addTargetModal">+</button>
		</div>		

		<div
            class="modal fade modal-custom"
            id="addTargetModal"
            tabindex="-1"
            aria-labelledby="addTargetModalLabel"
            aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content  modal-custom">
                    <div class="modal-header bg-primary text-white modal-header-custom">
                        <h5 class="modal-title" id="addTargetModalLabel">New target</h5>
                        <button
                            type="button"
                            class="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            @click="this.msgBadge = ''"
                            ref="clModal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-5">
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="title"
                                placeholder="a, b, ..."
                                v-model="title">
                            <label for="title">Title</label>
                        </div>
                        <div>
                            <label for="customRange3" class="form-label">Target: {{ target }}</label>
                            <input
                                type="range"
                                class="form-range"
                                min="0" max="200"
                                step="1" 
                                id="customRange3"
                                v-model="target">
                        </div>
                        <div class="text-center">
                            <span class="badge" :class="[badgeLevel]">{{ msgBadge }}</span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" @click="addTarget()">Add Target</button>
                    </div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import emitter from 'tiny-emitter/instance'
export default {
    data() {
        return {
            user : JSON.parse(localStorage.getItem('user')),
            target: 0,
            title: '',
            msgBadge: '',
            badgeLevel: 'bg-danger'
        }
    },
    methods:{
        async addTarget(){
            if(this.title && this.target){
                let data = {
                    'title': this.title,
                    'target': this.target,
                    'username': this.user.username
                }
                let response = await axios('https://english-4-u.000webhostapp.com/api/pkgTargets/addTarget.php',
                            {
                                method:'POST',
                                headers: { 
                                    'content-type': 'application/x-www-form-urlencoded' 
                                },
                                data: qs.stringify(data)
                            })
                console.log(response.data)
                if(response.data.code == 0){
                    emitter.emit('addTarget', response.data.data[0])
                    this.badgeLevel = 'bg-success'
                    this.msgBadge = 'success'
                    this.title = ''
                    this.target = 0
                    this.$refs.clModal.click()
                }

            }
            else{
                this.badgeLevel = 'bg-danger'
                this.msgBadge = 'enter data'
            }
        },
    }
}
</script>

<style scoped>
	.add-target{
		position: fixed;
		right: 20px;
		bottom: 10%;
	}

	.btn-addTarget{
		border: solid 1px #ffffff;
		box-shadow: #c7c7c7 0px 0px 10px 3px;
		font-size: 3rem;
		background-color: #ffffff;
		padding: 2px 25px;
		border-radius: 100px;
		color: #383838;
	}

	.btn-addTarget:hover{
		opacity: 90%;
	}

	.btn-addTarget:active{
		background-color: #0d6efd;
		color: #ffffff;
		border: solid 1px #0d6dfda0;
		box-shadow: #00a2ff71 0px 0px 3px 3px;
	}

    .modal-header-custom{
        border-radius: 30px 30px 0px 0px !important;
    }

    .modal-custom{
        border-radius: 30px !important;
    }
</style>