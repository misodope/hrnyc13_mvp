import * as React from 'react';
import axios from 'axios';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      foodName: '',
      tag: ''
    }
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage() {
    axios.post('/upload', {
      imagePath: this.state.imageURL,
      foodName: this.state.foodName,
      tag: this.state.tag
    })
    .then(() => {
      console.log('Image successfully uploaded!')
    })
    .catch((error) => {
      console.log('There was an error uploading image', error);
    })
  }

  render() {
    return (
      <div>
        <ReactBootstrap.Form>
          
          <ReactBootstrap.FormGroup controlId="imageURL">
            <ReactBootstrap.ControlLabel>Direct Image URL</ReactBootstrap.ControlLabel>
            <ReactBootstrap.FormControl type="text" placeholder="Insert image URL." value={this.state.imageURL} onChange={(e) => this.setState({imageURL: e.target.value})}/>
          </ReactBootstrap.FormGroup>

          <ReactBootstrap.FormGroup controlId="imageName">
            <ReactBootstrap.ControlLabel>Name Your Food</ReactBootstrap.ControlLabel>
            <ReactBootstrap.FormControl type="text" placeholder="Name of item" value={this.state.foodName} onChange={(e) => this.setState({foodName: e.target.value})}/>
          </ReactBootstrap.FormGroup>

          <ReactBootstrap.FormGroup controlId="imageTag">
            <ReactBootstrap.ControlLabel>Tag Your Food</ReactBootstrap.ControlLabel>
            <ReactBootstrap.FormControl type="text" placeholder="Insert a tag" value={this.state.tag} onChange={(e) => this.setState({tag: e.target.value})}/>
          </ReactBootstrap.FormGroup>

          <ReactBootstrap.Button type="submit" bsStyle="info" bsSize="small" onClick={this.uploadImage}>Submit</ReactBootstrap.Button>

          <ReactBootstrap.FormGroup controlId="imageTag">
            <ReactBootstrap.ControlLabel>Upload Image</ReactBootstrap.ControlLabel>
            <ReactBootstrap.FormControl type="file"/>
          </ReactBootstrap.FormGroup>

        </ReactBootstrap.Form>
      </div>
    )
  }
}

export default Upload;
