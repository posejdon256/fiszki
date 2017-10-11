import React, {Component} from 'react';
import Card from './card/Card.jsx';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'; 
import { graphql } from 'react-apollo'; 

class YourWords extends Component{
    renderWords(){
        if (this.props.data.words && this.props.data.words instanceof Array) {
            return this.props.data.words.map((word) => {
              return (
                <Card key={word._id} word={word} />);
            });
          }
    }
    render(){
        return(
            <div className="cards-container">
                { this.renderWords() }
            </div>
        );
    }
}
YourWords.propTypes = { 
    data: PropTypes.shape({ 
        words: PropTypes.array,
    }).isRequired
}; 
const getWords = gql`
query WordsForDisplay {
  words {
    _id,
    polish,
    english,
    userId
  }
}
`;

export default ComponentWithMutations = graphql(getWords, {options: {pollInterval: 50}})(YourWords);