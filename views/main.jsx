'use babel';

import React from 'react';
import * as fs from 'fs';
import * as electron from 'electron';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.write.bind(this);
  }
  
  write(event) {
    console.log("button clicked");
    var app = electron.remote;
    var dialog = app.dialog;
    dialog.showSaveDialog(function (fileName) {
      if (fileName === undefined){
        console.log("You didn't save the file");
        return;
      }
      fs.writeFile(fileName, "Hello world of angular react!", function(err) {
        if(err) {
          alert("An error ocurred creating the file "+ err.message)
        }
        alert("The file has been succesfully saved");
      })
    })    
  }

  render() {
    return (
      <div>
        <div>Hello from React with ES6 by Jared :)</div>
        <button type="button" onClick={this.write}>Write</button>
      </div>
    );
  }
}
