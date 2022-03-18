import React from "react";
class ImageList extends React.Component {

    render() {
        return (this.props.images.length > 0 &&  <div> Found {this.props.images.length} images </div>)
    }
}

export default ImageList;