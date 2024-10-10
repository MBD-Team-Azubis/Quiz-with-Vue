<script setup lang="ts">
import { player } from "../state";

const questionThree = {
  answer1: "Vermittlungsschicht",
  answer2: "Sitzungsschicht",
  answer3: "Bitübertragungsschicht",
  answer4: "Darstellungsübersicht",
};
</script>

<template>
  <div>
    <h1>Question 3</h1>
    <h2>Was ist die dritte Schicht des OSI-Modells?</h2>
    <button @click="player.points += 50">{{ questionThree.answer1 }}</button>
    <button>{{ questionThree.answer2 }}</button>
    <button>{{ questionThree.answer3 }}</button>
    <button>{{ questionThree.answer4 }}</button>
  </div>
</template>
