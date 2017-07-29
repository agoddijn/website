module.exports = "void setupTimerUART() {\n\
    TACCTL0 = OUT;\n\
    TACTL = TASSEL_2 + MC_2 + ID_3; // SMCLK as source, divide by 8, in continuous mode\n\
    P1SEL |= (TXD + RXD); // Set P1.1 to OUT0, set P1.2 to\n\
    P1DIR |= TXD; // Set P1.1 to output\n\
}\n\
\n\
void transmit() {\n\
    // TXByte sent in reverse order, little end is start bit\n\
    BitCnt = 0xA; // Number of bits, 8 data + start/stop = 10\n\
    TXByte |= 0x100; // Add stop bit to TXByte\n\
    TXByte = TXByte << 1; // Add space for start bit\n\
    TACCR0 = TAR + bitTime; // Set first interupt to occur in Bitime\n\
    TACCTL0 =  CCIS0 + OUTMOD0 + CCIE; // Set enable interrupts and output mode to Set\n\
    while ( TACCTL0 & CCIE ); // Wait for TXByte to be empty and interupt disabled\n\
}";