<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      | <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About Me</RouterLink> |
        <RouterLink to="/HomeWeekOne">第1周</RouterLink> |
        <RouterLink to="/ReviewWeekTwo">第2周</RouterLink> |
        <RouterLink to="/todoWeekFourth">第3周簡易登入</RouterLink> |
        <RouterLink to="/todoWeekFifth">第4周模板登入</RouterLink> |
        <RouterLink to="/Cart">進階元件購物車</RouterLink> |
        <RouterLink to="/FinalToDoList">終極作業</RouterLink> |
  
     <RouterView /> 

     
</template>

