<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
//   const todoUrlPrefix = '/api/todos/';

const requestAPI = async () => {
  const listUrl = '/api/todos';
  let data = { todo: '윗몸일으키기 3세트', desc: '너무 빠르지 않게...' };
  const response = await axios.put(listUrl, data);
  console.log(response.data);
};
requestAPI();
</script>
