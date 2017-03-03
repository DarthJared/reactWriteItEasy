import React, { Component } from 'react';
import styles from './format-bar.css';

export default class FormatBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={styles.outside}>
                <div class={styles.topBar + " " + styles.opened}></div>
                <div class={styles.topBarOuter + " " + styles.opened}>
                    <div class={styles.formatButtons}>
                        <i class={styles.formatButton + " material-icons"}>format_bold</i>
                        <i class={styles.formatButton + " material-icons"}>format_italic</i>
                        <i class={styles.formatButton + " material-icons"}>format_underlined</i>
                    </div>
                    <div class={styles.fontOptions}>
                        <select class={styles.fontSelect}>
                            <option *ngFor="#option of fontsService.options">{{option}}</option>
                        </select>
                        <select class="fontSelect">
                            <option *ngFor="#size of fontsService.sizes">{{size}}</option>
                        </select>
                    </div>
                    <div class="moreFormatButtons">
                        <i class="material-icons formatButton">format_indent_increase</i>
                        <i class="material-icons formatButton">format_indent_decrease</i>        
                    </div>
                    <div class="quoteButton">
                        <i class="material-icons firstQuote">format_quote</i>
                        <i class="material-icons">format_quote</i>
                    </div>
                </div>
            </div>
        );
    }

}