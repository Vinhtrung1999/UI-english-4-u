<template>
	<div class="pt-2">
		<Introduction />
	</div>
	<div class="add-target">
		<button class="btn-addTarget">+</button>
	</div>

	<div class="py-3 px-lg-5 px-md-3 px-2">
		<div class="row g-3">
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-md-4 col-sm-6">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h6 class="card-title">Cat and daong g</h6>
								<p class="text-secondary" style="font-size: .8rem">3/50</p>
								<div class="progress">
									<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
import Introduction from './Introduction.vue'

export default {
	components:{
		Introduction
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
</style>