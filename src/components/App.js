import './App.css';
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    
    onSubmitImageSearch = imageName => {
        console.log(`Perform search on "${imageName}"`);
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