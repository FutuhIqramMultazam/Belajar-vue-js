<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    function tambah() {
      count.value++;
    }

    function kurang() {
      count.value--;
    }

    return {
      count,
      tambah,
      kurang,
    };
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Counter</h1>
      <span id="value">{{ count }}</span>
      <div>
        <button @click="kurang" id="kurang">-</button>
        <button @click="tambah" id="tambah">+</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  padding: 50px;
  background-color: #04637e;
  border-radius: 8px;
  width: 200px;
}
#value {
  font-size: 50px;
}
button {
  font-size: 20px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 5px;
  transition: 250ms;
  cursor: pointer;
  color: white;
}
button:hover {
  scale: 1.2;
}
button:active {
  animation: pulse 0.5s linear;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

#kurang {
  background-color: #b22121;
}
#tambah {
  background-color: #037e03;
}
</style>
