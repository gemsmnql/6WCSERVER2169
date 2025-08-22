const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Clean the House' },
        { text: 'Fix the Bed' },
        { text: 'Prepare Breakfast' },
        { text: 'Attend WSERVER class' }
      ]
    }
  }
}
Vue.createApp(ListRendering).mount('#list-rendering')