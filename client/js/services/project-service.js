app.service('ProjectData', function() {
  var halp = {
    title: "H.A.L.P",
    icon: "/content/images/logos/HALP.png",
    descriptionShort: "Robot designed and built from scratch for a competition",
    video: "https://vimeo.com/145592816",
    sections: [
      {
        header: "Introduction",
        descriptionAbove: "For this project we were asked to design and build an autonomous machine capable of completeing a specific challenge in teams of four. The challenge was to save stuffed animals from a 'burning building' in a certain ammount of time. To save a pet, the robot had to put the pet in the starting zone through whatever means necessary within 2 minutes. After 1 minute a 'wall of fire' would appear, preventing the robot from returning from the last zone.",
        descriptionBelow: "The robot had to be designed and built from scratch, including all mechanical and electrical components. We were allowed to use pre-built motors, but had to make out own H-bridges to power them. Our strategy was to get to the top and pick up the pets there before the wall of fire came up, and return to pick up the rest of the pets later.",
        additional: [
          {
            type: "image",
            content: "/content/images/projects/halp/playingSurface.png",
            caption: "The competition surface (burning building)"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/pets.png",
            caption: "An example of the pets. Magnets were glued to the heads"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/group.jpg",
            caption: "Our group (Far left and three on the right)"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/halp-render.png",
            caption: "The final product rendered in SolidWorks"
          }
        ]
      },
      {
        header: "Mechanical",
        descriptionAbove: "The mechanical design and implementation was done using a variety of tools. For design, the CAD software SolidWorks was used to create parts that could be cut out of a material using a laser cutter or water jet cutter. The main mechanical features of out robot were the chassis, drivetrain, and the arm. The chassis was built to be as small and as possible while still retaining enough space to hold all the pets. It was made from 1/4 inch laser cut plywood.",
        descriptionBelow: "The drivetrain was designed and built for good maneuverability and speed, and used two barber colman geared motors to control the wheels individually, allowing for turning. We used laser cut acrylic and delerin gears with a 4:1 gear ratio, driving two roller blade wheels. This turned out to have good grip and a sufficient torque to climb the ramp at fairly high speeds. The arm was more complicated to build and took many ideas and many iterations. We ended up using a spool with a pulley to move the arm up and down, and a small motor with a set of gears at the base of the arm to rotate it. The plate was made of a steel plate on an aluminium plate. We took advantage of the steel's ferromagnetic properties to lift the pets, and separated the plates using a servo to release them.",
        additional: [
          {
            type: "image",
            content: "/content/images/projects/halp/waterjet.png",
            caption: "Water jet cutter used to cut sheet metals"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/laserCutter.png",
            caption: "Laser cutter used to cut plasticss"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/driveTrain1.png",
            caption: "Initial CAD sketch of the drivetrain"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/driveTrain2.png",
            caption: "Progression of drivetrain"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/driveTrain3.jpg",
            caption: "Drivetrain on the robot"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/armBase.jpg",
            caption: "Implementation of swivelling arm base"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/armPlate.jpg",
            caption: "Implementation of arm plate to pick up and drop pets"
          },
        ]
      },
      {
        header: "Electrical",
        descriptionAbove: "The electrical system of the robot provide it with power, and provide instructions to the various motors to control its movement. A microprocessor called the TINAH (much like an arduino) is used to accept sensor input to allow the robot to know where it is and where it has to go. The robot follows the tape path using two infrared reflectance sensors at the front, and determines where the pets are using another set of infrared reflectance sensors to detect tape on the sides of the course. The same sensors are used on the wheels, along with lines of tape, to determine the distance travelled by the wheels. A rotary potentiometer is used to determine the positon of the arm ratation and height.",
        descriptionBelow: "The whole robot is powered by a 16V Lithium-Polymer battery. The motor speed are set using pulse width modulation and powered by H-Bridge circuits. A total of 3 H-bridge circuits are used, one for each motor and one for the arm height motor. The robot also has the ability to see infrared beacons, using an analog signal processing circuit and two infrared phototransistors. The beacons are set at 10kHz and a circuit combining a DC block, an amplifier, and band pass filter (set at 10kHz) and a peak detector is used to measure the IR detectors' distance from the beacon.",
        additional: [
          {
            type: "image",
            content: "/content/images/projects/halp/irCircuit.png",
            caption: "IR Detector circuit"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/hBridge.png",
            caption: "H-Bridge cricuit"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/circuits.jpg",
            caption: "The final circuits"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/tinah.png",
            caption: "TINAH microprocessor"
          }
        ]
      },
      {
        header: "Software",
        descriptionAbove: "It was important to make the software in such a way that it was easy to change as testing continued. This is because physical pieces of the robot changed often, as did strategy. I designed the software to be very modular, and to have the fundamental constituents be actions the robot could perform. I then had one main block that would execute the actions, which could be easily changed and modified. For the full code look at the <a href='https://github.com/RescueOne/Implementation/blob/master/v5test/v5test.ino' target='_blank'>Github repo</a>",
        descriptionBelow: "",
        additional: [
          {
            type: "code",
            content: "\
/*\n\
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
}",
            caption: "Main control loop"
          },
          {
            type: "code",
            content: "\
/*\n\
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
}",
            caption: "Movement function using wheel encoders"
          },
          {
            type: "code",
            content: "\
/*\n\
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
}",
            caption: "PID control for the tape following"
          }
        ]
      },
      {
        header: "Competition",
        descriptionAbove: "The final exam for this robot course was a competition. To win, your robot had to get the most number of points (by saving pets) in the shortest amount of time on its own. Any pets saved after intervention by the team did not count. Each pet was worth a different number of points depending on the dificulty. It was an intense competition, in which our team nearly came out on top. Unfortunately, after our robot dropped a pet, we got eliminated from the final but went on to win the match for third place. Although we did not win the competition, the teachers awarded our robot the top mark (out of a group of 15 robots).",
        descriptionBelow: "I would like to thank my team members, Arjun Venkatesh, Bryden Fogelman, and Stefan Sander-Green for the incredible project. Despite the tense moments (such as our robot basically exploding and killing a few fuses on time trial day) and the long, long hours in our sweatbox of a lab, we pulled through an got the top mark in the class, and third in the competition. Well done boys. Also big thanks to our professors who put in many tireless hours into helping us get through.",
        additional: [
          {
            type: "video",
            content: "http://player.vimeo.com/video/145592816",
            caption: "Video of project"
          },
          {
            type: "image",
            content: "/content/images/projects/halp/comp1.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/comp2.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/comp3.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc1.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc2.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc3.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc4.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc5.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc6.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc7.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc8.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc9.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc10.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc11.jpg",
            caption: ""
          },
          {
            type: "image",
            content: "/content/images/projects/halp/misc12.jpg",
            caption: ""
          },
        ]
      }
    ],
  };

  var website = {
    title: "Website",
    icon: "/content/images/logos/website-brand.png",
    github: "https://github.com/agoddijn/website",
    descriptionShort: "Portfolio website designed from scratch using MEAN stack technology",
    sections: [
      {
        header: "Introduction"
      },
      {
        header: "Tools"
      },
      {
        header: ""
      },
      {
        header: "Outlook"
      }
    ]
  };

  var youtube = {
    title: "YouTube",
    icon: "/content/images/logos/YouTube.png",
    video: "https://www.youtube.com/channel/UCU6lCeBsZp-aWJ6_ymRncBw",
    descriptionShort: "A YouTube channel on which I have posted tutorial videos",
    sections: [
      {
        header: "World of Warcraft Servers",
        descriptionAbove: "I used to play a lot of World of Warcraft, and I wanted to play the game for free on servers that let you access the games more advanced content faster. I took to YouTube to teach me how to connect to private servers that people hosted on their computers. Once I figure out how to do it, the tutorials methods seemed overcomplicated, so I made my own videos to show how simple it was to do.",
        descriptionBelow: "After some moderate success, I decided to host my own server. This was quite challenging, but again I found the online tutorials too complicated, and made my own. One problem I had was particularly difficult to get answers for online, so once I had it figured out I made my own, and this one turned out to have the most success.",
        additional: [
          {
            type: "video",
            content: "http://www.youtube.com/embed/AvPJUOEGOVI?list=PL8EF768622370E00D",
            caption: "How to play WoW for free"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/Xy1rwxuM7UE?list=PL8EF768622370E00D",
            caption: "How to make a WoW server"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/lCbGKl6cCgA?list=PL8EF768622370E00D",
            caption: "How to make your server public"
          }
        ]
      },
      {
        header: "Java tutorials",
        descriptionAbove: "I was given the opportunity to choose my own project for a school assignment, and after the success of my WoW videos, and my curiosity about programming, I decided to learn some basic Java and make some beginner video tutorials for it. I was overwhelmed by positive feedback from people who, like me, had found that even the beginner tutorials for programming were inaccessible.",
        descriptionBelow: "I got a good grade for the project, but more importantly learnt that it's difficult to overcome a problem if you don't think you can do it, or if it seems too daunting. The barrier's just an illusion though. the material is usually not too difficult but people get bogged down in the nomenclature and everything seems confusing. Once you manage to translate the problem into something you;re more familiar with however, it becomes easy.",
        additional: [
          {
            type: "video",
            content: "http://www.youtube.com/embed/mosJduwmCGs?list=PL0D68608568DDD969",
            caption: "Introduction"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/FBeeJz5ivuQ?list=PL0D68608568DDD969",
            caption: "Basic Elements I"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/sttOAEDfM58?list=PL0D68608568DDD969",
            caption: "Basic Elements II"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/ZJJAS8qKbjw?list=PL0D68608568DDD969",
            caption: "Basic Elements III"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/Wb5XuSm0P9E?list=PL0D68608568DDD969",
            caption: "Tools I"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/U3YnD-KYtBU?list=PL0D68608568DDD969",
            caption: "Tools II"
          },
          {
            type: "video",
            content: "http://www.youtube.com/embed/xmCNT4esvzk?list=PL0D68608568DDD969",
            caption: "Arrays"
          }
        ]
      }
    ]
  }

  var projects = [halp, website, youtube];

  return {projects: projects};
});