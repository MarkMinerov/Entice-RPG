new Vue({
    el: '#app',

    data: {
        players: null,
        maxPlayers: null,
        news: [
            {
                header: 'Заголовок 1',
                description: 'Какой-то текст',
                time: '',
				link: 'https://google.com'
            },

            {
                header: 'Заголовок 2',
                description: 'Какой-то текст',
                time: '',
				link: 'https://youtube.com'
            },

            {
                header: 'Заголовок 3',
                description: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.',
                time: '',
				link: 'https://yandex.ru'
            },

        ]
    },

    filters: {
       sliceString: (value, length) => `${value}`.length > length ? `${`${value}`.substr(0, length).trim()}...` : `${value}`,
    },
  
    mounted() {
        axios.get('http://monitor.sacnr.com/api/?IP=176.32.39.8&Port=7777&Action=info&Format=JSON')
            
            .then(res => {
                this.players = (res.Players || 1);
                this.maxPlayers = (res.MaxPlayers || 1);
            })

            .catch( () => {
                this.players = 1
                this.maxPlayers = 1;
            })
    }

})