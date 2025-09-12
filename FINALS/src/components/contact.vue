<template>
  <div class="contact">
    <div class="hero">
      <h1>{{ title }}</h1>
      <p>We’d love to hear from you. Reach out and let’s connect.</p>
    </div>

    <form class="form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      title: 'Contact Ferrari'
    }
  }
}
</script>

<style scoped>
.contact {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #121212; /* Dark background for a sleek feel */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  align-items: center; /* Horizontally center content */
  padding: 20px;
  min-height: 100vh; /* Full screen height */
}

.hero {
  margin-bottom: 40px;
  text-align: center; /* Center the title and paragraph */
}

.hero h1 {
  font-size: 4em;
  color: #f70d1a; /* Ferrari red */
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', sans-serif; /* Bold font for the title */
}

.hero p {
  font-size: 1.5em;
  color: #ccc;
  margin-top: 10px;
}

.form {
  max-width: 600px;
  width: 100%; /* Ensure form takes full width up to max-width */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
textarea {
  padding: 15px;
  border: 2px solid #444;
  border-radius: 12px;
  font-size: 1em;
  background-color: #222;
  color: #fff;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #f70d1a; /* Red border when input is focused */
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

button {
  padding: 15px;
  background-color: #f70d1a; /* Ferrari red for the button */
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #c50d12; /* Slightly darker red on hover */
  transform: scale(1.05); /* Button scaling effect on hover */
}

button:active {
  transform: scale(0.98); /* Slight click effect when button is pressed */
}
</style>
