<template>
  <div class="about">
    <div class="hero">
      <img src="@/assets/ferarri2.jpg" alt="Ferrari Banner" />
      <div class="overlay">
        <h1>{{ title }}</h1>
        <p>Driven by Passion. Defined by Performance.</p>
      </div>
    </div>

    <section class="content">
      <h2>Our Story</h2>
      <p>
        Founded in 1929 by Enzo Ferrari, the brand has become a global icon of speed, luxury, and innovation. From the racetrack to the road, Ferrari continues to push boundaries in automotive design and engineering.
      </p>

      <h2>Design Philosophy</h2>
      <p>
        Every Ferrari is a masterpiece—crafted with precision, powered by passion, and sculpted for performance. Our design language blends aerodynamic excellence with timeless Italian style.
      </p>

      <h2>Legacy</h2>
      <p>
        With countless victories in Formula 1 and a lineage of legendary models, Ferrari stands as a symbol of excellence. We don’t just build cars—we create experiences.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      title: 'About Ferrari'
    }
  }
}
</script>

<style scoped>
.about {
  font-family: 'Helvetica Neue', sans-serif;
  color: #fff;
  background-color: #000;
}

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay h1 {
  font-size: 4em;
  color: #cc0000;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.overlay p {
  font-size: 1.5em;
  color: #fff;
  margin-top: 20px;
}

.content {
  padding: 60px 30px;
  background-color: #111;
  text-align: center;
}

.content h2 {
  font-size: 2em;
  color: #ffd700;
  margin-bottom: 15px;
}

.content p {
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
}
</style>
