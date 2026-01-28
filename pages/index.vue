<script setup lang="ts">
const localePath = useLocalePath()

const randomPackIndex = randomNum(1, 5)
const randomStickerIndex = randomNum(1, 80)
const stickerLink = computed(
  () =>
    `https://sticker.kungal.com/stickers/KUNgal${randomPackIndex}/${randomStickerIndex}.webp`
)
</script>

<template>
  <div class="root">
    <div class="card">
      <h1>{{ $t('kun') }}</h1>

      <ClientOnly>
        <NuxtImg :src="stickerLink" />
      </ClientOnly>

      <p>{{ $t('template') }}</p>
      <KunButton type="danger" @click="navigateTo(localePath('/kun'))">
        {{ $t('remake') }}
      </KunButton>

      <SwitchLanguage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: grid;
  place-items: center;
}

.card {
  margin: 0 auto;
  padding: 17px;

  @include kun-center;
  flex-direction: column;
  @include kun-blur;

  h1 {
    color: var(--kungalgame-pink-3);

    &::before {
      content: '';
      color: var(--kungalgame-blue-5);
      margin-right: 0;
    }
  }

  img {
    margin: 10px 0;
  }

  p {
    text-align: center;
    font-weight: bold;
    margin-bottom: 17px;
  }
}
</style>
