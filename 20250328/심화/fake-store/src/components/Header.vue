<template>
  <div class="mt-4 p-5 bg-primary text-white bg-image">
    <h1>{{ config.title }}</h1>
    <p>{{ config.subtitle }}</p>
  </div>
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <div class="d-flex align-items-center ms-2">
      <router-link class="navbar-brand" to="/">
        <font-awesome-icon :icon="['fas', 'house']" /> Fake Store
      </router-link>
    </div>
    <button
      class="navbar-toggler ms-auto me-2"
      type="button"
      @click="changeIsNavShow"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass" class="ms-2">
      <ul class="navbar-nav ms-0">
        <li v-for="con in config.menus" :key="con.url" class="nav-item">
          <router-link class="nav-link" :to="con.url">
            <i :class="con.icon"></i> {{ con.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { reactive, computed } from 'vue';
import config from '@/config/index.js';

export default {
  setup() {
    const state = reactive({ isNavShow: false });

    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse'
    );

    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };

    return { state, changeIsNavShow, navClass, config };
  },
};
</script>
<style scoped>
.bg-image {
  background-image: url('../assets/animal.jpg'); /* 정적 파일 경로 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 200px;
}
</style>
