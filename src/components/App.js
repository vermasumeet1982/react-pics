import './App.css';
import React from "react";
import SearchBar from "./SearchBar";
import getImages from '../api/ImagesApi';

class App extends React.Component {

    state = {
        images: []
    };
    
    onSubmitImageSearch = async (imageName) => {
        console.log(`Perform search on "${imageName}"`);
        const response = await getImages(imageName);
        console.log(response?.data?.results)
        this.setState({
            ...this.state,
            images: response?.data?.results,
        })
    }

    render() {
        return ( 
            <div className="ui container app">
                <SearchBar onImageSubmit = {this.onSubmitImageSearch}/>
                {this.state.images.length > 0 && <div> Found {this.state.images.length} images </div>}
            </div>
        );
    }
}

export default App;