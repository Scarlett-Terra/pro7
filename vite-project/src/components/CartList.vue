<script setup>
// defineProps(['carts'])
const emit = defineEmits(['remove-to-cart'])

import { computed, toRefs } from 'vue'
const props = defineProps({ carts: Array })
const { carts } = toRefs(props)

const totalPrice = computed(() =>
  carts.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)


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

  <div>
    <!-- ... 購物車 items ... -->
    <div class="total">總價：{{ totalPrice }} 元</div>
  </div>
 

</template>