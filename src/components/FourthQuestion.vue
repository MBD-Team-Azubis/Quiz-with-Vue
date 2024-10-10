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
    <h1>Question 4</h1>
    <h2>
      Wann wurde das OSI-Modell von der ISO als Referenzmodell veröffentlicht?
    </h2>
    <button>{{ questionFour.answer1 }}</button>
    <button>{{ questionFour.answer2 }}</button>
    <button>{{ questionFour.answer3 }}</button>
    <button @click="player.points += 50">{{ questionFour.answer4 }}</button>
  </div>
</template>
