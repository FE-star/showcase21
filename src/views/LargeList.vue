<script setup>
import { ref } from 'vue'
const selected = ref(0);
const list = ref(
  Array.from({ length: 10000 }, (_, index) => {
    return {
      id: index,
      name: `test${index}`,
    };
  }),
);
const onClickSelect = (id) => {
  selected.value = id;
  console.time()
  new Promise((resolve)=> {
    resolve()
  }).then(v => console.timeEnd())
}
</script>
<template>
  <div>
    <div v-memo="[item.id === selected]" v-for="item in list" @click="onClickSelect(item.id)">
    <!-- <div v-for="item in list" @click="onClickSelect(item.id)"> -->
      <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
    </div>
  </div>
</template>