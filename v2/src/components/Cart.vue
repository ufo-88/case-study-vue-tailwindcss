<template>
    <div class="side-cart">
        <div class="bg-blue-600">
            <p class="text-xl text-white font-bold text-center p-2">Cart ({{ totalQty }})</p>
        </div>
        <div class="border p-3" v-for="item in cart" :key="item.id">
            <div class="flex mb-2">
                <div class="flex-shrink-0">
                    <img :alt="item.title" :src="item.imgUrl" class="w-12">
                </div>
                <div class="ml-4">
                    <p class="text-sm">{{ item.title }}</p>
                </div>
            </div>
        <div class="flex">
                <div class="flex-shrink-0">
                    <div class="flex">
                        <button @click="reduceQty(item.id)" class="rounded-full focus:outline-none bg-gray-800 text-white h-6 w-6 flex items-center justify-center mr-1">-</button>
                        <button @click="addQty(item.id)" class="rounded-full focus:outline-none bg-gray-800 text-white h-6 w-6 flex items-center justify-center">+</button>
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div class="ml-4">
                        <p class="text-sm">x {{ item.qty }}</p>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-bold">RM {{ item.price * item.qty}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="cart.length" class="text-center text-xl font-bold w-full bg-blue-800 text-white p-2">Total RM {{ totalPrice }}</div>
    </div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Cart",
    computed: {
        ...mapGetters(["cart"]),
        totalQty() {
            return this.cart.reduce((a,b) => a + b.qty, 0);
        },
        totalPrice() {
            return this.cart.reduce((a,b) => a + b.qty * b.price, 0);
        }

    },
    methods: {
        ...mapActions(["addQty" , "reduceQty" , "removeQty"])
    }
}
</script>
