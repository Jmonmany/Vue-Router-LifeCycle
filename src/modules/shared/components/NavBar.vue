<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- <router-link :to="{ name: 'List' }">List</router-link>
    <router-link :to="{ name: 'Details', params: { id: 85 } }"
      >Details</router-link
    >
    <router-link :to="{ name: 'About' }">About</router-link> -->
    <CustomLink :to="'/'" v-for="link in links" :key="link.to" :link="link"></CustomLink>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links: [
                {to: '/home', name: 'Pokemons'},
                {to: '/pokemon/50', name: 'Por ID'},
                {to: '/about', name: 'About'},
                {to: 'https://google.com', name: 'Google'}
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>
<style scoped>
div {
  background-color: #f1f1f1;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

a.active {
  background-color: #2196f3;
  color: white;
}
.router-link-exact-active {
  background-color: #2196f3;
  color: white;
}
</style>
