import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BrPdBY-GpVqOufpiPLDoG5Cn3pPLlKWYQylehLWAEWI'
    }
});
