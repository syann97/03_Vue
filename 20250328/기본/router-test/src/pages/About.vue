<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ fullPath }}</p>
  </div>
</template>

<script setup>
// default
// export default {
//   created() {
//     // this.$router: 라우터 인스턴스
//     // this.$route: 현재 라우트 정보
//     console.log(this.$route.fullPath);  // 현재 전체 경로
//   }
// }

// Composition API
// import { useRoute, useRouter } from 'vue-router';

// export default {
//   setup() {
//     const route = useRoute();    // 현재 라우트 정보
//     const router = useRouter();  // 라우터 인스턴스

//     console.log(route.fullPath);

//     return { route };
//   }
// }

// setup() 함수
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const fullPath = computed(() => route.fullPath);

console.log(route);
</script>
