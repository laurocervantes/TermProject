<template>
  <div>
    <h1 @mouseover="titleChuck=discretion" @mouseleave="titleChuck=backState">{{titleChuck}}</h1>
    <button class="next" v-on:click="getData">Fetch!</button>
    <div>{{chuckNorriJoke.value}}</div>
  </div>
</template>

<script>
export default {
  name: "ChuckNorris",
  data() {
    return {
      chuckNorriJoke: {},
      titleChuck: "Get a Chuck Norris Fact!",
      discretion: '- * DISCRETION ADVISED * -',
      backState: "Get a Chuck Norris Fact!"
    };
  },
  methods: {
    getData() {
      fetch("https://api.chucknorris.io/jokes/random")
          .then(response => response.json())
          .then(data => (this.chuckNorriJoke = data));
    },
  }
};
</script>

<style>
.next{
  background-color: #f9861a;
  border-radius: 20em;
  color: white;
  border-color: #f9861a;
}
</style>