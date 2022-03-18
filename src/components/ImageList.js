import React from "react";
class ImageList extends React.Component {

    render() {
        const mappedImages = this.props.images.map((i) => {
            return <img src={i?.urls?.small} alt={i?.alt_description}/>
        });
        return (mappedImages.length > 0 &&  <div> {mappedImages} </div>)
    }
}

export default ImageList;