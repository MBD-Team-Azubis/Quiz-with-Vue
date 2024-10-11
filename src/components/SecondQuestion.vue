<script setup lang="ts">
import { buttonState } from "../buttonState";
import { player } from "../state";

const questionTwo = {
  answer1: "open source interconnection model",
  answer2: "official systems interconnection model",
  answer3: "open systems inteconnection model",
  answer4: "open systems interface model",
};

// const buttonState = ref(false);
</script>

<template>
  <div>
    <div id="question">
      <h1>Question 2</h1>
      <h2>Wofür steht die Abkürzung OSI?</h2>
    </div>
    <div id="answers">
      <button
        :class="{ 'is-red': buttonState.button1 }"
        @click="buttonState.button1 = true"
      >
        {{ questionTwo.answer1 }}
      </button>
      <button
        :class="{ 'is-red': buttonState.button2 }"
        @click="buttonState.button2 = true"
      >
        {{ questionTwo.answer2 }}
      </button>
      <button
        :class="{ 'is-green': buttonState.button3 }"
        @click="
          () => {
            player.points += 50;
            buttonState.button3 = true;
          }
        "
      >
        {{ questionTwo.answer3 }}
      </button>
      <button
        :class="{ 'is-red': buttonState.button4 }"
        @click="buttonState.button4 = true"
      >
        {{ questionTwo.answer4 }}
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
