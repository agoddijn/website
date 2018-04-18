app.service('AboutData', function(){
  var shortDescription = "I'm Alexander Goddijn, a French and Dutch national passionate about product and AI, currently a product management intern at N26";

  var longDescription = [
    "I was born in Amsterdam, where I spent the first four years of my life before moving to London. I learnt english and spent most of my formative academic years there. During these years I began to develop an interest in fiction and physics. I either had my nose in a book, or was pointing things out to people trying to explain how they worked.",
    "These interests continued to develop and I decided to focus my IB studies on physics and mathematics. It was during this time that I also discovered an interest in coding, and my instructional YouTube videos for introductory Java can be seen in the projects tab of this website. What attracted me to this field was the ability to produce something meaningful that others could enjoy using. I still love creating programs that are easy and intuitive for my users",
    "After finishing the IB in Amsterdam, I decided to leave Europe and move to Canada, chiefly for its proximity to the best ski slopes and mountain biking trails in the world. Here I moved through a myriad of different subjects, starting in combined sciences, moving towards engineering and physics in my second and third years, and finally settling into physics and computer science for my final two years. During all of these stages I enrolled in specialized programs, firstly in Science One, then in Engineering Physics, and towards the end in the New Venture Design Program. The small class sizes and strong community drives everyone in these programs to excel, creating a competitive but supportive environment",
    "My main interests in computer science are AI and machine learning. I have always been fascinated by the phenomenon of consciousness, and through understanding AI and machine learning algorithms I hope to come closer to understanding the human experience.",
  ]

  var info = [
    "Fluent in three languages (Dutch, French, English)",
    "Studying physics, engineering, and computer science at the University of British Columbia in Vancouver",
    "Sports - skiing, mountain biking, sailing, climbing, water polo, running",
    "Hobbies - reading, film, music, coding"
  ];

  // Pics should have 0.665 aspect ratio
  var pics = [
    "/images/about/water_polo.jpg",
    "/images/about/family.jpg",
    "/images/about/climbing.jpg",
    "/images/about/sailing.jpg",
    "/images/about/mtb.gif",
    "/images/about/family2.jpg",
    "/images/about/kitesurfing.jpg",
    "/images/about/venice.jpg"
  ]

  return {s: shortDescription, l: longDescription, info: info, pics: pics};
});