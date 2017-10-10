import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class AddWord extends Component{
    addEnglish(){
        function clearPolish(){
            this.refs.textAng.value = '';
        }
    }
    addPolish(){
        function clearPolish(){
            this.refs.textPol.value = '';
        }
    }
    render(){
        return(
            <div className="add-word-container">
                <TextField ref="textPol" hintText="Podaj Polskie słówko" />
                <RaisedButton label="Dodaj Polskie" primary={true} />
                <TextField ref="textAng" hintText="Podaj Angielskie słówko" />
                <RaisedButton label="Dodaj Angielskie" primary={true} />
            </div>
        );
    }
}