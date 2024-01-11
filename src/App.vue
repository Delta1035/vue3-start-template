<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <el-config-provider :locale :size :button>
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
