import React from 'react';
import { connect } from 'react-redux';
import { updateTitle }  from '../actions/headerActions';

const Header = (props) => {
  console.log("header props: ", props)
  return (
    <header className="App-header">
      <div onClick={props.updateTitle}>
        {props.title}
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.headerReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: () => {dispatch(updateTitle())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
