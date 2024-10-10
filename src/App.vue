<script setup lang="ts">
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";

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
    <header>
      <div class="playerdata">
        <h2>Your name: {{ player.name }}</h2>
        <h2>Your points: {{ player.points }}</h2>
      </div>
      <h1>OSI-Quiz</h1>
      <input
        type="text"
        v-model="nameStore"
        @keydown.enter="storeName()"
        placeholder="Please enter your name:"
        v-if="player.name === ''"
      />
    </header>
    <nav>
      <router-link to="/questionone">QuestionOne</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.screen {
  margin: 0;
  height: 100vh;
  text-align: center;
  background-color: burlywood;
}

header {
  width: 100%;
  justify-content: center;
}

.playerdata {
  position: absolute;
  left: 0;
  width: 15em;
  height: 5em;
  text-align: center;
}
</style>
