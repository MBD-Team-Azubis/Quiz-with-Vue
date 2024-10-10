import { createRouter, createWebHashHistory } from "vue-router";

import FirstQuestion from "./components/FirstQuestion.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/questionone",
      name: "QuestionOne",
      component: FirstQuestion,
    },
  ],
});
