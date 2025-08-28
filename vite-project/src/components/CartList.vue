<script setup>
defineProps(['carts'])
const emit = defineEmits(['remove-to-cart'])
</script>

<template>
  <ul class="list-group mb-3">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="cartItem in carts"
      :key="cartItem.id"
    >
      <div>
        <h6 class="my-0">{{ cartItem.title }}</h6>
        <small class="text-muted">數量：{{ cartItem.quantity }}</small>
      </div>
      <div>
        <span class="text-muted">${{ cartItem.price }}</span>
        <button class="btn btn-sm btn-outline-danger ms-2" @click="emit('remove-to-cart', cartItem)">
          移除
        </button>
      </div>
    </li>
  </ul>
</template>