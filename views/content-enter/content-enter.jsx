import React, { Component } from 'react';
import styles from './content-enter.css';
import PaperBack from './../paper-back/paper-back';

export default class ContentEnter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div class={styles.backDropOpen}>
                <div class={styles.innerWrap}>
                    <PaperBack />
                </div>
            </div>
        );
    }
}

