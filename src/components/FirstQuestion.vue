<script setup lang="ts">
const questionOne = {
  answer1: 4,
  answer2: 7,
  answer3: 5,
  answer4: 8,
};
</script>

<template>
  <div>
    <h1>Question 1</h1>
    <h2>How many layer does the OSI-model consist of?</h2>
    <button>{{ questionOne.answer1 }}</button>
    <button>{{ questionOne.answer2 }}</button>
    <button>{{ questionOne.answer3 }}</button>
    <button>{{ questionOne.answer4 }}</button>
  </div>
</template>
