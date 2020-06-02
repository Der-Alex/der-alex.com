<template>
  <div class="test-styles">
    <h1 class="h1">This is h1</h1>
    <h2 class="h2">This is h1</h2>
    <h3 class="h3">This is h1</h3>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col"><p>some col</p></div>
        <div class="col"><p>some col</p></div>
        <div class="col"><p>some col</p></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Vue} from 'vue-property-decorator';

  export default class TestStyles extends Vue {}
</script>