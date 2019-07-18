import React from 'react';
import { connect } from 'react-redux';
import  { increaseVote, decreaseVote } from '../actions/bowieActions';

const BowieCard = props => {
  const { bowie } = props;

  return (
    <div className='card'>
      <h2>Name: { bowie.name }</h2>
      <p>Votes: { bowie.votes }</p>
      <img src={ bowie.image } alt={ bowie.name }></img>
      <br />
      <button onClick={() => {
        props.increaseVote(bowie.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        props.decreaseVote(bowie.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseVote: (id) => dispatch(increaseVote(id)),
    decreaseVote: (id) => dispatch(decreaseVote(id))
  }
}

export default connect(null, mapDispatchToProps)(BowieCard);
