<template>
    <div class="side-cart">
        <div class="bg-blue-600">
            <p class="text-xl text-white font-bold text-center p-2">Cart (0)</p>
        </div>
        <div class="border p-3">
            <div class="flex mb-2">
                <div class="flex-shrink-0">
                    <img alt="..." src="https://m.media-amazon.com/images/I/81e1pXhTE2L._AC_UY218_.jpg" class="w-12">
                </div>
                <div class="ml-4">
                    <p class="text-sm">Product name</p>
                </div>
            </div>
        <div class="flex">
                <div class="flex-shrink-0">
                    <div class="flex">
                        <button class="rounded-full focus:outline-none bg-gray-800 text-white h-6 w-6 flex items-center justify-center mr-1">-</button>
                        <button class="rounded-full focus:outline-none bg-gray-800 text-white h-6 w-6 flex items-center justify-center">+</button>
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div class="ml-4">
                        <p class="text-sm">x 1</p>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm">RM 1000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

export default {
	name: "Cart",
}
</script>
