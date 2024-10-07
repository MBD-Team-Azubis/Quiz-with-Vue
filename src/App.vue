<script setup lang="ts">
import { ref, reactive } from "vue";

let nameStore = ref("");

const player = reactive({
  name: "",
  points: 0,
});

function storeName() {
  player.name = nameStore.value;
  console.log(player);
}
</script>

<template>
  <div class="screen">
    <h1>OSI-Quiz</h1>
    <input
      type="text"
      v-model="nameStore"
      @keydown.enter="storeName()"
      placeholder="Please enter your name:"
      v-if="player.name === ''"
    />
    <div>
      <h2>Your name: {{ player.name }}</h2>
      <h2>Your points: {{ player.points }}</h2>
    </div>
  </div>
</template>

<style scoped>
.screen {
  margin: 0;
  height: 100vh;
  text-align: center;
  background-color: burlywood;
}

input {
  position: relative;
}
</style>
