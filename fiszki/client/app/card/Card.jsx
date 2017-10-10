import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {blue50} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

export default class YourWords extends Component{
    
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
                <FloatingActionButton mini={true} className="delete-button">
                    <i className="material-icons">clear</i>
                </FloatingActionButton>
                <span> {this.props.ang}</span>
                <Divider style={dividerStyle} />
                <span> {this.props.pol}</span>
               </Paper>
            </div>
        );
    }
}