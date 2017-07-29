module.exports = "/*\n\
PID control for tape following.\n\
For reference:\n\
  P - if too high can cause osscillations\n\
  D - acts as damping\n\
*/\n\
\n\
void PIDTape(bool timeout)\n\
{\n\
  LCD.clear(); LCD.home();\n\
  LCD.print(\"NUM\");\n\
\n\
  //Variables\n\
  int P = menuItems[1].Value; //Proportional gain value\n\
  int D = menuItems[2].Value; //Derivative gain value\n\
  int S = menuItems[0].Value; //Speed\n\
  int THRESHOLD = menuItems[4].Value; //threshold for switch from white to black\n\
  int qrd_left = 0; //Value of left qrd\n\
  int qrd_right = 0; //Value of right qrd\n\
  int qrd_pet = 0;\n\
  int error = -1; //Current error\n\
  int last_error = 0;\n\
  int recent_error = 0; //Recent error\n\
  int proportional = 0; //Proportional control\n\
  int derivative = 0; //Derivative control\n\
  int duration_recent = 0; //Number of loops on recent error\n\
  int duration_last = 0; //Number of loops on last error\n\
  int compensation = 0; //Compensation\n\
\n\
  // converting S into a value that is <255\n\
  int spd = (int)((float)S*((float)255/(float)MAX_ANALOG));\n\
\n\
  long start_time = 0;\n\
  int count = 0;\n\
  int count_debug = 0;\n\
\n\
  //PID loop\n\
  while (true) {\n\
    //Read QRD's\n\
    qrd_left = analogRead(QRD_LEFT);\n\
    qrd_right = analogRead(QRD_RIGHT);\n\
    if(NUM > 5) {qrd_pet = analogRead(QRD_PET_LEFT);}\n\
    else {qrd_pet = analogRead(QRD_PET_RIGHT);}\n\
\n\
    //debugging\n\
    if(DEBUG) {\n\
      if (count > 500) {\n\
        LCD.clear(); LCD.home();\n\
        LCD.print(\"L: \"); LCD.print(spd + compensation); LCD.print(\" R: \"); LCD.print(spd - compensation);\n\
        LCD.setCursor(0,1);\n\
        LCD.print(\"L: \"); LCD.print(qrd_left); LCD.print(\" R: \"); LCD.print(qrd_right);\n\
        count_debug = 0;\n\
      }\n\
      count_debug ++;\n\
    }\n\
\n\
    if(timeout && NUM == 3 && (millis() - start_time) > PID_TIMEOUT) {stopDrive(); return;}\n\
\n\
    if(count == 0) {start_time = millis(); count++;}\n\
    if((millis() - start_time) > WAIT_AFTER_PID) {\n\
      if(qrd_pet > PET_QRD_THRESHOLD) {\n\
        NUM++;\n\
        count--;\n\
        LCD.setCursor(0,1); LCD.print(NUM);\n\
        if(NUM == 4 || NUM == 6 || NUM == 7 || NUM == 8) {stopDrive(); return;}\n\
      }\n\
    }\n\
\n\
    /*Determine error\n\
    * <0 its to the left\n\
    * >0 its to the right\n\
    * 0 its dead on\n\
    */\n\
\n\
    //left on white\n\
    if(qrd_left < THRESHOLD) {\n\
      //right on white\n\
      if(qrd_right < THRESHOLD) {\n\
        if(last_error < 0) {error = -5;} //LCD.setCursor(0,1);LCD.print(\"L2\");\n\
        else {error = 5;} //LCD.setCursor(0,1);LCD.print(\"R2\");\n\
      }\n\
      //right on black\n\
      else{error = -1;} //LCD.setCursor(0,1);LCD.print(\"L1\");\n\
    }\n\
    //left on black\n\
    else {\n\
      //right on white\n\
      if(qrd_right < THRESHOLD){error = 1;} //LCD.setCursor(0,1);LCD.print(\"R1\");\n\
      //right on black\n\
      else{error = 0;} //LCD.setCursor(0,1);LCD.print(\"CE\");\n\
    }\n\
\n\
    //determine control factors\n\
\n\
    //Proportional control\n\
    proportional = P*error;\n\
\n\
    //Derivative\n\
    if(error != last_error) {\n\
      recent_error = last_error;\n\
      duration_recent = duration_last;\n\
      last_error = error;\n\
      duration_last = 1;\n\
    }\n\
    else {\n\
      duration_last++;\n\
    }\n\
    derivative = (int)(((float)D*(float)(error - recent_error))/((float)(duration_recent + duration_last)));\n\
\n\
    //Compensation\n\
    compensation = proportional + derivative;\n\
\n\
    //Plant control (compensation +ve means move right)\n\
    motor.speed(MOTOR_LEFT,spd + compensation);\n\
    motor.speed(MOTOR_RIGHT,spd - compensation);\n\
  }\n\
}"