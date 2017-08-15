<style scoped lang="sass">
.container
  width: 100vw
  height: 100vh

</style>
<template>
  <section>
    <div class="container bg-orange container-padding-top">
      <h1>Under Construction</h1>
    </div>
    <arrow @click.native="nextPage()"></arrow>
  </section>
</template>
<script>
  import Arrow from '../components/Arrow.vue';
  export default {
    name: 'Skills',
    components: {
      Arrow
    },
    mounted() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'SKILLS', true);
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '', false);
    },
    methods: {
      nextPage() {
        this.$router.push({ name: 'contact' });
      }
    }
  }
</script>