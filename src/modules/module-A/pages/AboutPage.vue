<template>
  <div>
    <h1>About Page</h1>
    <h3>{{name}}</h3>
    <button @click="onChangeName">Change names</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Paco",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Melissa";
    },
  },
  beforeCreate() {
    console.log("AboutPage beforeCreate");
  },
  created() {
    // good moment to fetch data
    console.log("AboutPage created");
  },
  beforeMount() {
    console.log("AboutPage beforeMount");
  },            
  mounted() {
    console.log("AboutPage mounted");
  },
  beforeUpdate() {
    console.log("AboutPage beforeUpdate");
  },
  updated() {
    console.log("AboutPage updated");
  },
  activated() {
    console.log("AboutPage activated");
  },
  deactivated() {
    console.log("AboutPage deactivated");
  },
  beforeUnmount() {
    console.log("AboutPage beforeUnmount");
  },
  unmounted() {
    console.log("AboutPage unmounted");
  },
  errorCaptured() {
    console.log("AboutPage errorCaptured");
  },
  renderTracked() {
    console.log("AboutPage renderTracked");
  },
  renderTriggered() {
    console.log("AboutPage renderTriggered");
  },
};
</script>
