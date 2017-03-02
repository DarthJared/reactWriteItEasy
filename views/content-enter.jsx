import React, { Component } from 'react';
import * as _ from 'lodash';

export default class ContentEnter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var styles = _.cloneDeep(this.constructor.styles);
        return (
           <div style={styles.backDropOpen}>
                <div style={styles.innerWrap}>
                    <paper-back />
                </div>
            </div>
        );
    }
}

ContentEnter.styles = {
    innerWrap: {
        'position': 'absolute',
        'width': 'calc(100% - 6px)',
        'left': '3px',
        'height': 'calc(100% - 3px)',
        'top': '3px',
        'margin': '0px',
        'overflow-y': 'scroll'
    },
    backDropOpen: {
        'width': 'calc(100% - 350px)',
        'position': 'absolute',
        'right': '0px',
        'bottom': '0px',
        'margin': '0px',
        'height': 'calc(100% - 30px)',
        'background-color': '#7A7A7A'
    },
    backDropClosed: {
        'width': '100%',
        'position': 'absolute',
        'right': '0px',
        'bottom': '0px',
        'margin': '0px',
        'height': 'calc(100% - 30px)',
        'background-color': '#7A7A7A'
    }
}
// ::-webkit-scrollbar {
//     width: 8px;
// }

// ::-webkit-scrollbar-thumb {
//     -webkit-border-radius: 10px;
//     border-radius: 10px;
//     background: rgba(0,0,0,0.6); 
// }

// ::-webkit-scrollbar-thumb:window-inactive {
//     background: rgba(0,0,0,0.6); 
// }
