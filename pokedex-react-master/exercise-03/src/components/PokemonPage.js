import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PokemonCard from './PokemonCard'

class PokemonPage extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Pokemon: React.PropTypes.object
    }),
    route: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
  }

  render () {
    if(this.props.data.loading) {
      return <div>loading...</div>
    }

    if(this.props.data.error) {
      console.log('error', this.props.data.error)
      return <div>error in the request</div>
    }
    console.log('props', this.props)
    return (
      <div>
        <PokemonCard pokemon={this.props.data.Pokemon} handleCancel={this.goBack} />
      </div>
    )
  }

  goBack = () => {
    this.props.history.replace('/')
  }
}

const PokemonQuery = gql`
  query PokemonQuery($id: ID!) {
    Pokemon(id: $id) {
      id,
      name,
      url
    }
  }
`

const PokemonWithData = graphql(PokemonQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.pokemonId
    }
  })
})(PokemonPage)

export default PokemonWithData