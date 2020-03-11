import axios from "axios";
import CakeCanvas from "./components/Cake_Maker/canvas";

const apiEndpoint = process.env.API_ENDPOINT;

export default {
    login: function(email, password) {
        return axios.post('/login', {
            email: email,
            password: password
        })
    },
        
    submitCake: function(cake) {
        console.log("This is cake", cake)
        return axios.post('/createCake', {
            occassion : cake.occassion,
            baseType: cake.baseType,
            baseFlavor : cake.baseFlavor,
            decorationType : cake.decorationType,
            decorationFlavor : cake.decorationFlavor,
            deliveryDate : cake.deliveryDate,
            userId : cake.email,
            details: cake.userDrawing
        })
    }
}