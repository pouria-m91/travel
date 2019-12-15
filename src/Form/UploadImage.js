
import React from 'react';
import ImageUploader from 'react-images-upload';

class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}
export default UploadImage;


// https://codepen.io/hartzis/pen/VvNGZP
// import React, {Component} from "react";
//
// class UploadImage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             file: '',
//             imagePreviewUrl: ''
//         };
//         this._handleImageChange = this._handleImageChange.bind(this);
//         this._handleSubmit = this._handleSubmit.bind(this);
//     }
//
//     _handleSubmit(e) {
//         e.preventDefault();
//         // TODO: do something with -> this.state.file
//     }
//
//     _handleImageChange(e) {
//         e.preventDefault();
//
//         let reader = new FileReader();
//         let file = e.target.files[0];
//
//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//         };
//
//         reader.readAsDataURL(file)
//     }
//
//     render() {
//         let {imagePreviewUrl} = this.state;
//         let $imagePreview = null;
//         if (imagePreviewUrl) {
//             $imagePreview = (<img src={imagePreviewUrl} alt="sdf"/>);
//         }
//
//         return (
//             <div>
//                 <form onSubmit={this._handleSubmit}>
//                     <input type="file" onChange={this._handleImageChange} />
//                     <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
//                 </form>
//                 {$imagePreview}
//             </div>
//         )
//     }
//
// }
// export default UploadImage;



// import React, { Component } from 'react';
//
//
// class UploadImage extends Component {
//     state =  {
//         selectedFile: null,
//         imagePreviewUrl: null
//     };
//
//     fileChangedHandler = event => {
//         this.setState({
//             selectedFile: event.target.files[0]
//         });
//
//         let reader = new FileReader();
//
//         reader.onloadend = () => {
//             this.setState({
//                 imagePreviewUrl: reader.result
//             });
//         };
//
//         reader.readAsDataURL(event.target.files[0])
//
//     };
//
//     submit = () => {
//
//         let fd = new FormData();
//
//         fd.append('file', this.state.selectedFile);
//
//         let request = new XMLHttpRequest();
//
//         request.onreadystatechange = function() {
//             if (this.readyState === 4 &amp;&amp; this.status === 200) {
//                 alert('Uploaded!');
//             }
//         };
//         request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
//         request.send(fd);
//     };
//
//     render() {
//
//         let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
//         if (this.state.imagePreviewUrl) {
//             $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
//         }
//
//         return (
//             <div className="App">
//                 <input type="file" name="avatar" onChange={this.fileChangedHandler} />
//                 <button type="button" onClick={this.submit} > Upload </button>
//                 { $imagePreview }
//             </div>
//         );
//     }
// }
//
// export default UploadImage;