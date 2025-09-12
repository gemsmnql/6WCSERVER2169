<template>
  <div class="blog">
    <h1>{{ title }}</h1>
    <div class="card-container">
      <div class="card">
        <img src="@/assets/ferrari.jpg" alt="Ferrari Engine">
        <div class="card-content">
          <span class="date">08 MAY</span>
          <span class="category">PASSION</span>
          <h2>Ferrari Magazine Issue 66</h2>
          <p>The latest Ferrari Magazine, issue 66, featuring Ferrari’s passion for performance and design.</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/ferrari.jpg" alt="Ferrari 849 Testarossa">
        <div class="card-content">
          <span class="date">2 DAYS</span>
          <span class="category">CARS</span>
          <h2>New Ferrari 849 Testarossa</h2>
          <p>Introducing the latest model in Ferrari's legendary Testarossa series. The future of Ferrari.</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/feraRri2.jpg" alt="Ferrari Sculpture">
        <div class="card-content">
          <span class="date">11 SEP</span>
          <span class="category">PASSION</span>
          <h2>A Taste of Supercars</h2>
          <p>Experience the design and craftsmanship that makes Ferrari supercars an art form.</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/ferrari.jpg" alt="Ferrari Tailor Made">
        <div class="card-content">
          <span class="date">04 SEP</span>
          <span class="category">CARS</span>
          <h2>Tailor Made for Niki</h2>
          <p>A tribute to the personal Ferrari tailored to racing legend Niki Lauda.</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/ferrari.jpg" alt="Ferrari Racing">
        <div class="card-content">
          <span class="date">02 SEP</span>
          <span class="category">RACES</span>
          <h2>A Special Friend</h2>
          <p>Celebrating the moments that shaped Ferrari's racing legacy with special guests.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Ferrari News Blog'
    }
  }
}
</script>

<style scoped>
.blog {
  color: #fff; /* White text */
  text-align: center;
  background-color: #121212; /* Dark background */
  padding: 40px 0;
  min-height: 100vh; /* Ensure it takes up full height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h1 {
  font-size: 4em; /* Increase font size */
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: 'Bebas Neue', sans-serif; /* Use a bolder, more stylish font */
  color: #f70d1a; /* Ferrari Red */
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 20px;
  justify-items: center;
  width: 100%; /* Full width to avoid space below */
  padding: 0 20px; /* Add some padding around the content */
}

.card {
  background: #1a1a1a; /* Dark background for cards */
  border-radius: 15px; /* Rounded corners */
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  max-width: 350px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6); /* Bigger shadow on hover */
}

.card img {
  width: 100%;
  height: 200px; /* Increase image height */
  object-fit: cover;
  border-radius: 8px;
}

.card-content {
  margin-top: 15px;
}

.date, .category {
  font-size: 0.9em;
  color: #bbb; /* Lighter text */
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}

.card h2 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #fff;
}

.card p {
  font-size: 1em;
  line-height: 1.5;
  color: #ddd; /* Light text for paragraph */
  margin-bottom: 15px;
}

.card-content a {
  color: #f70d1a;
  text-decoration: none;
  font-weight: bold;
}

.card-content a:hover {
  text-decoration: underline;
}
</style>
