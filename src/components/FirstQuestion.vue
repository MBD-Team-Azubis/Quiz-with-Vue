<script setup lang="ts">
import { player } from "../state";

const questionOne = {
  answer1: 4,
  answer2: 7,
  answer3: 5,
  answer4: 8,
};
</script>

<template>
  <div>
    <div id="question">
      <h1>Question 1</h1>
      <h2>How many layer does the OSI-model consist of?</h2>
    </div>
    <div id="answers">
      <button>{{ questionOne.answer1 }}</button>
      <button @click="player.points += 50">{{ questionOne.answer2 }}</button>
      <button value="0">{{ questionOne.answer3 }}</button>
      <button value="0">{{ questionOne.answer4 }}</button>
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
  font-size: large;
  border-radius: 5%;
  background-color: #f9f7f3;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: x-large;
}
</style>
