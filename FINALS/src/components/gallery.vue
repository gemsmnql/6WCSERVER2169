<template>
  <div class="gallery">
    <h1>{{ title }}</h1>
    <div class="grid">
      <div class="image-block" v-for="(model, index) in ferrariModels" :key="index">
        <img :src="model.image" :alt="model.name" class="gallery-image" />
        <p class="caption">{{ model.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data() {
    return {
      title: 'Ferrari Gallery',
      ferrariModels: [
        { image: require('@/assets/ferrari.jpg'), name: 'Ferrari 250 GTO' },
        { image: require('@/assets/ferarri2.jpg'), name: 'Ferrari F40' },
        { image: require('@/assets/ferrari.jpg'), name: 'Ferrari Enzo' },
        { image: require('@/assets/ferrari.jpg'), name: 'Ferrari LaFerrari' },
        { image: require('@/assets/ferrari.jpg'), name: 'Ferrari SF90 Stradale' },
        { image: require('@/assets/ferrari.jpg'), name: 'Ferrari 812 Superfast' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.gallery {
  background: black;
  padding: 80px 60px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

h1 {
  color: white;
  font-size: 3em;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bolder;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px 60px;
  padding: 0 40px;
}

.image-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.caption {
  margin-top: 15px;
  font-size: 1em;
  color: #ffd700;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
