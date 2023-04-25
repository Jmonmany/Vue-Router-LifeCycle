<template>
  <div>
    <h1>Details Page</h1>
    <!-- <span>#{{ $route.params.id }}</span> -->
    <span>#{{ id }}</span>
    <div v-if="pokemon" class="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <span>{{ pokemon.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // id: this.$route.params.id,
      pokemon: null,
    };
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
  created() {
    // console.log("DetailsPage created");
    // console.log(this.$route.params.id);
    // this.id = this.$route.params.id;
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        );
        const data = await response.json();
        console.log(data);
        this.pokemon = data;
      } catch {
        this.$router.push("/");
        console.log("Nothing here");
      }
    },
  },
};
</script>
<style scoped>
div {
  background-color: #f1f1f1;
  overflow: hidden;
  width: 100%;
}
.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
