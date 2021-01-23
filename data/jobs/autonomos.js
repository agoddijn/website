var path = "/images/jobs/autonomos/";

module.exports = {
    name: "Autonomos",
    icon: "/images/logos/autonomos.png",
    role: "Software Engineer",
    dates: "May 2017 - Aug 2017",
    positions: [
        {
            name: "Software Engineer",
            descriptionAbove: "Autonomos is an autonomous driving research company. Here I worked in the Autonomos Driving Stack (ADS) team, amongst robotics specialists, masters students, and PhDs, to develop a full stack autonomous driving solution. I did a feasibility research assignment into the use of Stixels, a mid level data representation of stereo data. I was tasked with doing research into the topic, as well as integrating an existing implementation into out framework. I was also tasked with writing a plugin for a visualization software to visualise obstacles.",
            descriptionBelow: "The team works on creating a full stack solution for autonomous driving, including a sensor concept and setup, sensor data fusion, and driving behaviour. I learnt a lot about the various problems facing autonomous driving, as well as some problems in computer vision. The teams at Autonomos are working on some amazing solutions to some very important problems, and having an eye into that process was very valuable. Their company culture and recruitment process is very unique and fosters a passion for solving problems, and the creative freedom to do so.",
            additional: [
                {
                    type: "image",
                    content: path + "stereoVsStixel.png",
                    caption: "Stereo disparity image vs Stixel image"
                },
                {
                    type: "video",
                    content: "http://www.youtube.com/embed/FR_mIY34IW0",
                    caption: "Stixels"
                },
                {
                    type: "image",
                    content: path + "obstacles.png",
                    caption: "Plugin for visualization of obstacles"
                }
            ]
        }
    ]
};