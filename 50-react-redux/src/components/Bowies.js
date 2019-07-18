import React from 'react';
import BowieCard from './BowieCard';
import { connect } from 'react-redux';

const Bowies = props => {
  
  console.log("connect functionality: ", connect)

  const mapBowies = () => {
    let bowieArray = Object.values(props.bowies);
    let bowieCards = bowieArray.map(bowie => {
      return (
        <BowieCard 
          key={ bowie.id }
          bowie={ bowie }
        />
      )
    })
    return bowieCards;
  }

  return (
    <div>
      <div className='container'>
        {mapBowies()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bowies: state.bowieReducer.bowies
  }
}
 
export default connect(mapStateToProps)(Bowies);
