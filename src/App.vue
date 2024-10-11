<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { player } from "./state";
import { buttonState } from "./buttonState";
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
    <h1>OSI-Quiz</h1>
    <nav>
      <router-link
        @click="
          buttonState.button1 = false;
          buttonState.button2 = false;
          buttonState.button3 = false;
          buttonState.button4 = false;
        "
        to="/questionone"
        >Question 1</router-link
      >
      <router-link
        @click="
          buttonState.button1 = false;
          buttonState.button2 = false;
          buttonState.button3 = false;
          buttonState.button4 = false;
        "
        to="/questiontwo"
        >Question 2</router-link
      >
      <router-link
        @click="
          buttonState.button1 = false;
          buttonState.button2 = false;
          buttonState.button3 = false;
          buttonState.button4 = false;
        "
        to="/questionthree"
        >Question 3</router-link
      >
      <router-link
        @click="
          buttonState.button1 = false;
          buttonState.button2 = false;
          buttonState.button3 = false;
          buttonState.button4 = false;
        "
        to="/questionfour"
        >Question 4</router-link
      >
    </nav>
    <div class="playerdata">
      <h2>Your name: {{ player.name }}</h2>
      <h2>Your points: {{ player.points }}</h2>
    </div>

    <input
      type="text"
      v-model="nameStore"
      @keydown.enter="storeName()"
      placeholder="Please enter your name:"
      v-if="player.name === ''"
    />
    <!-- <Test v-model="player2.points"></Test> -->

    <div id="boxForQuestions"><router-view></router-view></div>
  </div>
</template>

<style scoped>
.screen {
  margin: 0;
  height: 100vh;
  text-align: center;
  background-color: #bde0fe;
}

h1 {
  margin: 0;
}

input {
  align-self: center;
  position: absolute;
  top: 14%;
  left: 45.5%;
}

.playerdata {
  margin-left: 1%;
  left: 0;
  width: 15em;
  height: 7em;
  border: 2px solid;
  background-color: #c7f9cc;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

#boxForAnswers {
  border: 2px solid black;
  width: 50%;
  height: 30vh;
  margin-top: 3%;
  margin-left: 25%;
}

nav {
  position: absolute;
  font-size: x-large;
  margin-left: 39%;
  margin-top: 2%;
}
</style>
