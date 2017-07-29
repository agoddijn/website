module.exports = "/*\n\
==================\n\
== CONTROL LOOP ==\n\
==================\n\
*/\n\
\n\
/*\n\
Main loop that controls the robot and the specific code required to get each pet.\n\
NUM represents the pet/location\n\
NUM == 0; start of course\n\
NUM == 1; past 1st pet\n\
NUM == 2; Past 2nd pet\n\
NUM == 3; Past 3rd pet\n\
NUM == 4; At 4th pet\n\
NUM == 5; On way back from 4th pet\n\
NUM == 6; At 3rd pet\n\
NUM == 7; At 2nd pet\n\
NUM == 8; At 1st pet\n\
*/\n\
void mainStart()\n\
{\n\
  while(true) {\n\
    // Strategy for 6 pets\n\
    if (NUM == 0) {\n\
      ArmPID(HEIGHT,ARM_HOR, false);\n\
      PIDTape(PETS == 3);\n\
    }\n\
    if (NUM == 3) {\n\
      moveTo(50, 0, false);\n\
      moveTo(270, 0, true);\n\
      setServo(SERVO_FRONT,FRONT_PET);\n\
      NUM = 5;\n\
      PIDTape(false);\n\
    }\n\
    if (NUM == 4) {\n\
      moveTo(-20, 10, false);\n\
      moveTo(5, 17, false);\n\
      setServo(SERVO_FRONT,FRONT_FORWARD_CENTRE);\n\
      delay(500);\n\
      moveTo(-35, 0, false);\n\
      PIDIR(EXIT_RE);\n\
      ArmPID(HEIGHT,ARM_UP,false);\n\
      pickup(ARM_RIGHT, true);\n\
      ArmPID(HEIGHT,ARM_HOR,false);\n\
      PIDIR(EXIT_SWI);\n\
      pickupFront(3);\n\
      moveTo(0,-50,false);\n\
      moveTo(180,0,false);\n\
      setServo(SERVO_FRONT,FRONT_PET);\n\
      PIDIR(EXIT_TAPE);\n\
      moveTo(0,10,false);\n\
      findTape(LEFT);\n\
      NUM++;\n\
      PIDTape(false);\n\
    }\n\
    if (NUM == 6) {\n\
      moveTo(0, 10, false);\n\
      // ArmPID(HEIGHT,ARM_UP,false);\n\
      pickup(ARM_LEFT, true);\n\
      findTape(LEFT);\n\
      PIDTape(false);\n\
    }\n\
    if (NUM == 7) {\n\
      moveTo(0, 30, false);\n\
      moveTo(-20, -17, false);\n\
      // ArmPID(HEIGHT,ARM_UP,false);\n\
      pickup(ARM_LEFT, true);\n\
      findTape(RIGHT);\n\
      PIDTape(false);\n\
    }\n\
    if (NUM == 8) {\n\
      moveTo(0, 28, false);\n\
      moveTo(-20, -13, false);\n\
      // ArmPID(HEIGHT,ARM_UP,false);\n\
      pickup(ARM_LEFT, false);\n\
      setServo(SERVO_FRONT,FRONT_FORWARD_CENTRE);\n\
      delay(500);\n\
      moveTo(-60, 0, true);\n\
      PIDTape(false);\n\
    }\n\
  }\n\
}"