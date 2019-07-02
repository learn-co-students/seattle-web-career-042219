import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      visible: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddPokemon(this.state)
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidUpdate = () => {

    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
