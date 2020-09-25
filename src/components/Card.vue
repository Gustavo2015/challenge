<template>
	<div class="detail">
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
			<div class="card mb-3">
				<b-row class="no-gutters">
					<b-col
					cols="12"
					md="3"
					lg="3"
					>
					<img v-lazy="card.imageUrlHiRes" class="card-img" alt="...">
				</b-col>
				<b-col
				cols="12"
				md="9"
				lg="9"
				>
				<div class="card-body text-left">
					<h1 class="card-title">{{ card.name }}</h1>
					<p class="card-text">
						<b>#ID:</b> {{card.id}}
					</p>
					<p class="card-text">
						<b>{{ $t("types", {lng: $store.state.lang}) }}:</b> {{ $toList(card.types) }}
					</p>
					<p class="card-text">
						<b>{{ $t("resistances", {lng: $store.state.lang}) }}: </b>
						<span v-for="(resistance, key) in card.resistances" v-bind:key="key">
							{{ resistance.type }} ({{ resistance.value }})
							<i v-if="key == card.resistances">,</i>
						</span>
					</p>
					<p class="card-text">
						<b>{{ $t("weaknesses", {lng: $store.state.lang}) }}: </b>
						<span v-for="(resistance, key) in card.weaknesses" v-bind:key="key">
							{{ resistance.type }} ({{ resistance.value }})
							<i v-if="key == card.resistances">,</i>
						</span>
					</p>
					<p class="card-text">
						<b>{{ $t("attacks", {lng: $store.state.lang}) }}: </b>
					</p>
					<ul class="list-group">
						<li class="list-group-item list-group-item-action" v-on:click="modal(attack)" v-for="(attack, index) in card.attacks" v-bind:key="index" @click="modal(attack)">
							{{ attack.name }}
						</li>
					</ul>
				</div>
			</b-col>
		</b-row>
	</div>

	<p class="card-text mt-4 p-3">
		<router-link to="/">{{ $t("back", {lng: $store.state.lang}) }}</router-link>
	</p>
	<b-modal id="modal" hide-footer>
		<template v-slot:modal-title>
			{{ $t("attack", {lng: $store.state.lang}) }}: {{ attack.name }}
		</template>
		<div class="d-block text-center">
			<p class="text-left">
				<b>{{ $t("cost", {lng: $store.state.lang}) }}: </b> {{ $toList(attack.cost) }}
			</p>
			<p class="text-left">
				<b>{{ $t("description", {lng: $store.state.lang}) }}: </b> {{ attack.text }}
			</p>

			<p class="text-left">
				<b>{{ $t("damage", {lng: $store.state.lang}) }}: </b> {{ attack.damage }}
			</p>
		</div>
		<b-button class="mt-3" block @click="$bvModal.hide('modal')">{{ $t("close", {lng: $store.state.lang}) }}</b-button>
	</b-modal>
</b-container>
</div>
</template>

<script>
	export default {
		name: 'Detail',
		created() {},
		data() {
			return {
				card: {},
				loading: true,
				attack: {}
			}
		},
		methods: {
			modal(attack) {
				this.attack = attack
				this.$bvModal.show('modal')
			},
			async getData() {
				await this.$http.get(`/v1/cards/${this.$route.params.id}`).then(response => {
					this.card = response.data.card
					this.loading = false
				})
			}
		},
		mounted() {
			this.$scrollTo('body', 500)
			this.getData()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.list-group {
		max-width: 300px;

		.list-group-item {
			cursor: pointer;
		}
	}
</style>
