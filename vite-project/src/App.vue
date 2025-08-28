
<script setup>
import { provide, ref } from 'vue'
import ProductList from './components/ProductList.vue'
import CartList from './components/CartList.vue'
import Notification from './components/Notification.vue'




// 商品資料
const products = ref([
  {
    id: 1,
    imgURL:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=2065&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '耳罩式藍牙耳機',
    content: '舒適配戴，支援降噪技術',
    price: 2490,
  },
  {
    id: 2,
    imgURL:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '耳罩式彩虹耳機',
    content: '舒適配戴，支援降噪技術',
    price: 1399,
  },
  {
    id: 3,
    imgURL:
      'https://images.unsplash.com/photo-1636099184052-ada1f331132c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '時尚藍芽耳機',
    content: '舒適配戴，支援降噪技術',
    price: 6599,
  },
  {
    id: 4,
    imgURL:
      'https://images.unsplash.com/photo-1672292086075-aa75f03ed2a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '機械式鍵盤',
    content: '機械鍵盤，打字手感極佳',
    price: 1399,
  },
  {
    id: 5,
    imgURL:
      'https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '無線滑鼠',
    content: '靜音按鈕設計，長效電池',
    price: 799,
  },
])

// 購物車資料
const carts = ref([])

const addToCart = (product) => {
  const exist = carts.value.find((cartItem) => cartItem.id === product.id)
  if (exist) {
    exist.quantity += 1
    addNotification(`購物車數量 +1：${product.title}`, 'success')
  } else {
    carts.value.push({ ...product, quantity: 1 })
    addNotification(`已加入購物車：${product.title}`, 'success')
  }
}

const removeToCart = (product) => {
  carts.value = carts.value.filter((cartItem) => cartItem.id !== product.id)
  addNotification(`已移除商品：${product.title}`, 'secondary')
}

// 通知訊息
const notifications = ref([])

const addNotification = (message, type = 'success') => {
  const id = new Date().getTime()
  notifications.value.push({
    id,
    message,
    type
  })
  setTimeout(() => removeNotification(id), 3000)
}

const removeNotification = (id) => {
  notifications.value = notifications.value.filter((n) => n.id !== id)
}

provide('removeNotification', removeNotification)
provide('notifications', notifications)
</script>

<template>
  <div id="app" class="container py-4">
    <div class="row">
      <!-- 商品列表區 -->
      <div class="col-md-8">
        <h2 class="mb-3">商品列表</h2>
        <div class="row">
          <ProductList :products="products" @add-to-cart="addToCart" />
        </div>
      </div>

      <!-- 購物車區 -->
      <div class="col-md-4">
        <h2 class="mb-3">購物車</h2>
        <div class="text-danger" v-if="carts.length === 0">還沒加入商品喔!</div>
        <CartList :carts="carts" @remove-to-cart="removeToCart" />
      </div>
    </div>

    <!-- 通知元件 -->
    <Notification />
  </div>
</template>

<style scoped>
body {
  background: #f2f2f2f2;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}
</style>
