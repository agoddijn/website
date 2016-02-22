app.service('AboutData', function(){
  var shortDescription = "I'm Alexander Goddijn, a French and Dutch national passionate about product, currently an Engineering Physics student at UBC";

  var longDescription = "My name is Alexander Goddijn. I was born and raised in the city of Amsterdam. I completed my high school education (International Baccalaureate) at the International School of Amsterdam, before attending the University of British Columbia (Canada, Vancouver). I am the son of Harold Goddijn and Corinne Vigreux, co-founders of the highly successful technology company TomTom. Through my proximity to TomTom I have had the amazing opportunity of experiencing the growth of a major technology company from its infancy. This has made my understanding of product intuitive. Through my youth I was always fascinated by physics and have been driven by a desire to understand the fundamental building blocks of our reality. I apply this motivation and the skills gained from studying physics and engineering to the product world. I work by understanding the fundamental 'why' of a product, and allow it to guide me through all stages of product development.";

  var info = [
    "Fluent three languages (Dutch, French, English)",
    "Studying physics, engineering, and computer science at the University of British Columbia in Vancouver",
    "Sports - skiing, mountain biking, sailing, climbing, water polo, running",
    "Hobbies - reading, film, ragers at 4317 West 13th Avenue, weed, a good philosophical conversation over a cold pint in a dingy pub nobody's ever heard of"
  ];

  return {s: shortDescription, l: longDescription, info: info};
});