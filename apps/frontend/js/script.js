const app = new Vue({
  el: '#app',
  delimiters: ["[[","]]"],
  data() {
    return {
      quoteText: 'dsasd',
      quoteAuthor: '',
    };
  },
  created() {
    this.getQuote();
  },
  methods: {
    getQuote() {
      const url = '/random-quote';
      fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.quoteText = json.text;
          this.quoteAuthor = json.author;
        });
    },
  },
})

