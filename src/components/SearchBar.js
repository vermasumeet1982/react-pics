import React from "react";
class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
    }
        
    
    render() {
        return (
            <div className="ui segment">
                <form 
                    onSubmit = {/*(e) => {e.preventDefault();
                    console.log(this);}*/this.onFormSubmit} 
                    className="ui form">
                    <div className="field app">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            name="image-search" 
                            placeholder="Image Name" 
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>          
                </form>
            </div>
        );
    }
}

export default SearchBar;