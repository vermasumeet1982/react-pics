import unsplash from './UnsplashApi';

const getImages =  async (imageName) => {
    return await unsplash.get('/search/photos', {
        params: {
            query: imageName,
            per_page: 50,
        },
        
    });
}

export default getImages;