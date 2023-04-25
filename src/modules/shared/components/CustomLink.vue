<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank">{{ link.name }}</a>
  <!-- target="_blank" means that the link will open in a new tab -->
  <router-link v-else :to="link.to" v-slot="{ href, isActive }"
    ><a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a></router-link
  >
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.is-active {
  background-color: #2196f3;
  color: white;
}
.normal-link {
  color: black;
}
</style>
