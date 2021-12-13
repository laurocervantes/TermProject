<template>
  <div>
    <h1>{{titleMeme}}</h1>
    <button class="next" @click="fetchMeme">{{btnTxt}}</button>
    <img :src="meme" alt="get a meme">
  </div>
</template>

<script>
export default {
  name: "GetMeme",
  data() {
    return {
      titleMeme: "Get A Random Meme! 😂😂😂",
      btnTxt: "GENERATE!",
      meme: null
    }
  },
  methods: {
    fetchMeme: async function() {
      const response = await fetch('https://meme-api.herokuapp.com/gimme/wholesomememes');
      const data = await response.json();
      this.meme = data.url;
    }
  }
}
</script>

<style scoped>
.next{
  background-color: #f9861a;
  border-radius: 20em;
  color: white;
  border-color: #f9861a;
}
</style>