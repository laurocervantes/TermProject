<template>
  <div id="app">
    <ChuckNorris />
  </div>
</template>

<script>
import ChuckNorris from "@/components/ChuckNorris";

export default {
  name: 'app',
  components: {
    ChuckNorris
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
