var path = "/images/projects/halp/";
var codePath = "../code/halp/";

var controlLoop = require(codePath + "controlLoop.js");
var movement = require(codePath + "movement.js");
var pid = require(codePath + "pid.js");

module.exports =  {
    name: "H.A.L.P",
    icon: "/images/logos/HALP.png",
    descriptionShort: "Robot designed and built from scratch for a competition",
    video: "http://player.vimeo.com/video/145592816",
    sections: [
        {
            header: "Introduction",
            descriptionAbove: "For this project we were asked to design and build, in teams of four, an autonomous robot capable of completing a specific challenge. The challenge was to save stuffed animals from a 'burning building' in a certain amount of time. To save a pet, the robot had to put the pet in the starting zone using whatever means necessary within 2 minutes. After 1 minute a 'wall of fire' would appear, preventing the robot from returning from the last zone.",
            descriptionBelow: "The robot had to be designed and built from scratch, including all mechanical and electrical components. We were allowed to use pre-built motors but had to make out own H-bridges, IR circuits, rotary encoders, gears, etc. Our strategy was to get to the top and pick up the pets there before the wall of fire came up, and return to pick up the rest of the pets later. Our robot came third in the competition from a highly competitve pool of 15 teams, and earned the highest grade, measured against several criteria including build quality, design, and performance. At the bottom you will find videos of both news coverage of the event, and a video edit of the build process",
            additional: [
                {
                    type: "image",
                    content: path + "playingSurface.png",
                    caption: "The competition surface (burning building)"
                },
                {
                    type: "image",
                    content: path + "pets.png",
                    caption: "An example of the pets. Magnets were glued to the heads"
                },
                {
                    type: "image",
                    content: path + "group.jpg",
                    caption: "Our group (Far left and three on the right)"
                },
                {
                    type: "image",
                    content: path + "halp-render.png",
                    caption: "The final product rendered in SolidWorks"
                }
            ]
        },
        {
            header: "Mechanical",
            descriptionAbove: "The mechanical design and implementation was done using a variety of tools. For design, the CAD software SolidWorks was used to create parts that could be cut out of a material using a laser cutter or water jet cutter. The main mechanical features of out robot were the chassis, drive train, and the arm. The chassis was built to be as small and as possible while still retaining enough space to hold all the pets. It was made from 1/4 inch laser cut plywood.",
            descriptionBelow: "The drive train was designed and built for good maneuverability and speed, and used two barber colman geared motors to control the wheels individually, allowing for turning. We used laser cut acrylic and delerin gears with a 4:1 gear ratio, driving two roller blade wheels. This turned out to have good grip and a sufficient torque to climb the ramp at fairly high speeds. The arm was more complicated to build and took many ideas and many iterations. We ended up using a spool with a pulley to move the arm up and down, and a small motor with a set of gears at the base of the arm to rotate it. The plate was made of a steel plate on an aluminum plate. We took advantage of the steel's ferromagnetic properties to lift the pets, and separated the plates using a servo to release them.",
            additional: [
                {
                    type: "image",
                    content: path + "waterjet.png",
                    caption: "Water jet cutter used to cut sheet metals"
                },
                {
                    type: "image",
                    content: path + "laserCutter.png",
                    caption: "Laser cutter used to cut plasticss"
                },
                {
                    type: "image",
                    content: path + "driveTrain1.png",
                    caption: "Initial CAD sketch of the drivetrain"
                },
                {
                    type: "image",
                    content: path + "driveTrain2.png",
                    caption: "Progression of drivetrain"
                },
                {
                    type: "image",
                    content: path + "driveTrain3.jpg",
                    caption: "Drivetrain on the robot"
                },
                {
                    type: "image",
                    content: path + "armBase.jpg",
                    caption: "Implementation of swivelling arm base"
                },
                {
                    type: "image",
                    content: path + "armPlate.jpg",
                    caption: "Implementation of arm plate to pick up and drop pets"
                },
            ]
        },
        {
            header: "Electrical",
            descriptionAbove: "The electrical system of the robot provide it with power, and provide instructions to the various motors to control its movement. A microprocessor called the TINAH (much like an arduino) is used to accept sensor input to allow the robot to know where it is and where it has to go. The robot follows the tape path using two infrared reflectance sensors at the front, and determines where the pets are using another set of infrared reflectance sensors to detect tape on the sides of the course. The same sensors are used on the wheels, along with lines of tape, to determine the distance traveled by the wheels. A rotary potentiometer is used to determine the position of the arm rotation and height.",
            descriptionBelow: "The whole robot is powered by a 16V Lithium-Polymer battery. The motor speed are set using pulse width modulation and powered by H-Bridge circuits. A total of 3 H-bridge circuits are used, one for each motor and one for the arm height motor. The robot also has the ability to see infrared beacons, using an analog signal processing circuit and two infrared photo transistors. The beacons are set at 10kHz and a circuit combining a DC block, an amplifier, and band pass filter (set at 10kHz) and a peak detector is used to measure the IR detectors' distance from the beacon.",
            additional: [
                {
                    type: "image",
                    content: path + "irCircuit.png",
                    caption: "IR Detector circuit"
                },
                {
                    type: "image",
                    content: path + "hBridge.png",
                    caption: "H-Bridge cricuit"
                },
                {
                    type: "image",
                    content: path + "circuits.jpg",
                    caption: "The final circuits"
                },
                {
                    type: "image",
                    content: path + "tinah.png",
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
                    content: controlLoop,
                    caption: "Main control loop"
                },
                {
                    type: "code",
                    content: movement,
                    caption: "Movement function using wheel encoders"
                },
                {
                    type: "code",
                    content: pid,
                    caption: "PID control for the tape following"
                }
            ]
        },
        {
            header: "Competition",
            descriptionAbove: "The final exam for this robot course was a competition. To win, your robot had to get the most number of points (by saving pets) in the shortest amount of time on its own. Any pets saved after intervention by the team did not count. Each pet was worth a different number of points depending on the difficulty. It was an intense competition, in which our team nearly came out on top. Unfortunately, after our robot dropped a pet, we got eliminated from the final but went on to win the match for third place. Although we did not win the competition, the teachers awarded our robot the top mark (out of a group of 15 robots).",
            descriptionBelow: "I would like to thank my team members, Arjun Venkatesh, Bryden Fogelman, and Stefan Sander-Green for the incredible project. Despite the tense moments (such as our robot basically exploding and killing a few fuses on time trial day) and the long, long hours in our sweatbox of a lab, we pulled through an got the top mark in the class, and third in the competition. Well done boys. Also big thanks to our professors who put in many tireless hours into helping us get through.",
            additional: [
                {
                    type: "video",
                    content: "http://player.vimeo.com/video/145592816",
                    caption: "Video of project"
                },
                {
                    type: "image",
                    content: path + "comp1.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "comp2.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "comp3.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc1.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc2.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc3.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc4.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc5.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc6.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc7.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc8.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc9.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc10.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc11.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    content: path + "misc12.jpg",
                    caption: ""
                },
            ]
        }
    ],
}