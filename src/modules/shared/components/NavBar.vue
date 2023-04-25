<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <router-link to="/">List</router-link>
        <router-link to="/id">Details</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

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
        background-color: #2196F3;
        color: white;
    }
    .router-link-exact-active {
        background-color: #2196F3;
        color: white;
    }
</style>
