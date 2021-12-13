<template>
  <div>
    <p>&nbsp;</p>
    <h1 id="memetitle">{{titleMeme}}</h1>
    <button class="btnmeme" @click="fetchMeme">{{btnTxt}}</button>
    <p>&nbsp;</p>
    <img id='img' :src="meme" alt="" style="width: 500px; height: 600px">
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

<style>

#memetitle {
  margin-top: .5em;
}

.btnmeme{
  background-color: #f9861a;
  border-radius: 20em;
  align-content: center;
  text-align: center;
  color: white;
  border-color: #f9861a;
  margin-bottom: 5px;
}

.btnmeme :hover {
  background-color: rgba(11, 10, 21, 0.82);
}

#img {
  border-radius: 5em;
  border-style: dotted;
  border-color: rgba(241, 139, 41, 0.99);
  margin-top: .1em;
}
</style>