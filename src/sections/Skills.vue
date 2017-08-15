<style scoped lang="sass">
.container
  width: 100vw
  height: 100vh

</style>
<template>
  <section>
    <div class="container bg-yellow container-padding-top">
      <h1>Under Construction</h1>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Skills',
    mounted() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'SKILLS');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '');
    }
  }
</script>