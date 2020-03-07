import axios from "axios";

export default {
    login: function(email, password) {
        return axios.post('https://sweettoothbakers.herokuapp.com/login', {
            email: email,
            password: password
        })
    }
}