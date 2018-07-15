<template>
  <div class="splash">
    <img src="../assets/logo.svg">
    <Splash msg="Infernal Engineering"/>
  </div>
</template>

<script>

import Splash from '@/components/Splash.vue'

export default {
  name: 'splash',
  components: {
    Splash
  }
}
</script>


<style scoped>
.splash {
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5em;
}

.splash img {
    width: 250px;
    height: 250px;
}
</style>
