<template>
  <div id="app">
    <b-form-group class="lang">
      <b-form-radio-group
        id="lang"
        v-model="$store.state.lang"
        :options="options"
        buttons
        name="lang"
        @change="changeLang"
      ></b-form-radio-group>
    </b-form-group>
    <div id="nav">
      <router-link to="/">{{ $t("home", {lng: $store.state.lang}) }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { text: 'EN', value: 'en' },
        { text: 'PT-BR', value: 'ptBr' }
      ]
    }
  },
  methods: {
    changeLang(value) {
      this.$store.commit('setLang', value)
    }
  },
  mounted() {}
}
</script>
<style lang="scss">
.home, .detail{
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #eee;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000;

    &.router-link-exact-active {
      color: #000;
    }
  }
}

.lang{
  position: absolute;
  right: 0;
}
</style>
