<script setup lang="ts">
import { player } from "../state";
import { buttonState } from "../buttonState";
import { ref } from "vue";

const questionThree = {
  answer1: "Vermittlungsschicht",
  answer2: "Sitzungsschicht",
  answer3: "Bitübertragungsschicht",
  answer4: "Darstellungsübersicht",
};

const correctAnswer = ref(false);
const disableButtons = ref(false);
</script>

<template>
  <div>
    <div id="question">
      <h1>Question 3</h1>
      <h2>Was ist die dritte Schicht des OSI-Modells?</h2>
    </div>
    <div id="answers">
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
        {{ questionThree.answer1 }}
      </button>
      <button
        :disabled="disableButtons"
        :class="{ 'is-red': buttonState.button2 }"
        @click="
          () => {
            buttonState.button2 = true;
            correctAnswer = true;
            disableButtons = true;
          }
        "
      >
        {{ questionThree.answer2 }}
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
        {{ questionThree.answer3 }}
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
        {{ questionThree.answer4 }}
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
