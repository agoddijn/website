app.service('AboutData', function(){
  var shortDescription = "I'm Alexander Goddijn, a French and Dutch national passionate about product and AI, currently a forward deployed engineer at Palantir";

  var longDescription = [
    "I was born in Amsterdam, where I spent the first four years of my life before moving to London. I learnt english and spent most of my formative academic years there. During these years I developed an interest in science fiction and physics as a way to understand the world. I either had my nose in a book, or was talking to people about something I'd learnt.",
    "These interests continued to develop and I decided to focus my IB studies on physics and mathematics. It was during this time that I also discovered an interest in coding. My early instructional YouTube videos for introductory Java can be seen in the projects tab of this website. What attracted me to code was seeing logic come to life, allowing me to create things that people could use and hopefully enjoyed using.",
    "After finishing the IB in Amsterdam, I decided to leave Europe and move to Canada to study at UBC, mainly because it's close to the best ski slopes and mountain biking trails in the world. Here I moved through myriad different subjects, starting in Science One (a selective combined science program), moving to Engineering Physics in my second and third years, and finally settling into physics and computer science for my final two years. I also entered the New Venture Design Program, another selective program guiding students through the process of starting a new venture.",
    "Small class sizes and strong community drove everyone in these programs (Science One, Engineering PHysics, and New Venture Design) to excel, creating a competitive but supportive environment"
  ]

  var info = [
    "Fluent in three languages (Dutch, French, English)",
    "Forward deployed engineer @ Palantir",
    "Extra Curricular - skiing, mountain biking, sailing, climbing, water polo, running, racing"
  ];

  // Pics should have 0.665 aspect ratio
  var pics = [
    "/images/about/Graduation.jpg",
    "/images/about/water_polo.jpg",
    "/images/about/Biking.jpg",
    "/images/about/Hiking.jpg",
    "/images/about/Skiing.jpg",
    "/images/about/Skiing2.jpg",
    "/images/about/Iceland.jpg",
    "/images/about/kitesurfing.jpg",
    "/images/about/Kitesurfing2.JPG",
    "/images/about/Motorcycle.jpg",
    "/images/about/Racing.jpg",
    "/images/about/Racing2.jpg",
    "/images/about/Sailing.jpg"
  ]

  return {s: shortDescription, l: longDescription, info: info, pics: pics};
});