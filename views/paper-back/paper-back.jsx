import React, { Component } from 'react';
import styles from './paper-back.css';
import * as _ from 'lodash';

export default class PaperBack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={styles.paperBack}></div>
        );
    }

}