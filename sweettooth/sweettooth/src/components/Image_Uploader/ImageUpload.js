import React from "react";
import Dropzone from './Dropzone';

const fileTypes = ["image/png", "image/jpg", "image/jpeg"]

class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUploading: false
        }
    }

    onDrop(acceptedFiles) {
        //Make sure only one file is uploaded.
        if(acceptedFiles.length > 1) {
            alert("Only one file can be uploaded for one order.");
            return;
        }
        let file = acceptedFiles[0];

        //Check for supported file type.
        if (!fileTypes.includes(file.type)) {
            alert("File type not supported. Supported file types are PNG, JPG and JPEG.");
            return;
        }

        this.setState({
            isUploading: true
        })
        //Upload file here.
        //To do...
    }
    render() {
        return(
            <div>
                <Dropzone onDrop={this.onDrop} />
            </div>
        )
    }
}

export default ImageUploader