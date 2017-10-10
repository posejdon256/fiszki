import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AddWord from './AddWord.jsx';
import YourWords from './YourWords.jsx';

export default class App extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: 'newWord'
        }
    }
    handleChange(_value){
        this.setState({
            value: _value
        })
    }
    getChildContext(){
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    render(){
        return(
            <div>
                <AppBar
                    title="Twoja nauka angielskiego"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Dodaj słówko" value="newWord">
                        <AddWord />
                    </Tab>
                    <Tab label="Twoje słówka" value="yourWords">
                        <YourWords />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};