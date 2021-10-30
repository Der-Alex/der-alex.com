import { reactive, readonly } from 'vue';

const state = reactive({
  calculated: 0,
  correct: 0,
  wrong: 0,
  num1: 0,
  num2: 0,
});

const updateCalculated = () => {
  state.calculated++;
};

const updateCorrect = () => {
  state.correct++;
};

const updateWrong = () => {
  state.wrong++;
};

const getNewNum1 = (): number => {
  state.num1 = Math.floor(Math.random() * 10) + 1;
  return state.num1;
};
const getNewNum2 = (): number => {
  state.num2 = Math.floor(Math.random() * 10) + 1;
  return state.num2;
};

const score = {
  state: readonly(state),
  updateCalculated,
  updateCorrect,
  updateWrong,
  getNewNum1,
  getNewNum2,
};

export default score;
