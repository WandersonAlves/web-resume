<template>
  <div id="app" v-cloak>
    <nav class="navbar navbar-default navbar-fixed-top" v-bind:class="fromRouteCss">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <img alt="Brand" @click="changeLocale()" :src="currentFlag">
          </div>
          <p class="navbar-text lato boldier black font-size-12">{{currRoute | translate | uppercase}}</p>
        </div>
      </div>
    </nav>
    <transition class="animated" transition-mode="out-in" enter-to-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Home from './sections/Home.vue';

export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      enterActiveClass: "",
      currRoute: "",
      fromRouteCss: "",
    }
  },
  computed: {
    currentFlag () {
      if (this.$i18n.locale() === 'pt') {
        return '/src/assets/ptBR.png'
      } else if (this.$i18n.locale() === 'en') {
        return '/src/assets/enUS.png'
      }
    }
  },
  methods: {
    changeLocale () {
      if (this.$i18n.locale() === 'pt') {
        this.$i18n.set('en');
      } else if (this.$i18n.locale() === 'en') {
        this.$i18n.set('pt');
      }
    }
  },
  created() {
    this.$bus.$on('route-text', (text, color) => {
      this.currRoute = text;
      this.fromRouteCss = color;
    });
  },
  filters: {
    uppercase(value) {
      return value.toString().toUpperCase();
    }
  }
}
</script>

<style>
[v-cloak] {
    display:none;
}
.navbar-default {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.34);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
}
.navbar-brand {
  height: none;
}
</style>
