import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = (petType) => {
    this.setState({
      filters: {
        type: petType
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(response => response.json()).then(petsObj => this.setState({ pets: [petsObj] }))
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat').then(response => response.json()).then(petsObj => this.setState({ pets: [petsObj] }))
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog').then(response => response.json()).then(petsObj => this.setState({ pets: [petsObj] }))
    } else if (this.state.filters.type === 'micropig') {
      fetch ('/api/pets?type=micropig').then(response => response.json()).then(petsObj => this.setState({ pets: [petsObj] }))
    }
  }

  onAdoptPet = (petID) => {
    const currentPet = this.state.pets.find(pet => pet.id === petID)
    this.setState({
      pets: [{...currentPet, isAdopted: true}]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
