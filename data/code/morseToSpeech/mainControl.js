module.exports = "if (TA1CCTL0 & CCI) { // if previous one was low (button was pushed)\n\
\n\
if (time < (2 * unitTime)) { // dot\n\
    letter = letter << 2;\n\
    letter |= 1;\n\
    // DEBUG\n\
    P1OUT ^= LED2;\n\
\n\
} else if (time > (2 * unitTime)) { // dash\n\
    letter = letter << 3;\n\
    letter |= 3;\n\
    // DEBUG\n\
    P1OUT ^= LED1;\n\
}\n\
\n\
} else { // if previous one was high (button was not pushed)\n\
\n\
    if (time > (2 * unitTime)) { // end of letter\n\
        setupTimerUART();\n\
        TXByte = getLetter();\n\
        transmit();\n\
        resetLetter();\n\
    }\n\
\n\
    if (time > (5 * unitTime)) { // end of word\n\
        setupTimerUART();\n\
        TXByte = (unsigned char) 0;\n\
        transmit();\n\
    }\n\
\n\
    if (time > (10 * unitTime)) { // end of scentence\n\
        setupTimerUART();\n\
        TXByte = (unsigned char) 0b11111111;\n\
        transmit();\n\
    }\n\
\n\
}";