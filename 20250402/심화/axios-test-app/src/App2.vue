<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

const requestAPI = async () => {
  const response = await axios.get(listUrl);
  console.log(response.data);
};
requestAPI();
</script>
