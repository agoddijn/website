app.service('AboutData', function(){
  var shortDescription = "I'm Alexander Goddijn, a French and Dutch national passionate about product, currently a Computer Science and Physics student at UBC";

  var longDescription = "I was born in Amsterdam, where I spent the first four years of my life before moving to London. I learnt english and spent most of my formative academic years there. During these years I began to develop my interests, fiction and physics being the dominant one. I either had my nose in a book, or was pointing things out to people trying to explain how they worked. These interests developed into passions and at the age of 13, we once again moved to Amsterdam, where I finished my high school education in the IB system, focusing on sciences and mathematics. It was during high school that I also developed an interest in coding, and my intructional YouTube videos can be seen in the projects tab of this website. I decided to leave from Europe and move to Canada, predominantly for its proximity to the best ski slopes and mountain biking trails in the world. I have not regretted my decision ;). Here I moved through a myriad of different studies, starting in combined sciences, then moving towards engineering and physics, and finally settling in physics and computer science. My focus in these areas are AI and machine learning. I have always been fascinated by the phenomenon of consciousness, and through understanding AI and machine learning algorithms I hope to come closer to understanding the human experience. After much trying and searching, I think I am willing to declare this as my predominant area of interest in the future, and hope to base my career on it.";

  var info = [
    "Fluent in three languages (Dutch, French, English)",
    "Studying physics, engineering, and computer science at the University of British Columbia in Vancouver",
    "Sports - skiing, mountain biking, sailing, climbing, water polo, running",
    "Hobbies - reading, film"
  ];

  return {s: shortDescription, l: longDescription, info: info};
});