import type { KunStore } from '~/store/types/kun'

export const usePersistKunStore = defineStore({
  id: 'Kun',
  persist: true,
  state: (): KunStore => ({
    kun: 'CUTEST'
  }),
  actions: {
    resetPageStatus() {
      this.kun = ''
    }
  }
})
