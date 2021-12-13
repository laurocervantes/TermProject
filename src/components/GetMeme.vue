<template>
  <div>
    <h1>{{titleMeme}}</h1>
    <button class="next" @click="fetchMeme">{{btnTxt}}</button>
    <img id='img' :src="meme" alt="" style="width: 400px; height: 500px">
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
  align-content: center;
  text-align: center;
  color: white;
  border-color: #f9861a;
}

#img {
  border-radius: 30em;
  border-style: dotted;
  border-color: rgba(241, 139, 41, 0.99);
}
</style>