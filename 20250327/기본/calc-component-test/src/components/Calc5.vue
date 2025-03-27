<template>
  <div>x : <input type="text" v-model.number="x" /></div>
  <br />
  결과 : {{ result }}
</template>
<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);
    watch(x, (current, old) => {
      console.log(`${old} => ${current}`);
      result.value = x.value;
    });
    return { x, result };
  },
};
</script>
