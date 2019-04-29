<template>
  <v-app>
    <MainATM></MainATM>
  </v-app>
</template>

<script>
import MainATM from './components/MainATM'

export default {
  name: 'App',
  components: {
    MainATM
  },
  data () {
    return {
      //
    }
  }
}
</script>
