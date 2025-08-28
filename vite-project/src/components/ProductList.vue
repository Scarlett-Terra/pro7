<script setup>
defineProps(['products'])
const emit = defineEmits(['add-to-cart'])
</script>

<template>
  <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
    <div class="card h-100">
      <img :src="product.imgURL" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.content }}</p>
        <p class="fw-bold text-primary">$ {{ product.price }}</p>
        <button class="btn btn-success w-100" @click="emit('add-to-cart', product)">
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>