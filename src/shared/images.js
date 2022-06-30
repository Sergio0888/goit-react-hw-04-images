import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
});

export const getImages = async (page = 1, key='27887897-8d6a5cafda5250a66fb1b4860', image_type='photo', orientation = 'horizontal' , per_page = 12) => {
    const {data} = await instance("/", {
        params: {
            page,
            key,
            image_type,
            orientation,
            per_page
        }
    });
    return data;
};

export const searchImages = async (q = '', key='27887897-8d6a5cafda5250a66fb1b4860') => {
    const {data} = await instance("/", {
        params: {
            q,
            key
        }
    });
    console.log(data);
    return data;
};