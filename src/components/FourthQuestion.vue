<script setup lang="ts">
import { player } from "../state";

const questionFour = {
  answer1: "1990",
  answer2: "1980",
  answer3: "1975",
  answer4: "1984",
};
</script>

<template>
  <div>
    <div id="question">
      <h1>Question 4</h1>
      <h2>
        Wann wurde das OSI-Modell von der ISO als Referenzmodell veröffentlicht?
      </h2>
    </div>
    <div id="answers">
      <button>{{ questionFour.answer1 }}</button>
      <button>{{ questionFour.answer2 }}</button>
      <button>{{ questionFour.answer3 }}</button>
      <button @click="player.points += 50">{{ questionFour.answer4 }}</button>
    </div>
  </div>
</template>

<style scoped>
#question {
  border: 2px solid black;
  width: 30%;
  height: 15rem;
  align-content: center;
  text-align: center;
  margin-left: 35%;
  background-color: #c7f9cc;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: larger;
}

#answers {
  border: 2px solid black;
  width: 35%;
  height: 25rem;
  align-content: center;
  margin-left: 32.5%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #c7f9cc;
}

button {
  height: 10rem;
  width: 40%;
  margin: 0.75em;
  border-radius: 5%;
  background-color: #f9f7f3;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: x-large;
}
</style>
