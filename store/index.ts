export const kunStoreReset = () => {
  usePersistKunStore().$reset()

  useTempKunStore().$reset()
}
