var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        show: false
    }
});

app.message = 'I have changed the data';

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#list-app',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Learn something else!' },
            { text: "Don't waste your time :)" },
        ]
    }
});