module.exports = "if (time < (2 * unitTime)) { // dot\n\
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
}";