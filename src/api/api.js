const axios = require('axios')

module.exports = {
    getTodos: () => {
        return axios.get('http://localhost:3000/api/todo')
    },
    createTodo: (data) => {
        return axios.post('http://localhost:3000/api/todo', data, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }
}