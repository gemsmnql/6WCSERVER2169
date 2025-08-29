<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/boy.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="James Carl N. Mananquil" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <!-- <div id = "app">
    <h1>{{ msg }}</h1>

    <Demo 1. Insert the component name, as shown below
     <about-us></about-us>
  </div> -->
</template>


<script>
// Import the newly created component
import AboutUs from './components/AboutUs.vue'

export default {
  name: 'app',
  components: {
    AboutUs
  },
  data () {
    return {
      msg: 'About Me'
    }
  }
}
</script>

<style scoped>
header {
  border:2px solid #006ab1;
  padding: 15px;
  margin: 0 50px 500px 0;
  line-height: 1.5;
}

.logo {
  height: 130px;
  width: 130px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
