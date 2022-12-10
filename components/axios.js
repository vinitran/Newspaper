import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.fpt.ai/hmi/tts/v5",
    headers: {

    }
    // withCredentials: true
});



instance.interceptors.response.use(
    (response) => {

        const { data } = response;
        return response.data;
    })


export default instance;
