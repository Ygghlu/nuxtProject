export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state, n) {
    if (n) {
      state.counter += n
    } else state.counter++
  },
  dec(state) {
    state.counter--
  },
}
