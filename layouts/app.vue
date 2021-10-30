<template>
  <main id="app">
    <h1>Das Einmaleins</h1>
    <nav id="nav">
      <nuxt-link v-for="num in numbers" :to="'/fabi/' + num" :key="num">1 x {{ num }}</nuxt-link>
    </nav>
    <nuxt-link to="/fabi/rechenspiel">Rechenspiel</nuxt-link>
    <slot />
  </main>
</template>
<script setup>
import numbers from '~/helper/numbers';
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 150%;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.5rem;

  &.router-link-exact-active {
    color: #42b983;
  }
}

main {
  padding-bottom: 10rem;
}
</style>
