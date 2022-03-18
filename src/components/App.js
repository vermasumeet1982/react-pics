import './App.css';
import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    
    onSubmitImageSearch = async (imageName) => {
        console.log(`Perform search on "${imageName}"`);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { 
                query: imageName,
                per_page: 50,
            },
            headers: {
                Authorization: 'Client-ID BrPdBY-GpVqOufpiPLDoG5Cn3pPLlKWYQylehLWAEWI'
            }
        });
        console.log(response?.data?.results)
    }

    render() {
        return ( 
            <div className="ui container app">
                <SearchBar onImageSubmit = {this.onSubmitImageSearch}/>
            </div>
        );
    }
}

export default App;