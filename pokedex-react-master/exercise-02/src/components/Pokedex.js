import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`

class Pokedex extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
    }).isRequired
  }

  render () {
    const { data } = this.props
    console.log('data', data)
    if(data.loading) {
      return (<div>Loading...</div>)
    }

    if(data.error) {
      console.log('error', data.error)
      return (<div>An unexpected error occured</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          Hey {data.Trainer.name}, there are 0 Pokemons in your pokedex
        </Title>
      </div>
    )
  }
}

const TrainerQuery = gql`
  query TrainerQuery {
    Trainer(name: "Ryan Westlake") {
      name
    }
  }
`

const PokedexWithData = graphql(TrainerQuery)(Pokedex)

export default PokedexWithData
