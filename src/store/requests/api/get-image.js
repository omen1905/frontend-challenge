import axios from 'axios';

export const getImageRequest = ( limit = 50, nextPage = 1 ) => {
    return axios({
        method: 'GET',
        url: 'https://api.thecatapi.com/v1/images/search',
        params: { limit, page: nextPage },
        headers: {
            'Accept': 'images/json',
            'Content-Type': 'images/json',
            'Cache': 'no-cache',
            'x-api-key': '73941c17-d547-43cb-ab8d-760cbe89a40e',
        },
    });
};
