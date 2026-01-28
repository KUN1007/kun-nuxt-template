import type { TempKunStore } from '~/store/types/kun'

export const useTempKunStore = defineStore({
  id: 'tempKun',
  persist: false,
  state: (): TempKunStore => ({
    kun: 'CUTEST'
  }),
  actions: {
    resetPageStatus() {
      this.kun = ''
    }
  }
})
