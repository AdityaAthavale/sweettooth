import React from "react";
import Dropzone from './subcomponents/Dropzone';
import LoadingIndicator from "./subcomponents/LoadingIndicator";

const fileTypes = ["image/png", "image/jpg", "image/jpeg"]

class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUploading: false
        }
    }

    onDrop = (acceptedFiles) => {
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

        this.setState( {
            isUploading: true,
        })
        //Upload file here.
        if(this.props.onDrop != null) {
            this.props.onDrop(acceptedFiles)
        }
    }

    cancelUpload = () => {
        console.log("Cancelling upload")
        this.setState( {
            isUploading: false,
        })
        if(this.props.onCancel != null) {
            this.props.onCancel()
        }
    }

    render() {
        if(this.state.isUploading) {
            return (
                <div>
                    <LoadingIndicator cancelTitle="Cancel Upload" cancelledMessage="Image Upload Cancelled" cancelAction={this.cancelUpload}/>
                </div>
            )
        }
        return(
            <div>
                <Dropzone onDrop={this.onDrop} />
            </div>
        )
    }
}

export default ImageUploader