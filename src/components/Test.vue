<script setup lang="ts">
const points = defineModel<number>({ required: true });

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
    <button @click.stop="points += 50">
      {{ questionOne.answer2 }}
    </button>
    <button value="0">{{ questionOne.answer3 }}</button>
    <button value="0">{{ questionOne.answer4 }}</button>
  </div>
</template>
