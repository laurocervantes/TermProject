<template>
  <div id="app">
    <h1 id="appo">{{appTitle}}</h1>
    <p>&nbsp;</p>
    <ChuckNorris />
    <GetMeme />
  </div>
</template>

<script>
import ChuckNorris from "@/components/ChuckNorris";
import GetMeme from "@/components/GetMeme";

export default {
  name: 'app',
  components: {
    GetMeme,
    ChuckNorris
  },
  data () {
    return {
      appTitle: "ARE YOU FEELING LIKE FUN? 😇"
    }
  }
}
</script>

<style>
#appo {
  margin-bottom: 2em;
}
</style>
