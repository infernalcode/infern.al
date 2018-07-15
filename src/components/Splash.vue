<template>
  <span id="splash">
    <h1>{{ msg }}</h1>
    <p>
        <a href="https://github.com/infernalcode" title="github"><font-awesome-icon :icon="['fab', 'github']" /> github</a> |
        <a href="mailto:info@infern.al" title="contact"><font-awesome-icon icon="envelope" /> contact</a>
    </p>
  </span>
</template>

<script>
export default {
  name: 'Splash',
  props: {
    msg: String
  }
}
</script>

<style scoped>
a, a:visited, a:hover, a:active {
  color: #49ade9;
}

h1 {
  margin-bottom: 0;
}
</style>
