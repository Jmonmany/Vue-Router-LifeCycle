<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    class="normal-link"
    >{{ link.name }}</a
  >
  <!-- target="_blank" means that the link will open in a new tab -->
  <router-link
    v-else
    :to="{ name: link.to, params: { id: link.id } }"
    v-slot="{ href, isActive }"
    custom
    ><a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{
      link.name
    }}</a></router-link
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
