import { createRouter, createWebHashHistory } from "vue-router";

import FirstQuestion from "./components/FirstQuestion.vue";
import SecondQuestion from "./components/SecondQuestion.vue";
import ThirdQuestion from "./components/ThirdQuestion.vue";
import FourthQuestion from "./components/FourthQuestion.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/questionone",
      name: "QuestionOne",
      component: FirstQuestion,
    },
    {
      path: "/questiontwo",
      name: "QuestionTwo",
      component: SecondQuestion,
    },
    {
      path: "/questionthree",
      name: "QuestionThree",
      component: ThirdQuestion,
    },
    {
      path: "/questionfour",
      name: "QuestionFour",
      component: FourthQuestion,
    },
  ],
});
