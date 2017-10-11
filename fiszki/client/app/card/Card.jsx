import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {blue50} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import gql from 'graphql-tag'; 
import { graphql } from 'react-apollo'; 

class Card extends Component{
    constructor(props){
        super(props);
        this.removeCard = this.removeCard.bind(this);
    }
    removeCard(){
        this.props.removeWord({variables : {id : this.props.word._id}});
    }
    render(){
        const stylePaper = {
            height: 200,
            width: 200,
            margin: 20,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative'
          };
          const iconStyles = {
            marginRight: 24,
            width: 20,
            height: 20
          };
          const dividerStyle = {
              width: '100%'
          };
        return(
            <div>
                <Paper style={stylePaper} zDepth={3}>
                <FloatingActionButton mini={true} className="delete-button" onClick={this.removeCard}>
                    <i className="material-icons">clear</i>
                </FloatingActionButton>
                <span> {this.props.word.english}</span>
                <Divider style={dividerStyle} />
                <span> {this.props.word.polish}</span>
               </Paper>
            </div>
        );
    }
}
Card.propTypes = {
    word: PropTypes.object.isRequired
};
const removeWord = gql`
mutation removeWord($id: String!){
    removeWord(id: $id)
}
`;
export default ComponentWithMutations =  graphql(removeWord, { name: 'removeWord' })(Card);