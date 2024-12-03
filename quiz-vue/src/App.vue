<script setup>
import { ref } from "vue";
import srcQuiz from "./data/quizes.json";

const quizes = ref(srcQuiz);
</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz Vue</h1>
      <input type="text" id="search-input" />
    </header>
    <section id="quize-container">
      <div v-for="quize in quizes" :key="quize.id" class="card">
        <img :src="quize.img" :alt="quize.title" />
        <div class="card-body">
          <h2>{{ quize.title }}</h2>
          <p>{{ quize.questions.length }} Questions</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  margin-right: 30px;
  font-weight: bold;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  padding: 10px;
  border-radius: 5px;
}

#quize-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 20px;
}

.card-body h2 {
  font-weight: bold;
}
</style>
