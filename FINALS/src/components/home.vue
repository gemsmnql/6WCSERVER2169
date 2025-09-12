<template>
  <div class="hello">
    <img src="@/assets/ferrari.jpg" alt="Ferrari Background" />
    <img id="logo" src="@/assets/logo.png" alt="Ferrari Logo" />
    <h1>{{ msg }}</h1>
    <div class="buttons">
      <button>FERRARI 849 TESTAROSSA</button>
      <button>FERRARI 849 TESTAROSSA SPIDER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'PERFORMANCE REIMAGINED'
    }
  }
}
</script>

<style scoped>

.hello {
  position: relative;
  height: 100vh;
  padding: 50px;
  color: #fff;
  font-family: 'helvetica';
  text-align: center;
  overflow: hidden;
}

.hello img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
}

#logo {
  display: block;
  margin: 100px auto 30px;
  height: 250px;
  width: auto;
  z-index: 1;
  position: relative;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;
  z-index: 1;
  position: relative;
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  z-index: 1;
  position: relative;
}

.buttons button {
  background-color: transparent;
  color: #fff;
  border: 2px solid rgb(216, 216, 216);
  padding: 15px 30px;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttons button:hover {
  border: 2px solid white;
}
</style>
