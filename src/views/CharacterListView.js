import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions/index"
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return (<h1> LOADING </h1>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
isLoading: state.charsReducer.isLoading
})

// the characters and the fetching boolean
export default connect(
mapStateToProps,
{ getCharacters }
)(CharacterListView);