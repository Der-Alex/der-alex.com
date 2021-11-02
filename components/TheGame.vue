<template>
  <div class="game">
    <div class="calculation">
      <span class="num num1">{{ num1 }}</span>
      <span class="sign">x</span>
      <span class="num num2">{{ num2 }}</span>
      <span class="sign">=</span>
    </div>
    <input class="res input" type="text" ref="input" pattern="[0-9]+" v-model="res" @keyup.enter="checkCalcHandler" v-if="check === null" maxlength="3" />
    <span class="res" v-else>{{ res.length > 0 ? res : ' ' }}</span>
    <span class="num success" v-if="check">✓</span>
    <span class="num error" v-if="check === false">⨯ ({{ num1 + ' x ' + num2 + ' = ' + num1 * num2 }})</span>
  </div>
</template>

<script setup>
import { onMounted, ref, onRenderTriggered, onUpdated } from 'vue';

import score from '~/new-store/score';

let check = ref(null);
let res = ref('');
let input = ref(null);
let num1 = ref(0);
let num2 = ref(0);

const checkCalcHandler = () => {
  score.updateCalculated();
  console.log('checking', num1.value, num2.value, res.value, check.value);
  check.value = num1.value * num2.value === parseInt(res.value);
  if (check.value === true) {
    score.updateCorrect();
  }
  if (check.value === false) {
    score.updateWrong();
  }
};

onMounted(() => {
  console.log('mounted');
  console.log('input', input.value);
  num1.value = score.getNewNum1();
  num2.value = score.getNewNum2();
  setTimeout(() => {
    input.value.focus();
  }, 50);
});
</script>

<style lang="scss" scoped>
.game {
  width: 23rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.calculation {
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.num {
  padding: 0 0.25rem;
}
.res {
  width: 3.5rem;
  margin-left: 0.25rem;
  text-align: right;
}
.success {
  color: #0c4;
}
.error {
  color: #c00;
}
input {
  color: #2c3e50;
  font-size: 100%;
  padding: 0.25rem 0.5rem;
  box-sizing: content-box;
}
</style>
