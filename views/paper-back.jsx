import React, { Component } from 'react';
import * as _ from 'lodash';

export default class PaperBack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var styles = _.cloneDeep(this.constructor.styles);
        return (
            <div style={styles.paperBack}></div>
        );
    }

}

PaperBack.styles = {
    paperBack: {
        'margin-left': '25px',
        'width': 'calc(100% - 50px)',
        'margin-top': '25px',
        'margin-bottom': '25px',
        'min-height': '800px',
        'background-color': '#FFFFFF',
        'box-shadow': '0px 0px 10px #222222'
    }
}