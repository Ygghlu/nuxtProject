<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      {{ this.$store.state.counter }}
      <v-btn @click="addcount()">click</v-btn>
      <v-btn @click="deccount()">dec</v-btn>
      <v-btn @click="addtwo(20)">add2</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    addcount() {
      this.$store.commit('increment')
    },
    deccount() {
      this.$store.commit('dec')
    },
    addtwo(n) {
      this.$store.commit('increment', this.n)
    },
  },
}
</script>
