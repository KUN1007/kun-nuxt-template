<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="root">
    <KunButton @click="navigateTo(localePath('/'))">Moe!</KunButton>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
