<template>
    <div class="py-3 px-lg-5 px-md-3 px-2">
		
		<div class="row g-3">
			<template v-for="(item, index) in listTarget" :key="index">
				<div class="col-6 col-lg-3 col-md-4 col-sm-6">
					<router-link to="/sentence" class="text-decoration-none text-dark">
						<div class="card mb-3" style="max-width: 540px;">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h6 class="card-title">{{ customTitle(item.title) }}</h6>
										<p class="text-secondary" style="font-size: .8rem">3/50</p>
										<div class="progress">
											<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</router-link>
				</div>	
			</template>
							
		</div>
	</div>

</template>

<script>
export default {
	props:['listTarget'],
	methods:{
		customTitle(title){
			return title.slice(0, 10) + '...'
		}
	}
}
</script>

<style>

</style>