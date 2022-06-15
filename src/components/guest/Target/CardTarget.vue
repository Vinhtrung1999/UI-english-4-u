<template>
    <div class="py-3 px-lg-5 px-md-3 px-2">	
		<div class="row g-3">
			<template v-for="(item, index) in listTarget" :key="index">
				<div class="col-6 col-lg-3 col-md-4 col-sm-6">
					<router-link :to="'/sentence/' + item.idTarget + '?target='+item.target + '&title=' + item.title" 
						class="text-decoration-none text-dark">
						<div class="card mb-3" style="max-width: 540px;">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" class="img-fluid rounded-start" alt="...">
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<div
											data-bs-toggle="tooltip"
											data-bs-placement="top"
											:title="item.title">{{ customTitle(item.title) }}</div>
										<div
											class="progress mt-2" 
											v-show="(item.qty * 100 / item.target) != 100 ? true : false">
											<div 
												class="progress-bar progress-bar-striped" 
												role="progressbar" 
												:style="{'width': (item.qty * 100 / item.target) + '%'}" 
												aria-valuenow="10" 
												aria-valuemin="0" 
												::aria-valuemax="item.target">
													{{item.qty}} / {{ item.target }}
												</div>
										</div>
										<div v-show="(item.qty * 100 / item.target) == 100 ? true : false">
											<span class="badge rounded-pill bg-success">Completed</span>
										</div>
										<div class="text-end mt-2 text-secondary" style="font-size: .8rem">
											{{ item.dateCreate }}
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
			if(title.length < 20)
				return title
			return title.slice(0, 15) + '...'
		}
	}
}
</script>

<style>

</style>