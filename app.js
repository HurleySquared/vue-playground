const app = Vue.createApp({
  data() {
    return {
      myName: 'Eric Hurley',
      age: 27,
      imageUrl: 'https://images.app.goo.gl/jfx33bt7rosyYX5n8'
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
})

app.mount('#assignment')