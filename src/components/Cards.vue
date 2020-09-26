<template>
  <div>
    <b-overlay
      id="overlay-background"
      show
      variant="light"
      opacity="0.85"
      blur="2px"
      rounded="sm"
      v-if="loading"
    ></b-overlay>

    <b-container v-else ref="top">
      <form @submit.prevent="getData()">
        <b-input-group class="mb-4">
          <b-form-input type="text" v-model="search"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-primary" v-on:click="getData()">{{$t("search", {lng: $store.state.lang})}}</b-button>
            <b-button variant="outline-primary" v-on:click="getData(true)">{{$t("clear", {lng: $store.state.lang})}}</b-button>
          </b-input-group-append>
        </b-input-group>
      </form>
      <h3 class="text-center" v-if="cards.length === 0">Não foram encontrados resultados para "{{search }}"</h3>
      <div v-else>
        <p class="text-muted text-center">{{$t("page", {lng: $store.state.lang})}} {{ $store.state.page }} {{$t("of", {lng: $store.state.lang})}} {{ totalPages }}</p>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          slide
          indicators
          controls
          img-width="1024"
          img-height="480"
          v-if="$isMobile()"
        >
          <b-carousel-slide
            v-for="(card, key) in cards"
            v-bind:key="key"
            to="/detail/1"
          >
            <template slot="img">
              <router-link class="card mb-2" tag="article" :to="'/detail/' + card.id">
                <img :src="card.imageUrl" alt="" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">{{ card.name }}</h4>
                  <h6 class="card-subtitle text-muted mb-2">{{ card.id }}</h6>
                </div>
                <div class="card-footer">
                  <small class="text-muted">{{ $toList(card.types) }}</small>
                </div>
              </router-link>
            </template>
          </b-carousel-slide>
        </b-carousel>

        <b-row class="card-group" v-else>
          <b-col
            v-for="(card, key) in cards"
            v-bind:key="key"
            cols="12"
            md="6"
            lg="3"
            to="/detail/1"
          >
            <router-link class="card mb-2" tag="article" :to="'/detail/' + card.id">
              <img :src="card.imageUrl" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">{{ card.name }}</h4>
                <h6 class="card-subtitle text-muted mb-2">{{ card.id }}</h6>
              </div>
              <div class="card-footer">
                <small class="text-muted">{{ $toList(card.types) }}</small>
              </div>
            </router-link>
          </b-col>
        </b-row>
        <p class="text-muted text-center">{{$t("page", {lng: $store.state.lang})}} {{ $store.state.page }} {{$t("of", {lng: $store.state.lang})}} {{ totalPages }}</p>
        <b-row class="align-content-around mt-5">
          <b-col>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="$store.state.page == 1 ? 'disabled':''">
                  <a class="page-link" v-on:click="changePage()" tabindex="-1" :aria-disabled="$store.state.page == 1 ? 'true':'false'">{{$t("prev", {lng: $store.state.lang})}}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" v-on:click="changePage(true)">{{$t("next", {lng: $store.state.lang})}}</a>
                </li>
              </ul>
            </nav>
          </b-col>
        </b-row>
      </div>
    </b-container>
    </div>
</template>

<script>

export default {
  name: 'Cards',
  data() {
    return {
      cards: [],
      page: 1,
      totalPages: 0,
      search: null,
      loading: true
    }
  },
  created() {

  },
  methods: {
    changePage(next) {
      this.cards = []
      if (next) {
        this.$store.commit('setPage', this.$store.state.page + 1)
        this.getData()
        return
      }
      this.$store.commit('setPage', this.$store.state.page - 1)
      this.getData()
    },
    async getData(clear) {
      let queryString = ''
      if (this.search) {
        queryString = `&name=${this.search}`
      }
      if (clear) {
        this.search = null
        queryString = ''
      }
      this.cards = []
      this.loading = true
      await this.$http.get(`/v1/cards?page=${this.$store.state.page}${queryString}`).then(response => {
        this.loading = false
        this.cards = response.data.cards
        this.totalPages = Math.ceil(response.headers['total-count']/response.headers['count'])
      })
      !this.search ? '' : this.search
      this.$scrollTo('body', 500)
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#overlay-background{
  position: absolute !important;
  width: 100%;
  height: 100%;
}
.card {
  cursor: pointer;

  .card-footer {
    min-height: 49px;
  }
}
</style>
