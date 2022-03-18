import React from "react";
class ImageList extends React.Component {

    render() {
        const mappedImages = this.props.images.map(({
            id,
            alt_description,
            urls,
        }) => {
            return <img key={id} src={urls?.small} alt={alt_description}/>
        });
        return (mappedImages.length > 0 &&  <div> {mappedImages} </div>)
    }
}

export default ImageList;