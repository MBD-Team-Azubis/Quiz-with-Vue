<script setup lang="ts">
import { player } from "../state";
import { buttonState } from "../buttonState";
import { ref } from "vue";

const questionOne = {
  answer1: 4,
  answer2: 7,
  answer3: 5,
  answer4: 8,
};

const correctAnswer = ref(false);
const disableButtons = ref(false);

// function disableButtons() {
//   if (wrongAnswer.value === true) {
//   }
// }
</script>

<template>
  <div>
    <div id="question">
      <h1>Question 1</h1>
      <h2>How many layer does the OSI-model consist of?</h2>
    </div>
    <div id="answers">
      <button
        :disabled="disableButtons"
        :class="{ 'is-red': buttonState.button1 }"
        @click="
          () => {
            buttonState.button1 = true;
            correctAnswer = true;
            disableButtons = true;
          }
        "
      >
        {{ questionOne.answer1 }}
      </button>
      <button
        :disabled="disableButtons"
        :class="{ 'is-green': correctAnswer }"
        @click="
          () => {
            player.points += 50;
            correctAnswer = true;
            disableButtons = true;
          }
        "
      >
        {{ questionOne.answer2 }}
      </button>
      <button
        :disabled="disableButtons"
        :class="{ 'is-red': buttonState.button3 }"
        @click="
          () => {
            buttonState.button3 = true;
            correctAnswer = true;
            disableButtons = true;
          }
        "
      >
        {{ questionOne.answer3 }}
      </button>
      <button
        :disabled="disableButtons"
        :class="{ 'is-red': buttonState.button4 }"
        @click="
          () => {
            buttonState.button4 = true;
            correctAnswer = true;
            disableButtons = true;
          }
        "
      >
        {{ questionOne.answer4 }}
      </button>
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
  margin-top: 1%;
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

.is-red {
  background: red;
}

.is-green {
  background: greenyellow;
}
</style>
