import React, { Component } from 'react';
import styles from './format-bar.css';
import FontsConfig from './../../scripts/fonts.js'

export default class FormatBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var fontOptions = FontsConfig.getFonts();
        var fontSizes = FontsConfig.getSizes();

        var fontOptionsHtml = fontOptions.map((option) => {
            <option>{option}</option>
        });

        var fontSizesHtml = fontSizes.map((size) => {
            <option>{size}</option>
        });

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
                            {fontOptionsHtml}
                        </select>
                        <select class={styles.fontSelect}>
                            {fontSizesHtml}
                        </select>
                    </div>
                    <div class={styles.moreFormatButtons}>
                        <i class={styles.formatButton + " material-icons"}>format_indent_increase</i>
                        <i class={styles.formatButton + " material-icons"}>format_indent_decrease</i>        
                    </div>
                    <div class={syltes.quoteButton}>
                        <i class={styles.firstQuote + " material-icons"}>format_quote</i>
                        <i class="material-icons">format_quote</i>
                    </div>
                </div>
            </div>
        );
    }

}