<script setup lang="ts">
const { availableLocales, locale, setLocale } = useI18n()
</script>

<template>
  <div class="set-lang">
    <span>{{ $t('language.language') }}</span>

    <KunSelect
      :styles="{ width: '110px' }"
      class="kun-select"
      :options="availableLocales"
      i18n="language"
      @set="setLocale"
      :default-value="locale"
    >
      <span>{{ $t(`language.${locale}`) }}</span>
    </KunSelect>
  </div>
</template>

<style lang="scss" scoped>
.set-lang {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.kun-select {
  width: 100px;
}
</style>
