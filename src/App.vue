<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppNav from "@/components/AppNav.vue";

const myfunc = () => {
  alert("hello");
};
</script>

<template>
  <AppNav />
  <div class="max-w-5xl m-auto">
    <button @click="myfunc">throw</button>
    <router-view />
  </div>
</template>
