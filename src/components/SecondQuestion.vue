<script setup lang="ts">
import { player } from "../state";

const questionTwo = {
  answer1: "open source interconnection model",
  answer2: "official systems interconnection model",
  answer3: "open systems inteconnection model",
  answer4: "open systems interface model",
};
</script>

<template>
  <div>
    <h1>Question 2</h1>
    <h2>Wofür steht die Abkürzung OSI?</h2>
    <button>{{ questionTwo.answer1 }}</button>
    <button>{{ questionTwo.answer2 }}</button>
    <button @click="player.points += 50">{{ questionTwo.answer3 }}</button>
    <button>{{ questionTwo.answer4 }}</button>
  </div>
</template>
