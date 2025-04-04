import Home from '@/pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/todos',
      name: 'todolist',
      component: TodoList,
    },
    {
      path: '/todos/add',
      name: 'addtodo',
      component: AddTodo,
    },
    {
      path: '/todos/edit/:id',
      name: 'edittodo',
      component: EditTodo,
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
