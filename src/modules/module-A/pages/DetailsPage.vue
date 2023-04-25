<template>
  <div>
    <h1>Details Page</h1>
    <span>#{{ id }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
    console.log("DetailsPage created");
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
  },
};
</script>
