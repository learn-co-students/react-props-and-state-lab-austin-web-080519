import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {




  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={{gender: pet.gender, type: pet.type, age: pet.age, name: pet.name, weight: pet.weight, isAdopted: pet.isAdopted, id: pet.id}} />)}
      </div>
    )
  }
}

export default PetBrowser
