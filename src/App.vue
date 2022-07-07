<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

import { kApp, kPage, kNavbar, kBlock } from "konsta/vue";

</script>

<template>
  <k-app theme="ios">
    <!-- 
    <RouterView />
       -->
    <k-page>
      <k-navbar title="My App" />
      <k-block>
        <p>Here comes my app</p>
      </k-block>
    </k-page>
  </k-app>
</template>

<style></style>

