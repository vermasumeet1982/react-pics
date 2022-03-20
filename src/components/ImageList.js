import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
class ImageList extends React.Component {

    render() {
        const mappedImages = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image}/>
        });
        return (mappedImages.length > 0 &&  <div className="image-list"> {mappedImages} </div>)
    }
}

export default ImageList;