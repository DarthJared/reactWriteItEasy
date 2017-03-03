import React from 'react';

export default class FontsConfig {
  constructor(props) {

  }

  static getFonts(){
    return [
        'Times New Roman',
        'Arial',
        'Helvetica',
        'Consolas',
        'Courier',
        'Calibri',
        'Calisto',
        'Serif',
        'San-Serif'
    ];
  } 

  static getSizes() {
    return [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        18,
        20,
        22,
        24,
        28,
        30,
        36,
        42,
        48
    ];
  }
}