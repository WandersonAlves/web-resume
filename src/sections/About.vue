<style scoped>

</style>
<template>
  <section>
    <h1>Oi!</h1>
  </section>
</template>
<script>
  export default {
    name: 'About',
    created () {
      this.$bus.$emit('change-animation');
    }
  }
</script>
