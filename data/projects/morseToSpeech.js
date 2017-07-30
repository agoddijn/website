var path = "/data/images/projects/morseToSpeech/";
var codePath = "../code/morseToSpeech/";

var letter = require(codePath + "letter.js");
var table = require(codePath + "table.js");
var uart = require(codePath + "uart.js");
var mainControl = require(codePath + "mainControl.js");

module.exports = {
    name: "Morse to Speech",
    icon: "/images/logos/morseToSpeechlogo.png",
    github: "https://github.com/agoddijn/morseToSpeech",
    descriptionShort: "A microprocessor application to convert Morse code to speech",
    sections: [
        {
            header: "Introduction",
            descriptionAbove: "This was a small university project designed to explore microprocessors. My application converted Morse code to speech, and was written in C and Python. The Morse code is 'typed' directly into the microprocessor, which communicates the corresponding ASCII characters to the computer, which in turn speaks the full sentences using OSX's inbuilt speech to text.",
            descriptionBelow: "The implementation uses the inbuilt timing unit to both convert input to letters, and send ASCII characters to the computer over USB by UART. All timers used interupts and interrupt vectors to process input. The interrupt vector was only called if the input changed state, so the CPU was idle (in power saver mode) for most of the time. The product was able to process up to 300 words per minute",
            additional: [
                {
                    type: "code",
                    content: letter,
                    caption: "Dots and dashes are formed by bit shifting"
                },
                {
                    type: "code",
                    content: table,
                    caption: "Map from letter values to ASCII values"
                },
                {
                    type: "code",
                    content: uart,
                    caption: "UART implementation"
                },
                {
                    type: "code",
                    content: mainControl,
                    caption: "Main control flow"
                }
            ]
        }
    ]
}