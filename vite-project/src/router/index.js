import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import ReviewView from '../views/ReviewView.vue'
// import TodoView from '../views/TodoView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('../views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/todoWeekFourth',
      name: 'todoWeekFourth',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/HomeWeekOne',
      name: 'HomeWeekOne',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/ReviewWeekTwo',
      name: 'ReviewWeekTwo',
      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/SpView.vue'),
    },
    {
      path: '/FinalToDoList',
      name: 'FinalToDoList',
      component: () => import('../views/FinalView.vue'),
    },
    {
      path: '/todoWeekFifth',
      name: 'todoWeekFifth',
      component: () => import('../views/FifthView.vue'),
    }

  ],
})

//陣列的語法 

// const routes = [
//   { path: '/', name: 'home', component: HomeView },
//   { path: '/about', name: 'about', component: AboutView },
//   { path: '/review', name: 'review', component: ReviewView },
//   { path: '/todo', name: 'todo', component: TodoView },
// ]

//建立 Router 實例

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })


export default router
