module.exports = "/*\n\
Move the robot to a position based on a given angle and distance\n\
+ve angle turns left\n\
-ve angle turns right\n\
if tape is true it stop when the fron QRD's hit tape\n\
*/\n\
void moveTo(int angle, float distance, bool tape)\n\
{\n\
  //Vars\n\
  int THRESHOLD = menuItems[4].Value;\n\
\n\
  //First change angle\n\
  int angleTurns = ceil((abs(angle)*((LENGTH_OF_AXLE*PI)/360))/DIST_PER_TAPE);\n\
  int linTurns = ceil(abs(distance)/DIST_PER_TAPE);\n\
  bool leftDone = false;\n\
  bool rightDone = false;\n\
  TURNS_RIGHT = 0; TURNS_LEFT = 0;\n\
\n\
  if (angle > 0) {\n\
    motor.speed(MOTOR_LEFT, -1*TURN_SPEED);\n\
    motor.speed(MOTOR_RIGHT, TURN_SPEED);\n\
  } else if (angle == 0) {\n\
    stopDrive();\n\
  } else {\n\
    motor.speed(MOTOR_LEFT, TURN_SPEED);\n\
    motor.speed(MOTOR_RIGHT, -1*TURN_SPEED);\n\
  }\n\
  while((leftDone == false || rightDone == false) && angle != 0) {\n\
    if(tape && analogRead(QRD_LEFT) > THRESHOLD) {stopDrive(); return;}\n\
    checkEnc();\n\
    if(DEBUG) {\n\
    }\n\
    if(TURNS_LEFT >= angleTurns) {motor.speed(MOTOR_LEFT,0); leftDone = true;}\n\
    if(TURNS_RIGHT >= angleTurns) {motor.speed(MOTOR_RIGHT,0); rightDone = true;}\n\
  }\n\
\n\
  //Then change linear distance\n\
  TURNS_LEFT = 0; TURNS_RIGHT = 0;\n\
  leftDone = false; rightDone = false;\n\
  if (distance > 0) {\n\
    motor.speed(MOTOR_LEFT,LIN_SPEED);\n\
    motor.speed(MOTOR_RIGHT,LIN_SPEED);\n\
  } else if (distance == 0) {\n\
    stopDrive();\n\
  } else {\n\
    motor.speed(MOTOR_LEFT,-1*LIN_SPEED);\n\
    motor.speed(MOTOR_RIGHT,-1*LIN_SPEED);\n\
  }\n\
  while((leftDone == false || rightDone == false) && distance != 0) {\n\
    if(tape && analogRead(QRD_LEFT) > THRESHOLD) {stopDrive(); return;}\n\
    checkEnc();\n\
    if(DEBUG) {\n\
    }\n\
    if(TURNS_LEFT == linTurns) {motor.speed(MOTOR_LEFT,0); leftDone = true;}\n\
    if(TURNS_RIGHT == linTurns) {motor.speed(MOTOR_RIGHT,0); rightDone = true;}\n\
  }\n\
  stopDrive();\n\
}"