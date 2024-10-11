<script setup lang="ts">
import { player } from "../state";
import { buttonState } from "../buttonState";

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
      <button
        :class="{ 'is-red': buttonState.button1 }"
        @click="buttonState.button1 = true"
      >
        {{ questionFour.answer1 }}
      </button>
      <button
        :class="{ 'is-red': buttonState.button2 }"
        @click="buttonState.button2 = true"
      >
        {{ questionFour.answer2 }}
      </button>
      <button
        :class="{ 'is-red': buttonState.button3 }"
        @click="buttonState.button3 = true"
      >
        {{ questionFour.answer3 }}
      </button>
      <button
        :class="{ 'is-green': buttonState.button4 }"
        @click="
          () => {
            player.points += 50;
            buttonState.button4 = true;
          }
        "
      >
        {{ questionFour.answer4 }}
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
