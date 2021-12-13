<template>
  <div id="app">
    <h1>{{appTitle}}</h1>
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
.next{
  background-color: #f9861a;
  border-radius: 20em;
  color: white;
  border-color: #f9861a;
}
</style>
