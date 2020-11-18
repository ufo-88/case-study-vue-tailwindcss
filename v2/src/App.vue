<template>
	<div id="app">
		<Header />
		<div>
			<div class="container m-auto px-4">
				<div class="flex -mx-5">
					<div class="w-full md:w-3/4 px-5">
						<Product />
					</div>
					<div class="w-full md:w-1/4 px-5">
						<Cart />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header';
import Product from './components/ProductList';
import Cart from './components/Cart';



export default {
  name: 'App',
  components: {
	Header,
	Product,
	Cart,
  },
};

</script>

