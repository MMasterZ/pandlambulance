<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { analytics } from "src/router";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    onMounted(() => {
      // analytics;
    });
  },
});
</script>
