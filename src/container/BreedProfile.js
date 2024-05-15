import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';
import MainBreedImgList from './MainBreedImgList';
import SubBreedImgList from './SubBreedImgList';

class BreedProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      subBreedName: ""
    }
  }

  render() {
    return (
      <div>
        <div className="sub-breed-menu">
          {(this.props.subBreeds <= 0) ?
              <p className="gds-text--bold -m-b-2 -text-center">One of a kind. There are no sub-breeds for this dog.</p>
            :
              <SubBreedMenu
                breedName={this.props.breedName}
                subBreeds={this.props.subBreeds}
                subBreed={this.props.subBreed}
                selectedSubBreed={this.props.selectedSubBreed}
                subBreedName={this.state.subBreedName}
              />
          }
        </div>
        <div className="selected-breed-gallery">
          {(this.props.subBreeds <= 0) ?
            <MainBreedImgList
              breed={this.props.breed}
              breedName={this.props.breedName}
            />
          :
            <SubBreedImgList
              subBreed={this.props.subBreed}
              subBreedName={this.props.subBreedName}
            />
          }
        </div>
      </div>
    );
  }
}

export default BreedProfile
