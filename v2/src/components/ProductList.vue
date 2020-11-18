<template>
	<div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 h-full">
		<div class="product" v-for="item in products" :key="item.id">				
			<div class="max-w-sm rounded overflow-hidden shadow-lg h-full">
				<div class="h-64 bg-gray-200 p-3">
					<img :alt="item.title" :src="item.imgUrl" class="w-auto m-auto h-full">
				</div>
				<div class="flex flex-col justify-between">
					<div class="font-bold text-lg text-center mb-2 p-3 h-20">{{ item.title }}</div>
					<div class="flex items-center justify-end mx-4 mb-4">
						<p class="text-2xl text-blue-800 font-bold mr-3">RM{{ item.price }}</p>
						<button @click="addToCart(item)" class="bg-blue-500 focus:outline-none hover:bg-blue-700 text-white font-bold rounded-full h-12 w-12 p-3">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</button>				
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
	name: "ProductList",
	computed: {
		...mapGetters(["products"]),
	},
	methods: {
		...mapActions(["getProducts", "addToCart"]),
	},
	mounted() {
		this.getProducts();
	},
}
</script>


<style scoped>
.truncate-2{
	display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: initial;
    text-overflow: ellipsis;
    overflow: hidden;
	word-break: break-word;
	-webkit-line-clamp: 2;
}
</style>