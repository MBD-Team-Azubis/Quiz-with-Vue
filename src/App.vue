<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { player } from "./state";
// import Test from "./components/Test.vue";

let nameStore = ref("");

function storeName() {
  player.value.name = nameStore.value;
  console.log(player);
}

// const player2 = ref({
//   name: "",
//   points: 0,
// });
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
      <router-link to="/questionone">Question 1</router-link>
      <router-link to="/questiontwo">Question 2</router-link>
      <router-link to="/questionthree">Question 3</router-link>
      <router-link to="/questionfour">Question 4</router-link>
    </nav>
    <router-view></router-view>

    <!-- <Test v-model="player2.points"></Test> -->
  </div>
</template>

<style scoped>
.screen {
  margin: 0;
  height: 100vh;
  text-align: center;
  background-color: #bde0fe;
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
  border: 2px solid;
}
</style>
