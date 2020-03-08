import axios from "axios";
import CakeCanvas from "./components/Cake_Maker/canvas";

export default {
    login: function(email, password) {
        return axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
    },
        
    submitCake: function(cake) {
        return axios.post('http://localhost:3001/createCake', {
            occassion : cake.occassion,
            baseType: cake.baseType,
            baseFlavor : cake.baseFlavor,
            decorationType : cake.decorationType,
            decorationFlavor : cake.decorationFlavor,
            delivaryDate : cake.delivaryDate,
            userId : cake.email,
            details: cake.details
        })
    }
}