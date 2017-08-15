<style scoped lang="sass">
.color 
  background-color: yellow

.container
  width: 100vw
  height: 100vh

</style>
<template>
  <section>
    <div class="container color container-padding-top">
      <h1>Under Construction</h1>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'About',
    created() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'ABOUT');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '');
    }
  }
</script>