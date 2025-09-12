router-link class="nav-link" :to="{ name: 'home' }"
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <img src ="@/assets/logo.png">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'gallery' }">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
 .container-fluid img {
  height: 50px;
  width: auto;
  padding: 0 20px 0 10px;
 }

</style>

