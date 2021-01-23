var path = "/images/projects/ubcInsight/";
var codePath = "../code/ubcInsight/";

var courseParser = require(codePath + "courseParser.js");
var roomParser = require(codePath + "roomParser.js");
var queryValidator = require(codePath + "queryValidator.js");
var queryConstructor = require(codePath + "queryConstructor.js");
var scheduler = require(codePath + "scheduler.js");

module.exports = {
  name: "UBC Insight",
  icon: "/images/logos/ubcInsightLogo.png",
  github: "https://github.com/agoddijn/cs310Project",
  descriptionShort: "Node web app for database interaction, both front and back end",
  dates: "Jan 2017 - Apr 2017",
  sections: [
    {
      header: "Introduction",
      descriptionAbove: "This was a project course at UBC, CPSC 310, where the goal was to create a queryable database with a GUI for a dataset of rooms and courses offered at UBC. We had to implement this in Typescript with node as a back end framework, and any framework we chose on the frontend.",
      descriptionBelow: "Our query language had to be able to filter a dataset by various properties and relations, such as greater than, less than, equal to, and had to support the use of nested and and or statements. We also had to be able to group data by certain criteria, and apply our own properties",
      additional: [
        {
          type: "image",
          content: path + "ebnf.png",
          caption: "EBNF of the query language"
        },
        {
          type: "image",
          content: path + "map.png",
          caption: "Map with building locations"
        },
        {
          type: "image",
          content: path + "courseExplorer.png",
          caption: "UI for the query language"
        },
        {
          type: "image",
          content: path + "scheduler.png",
          caption: "Course sections scheduler"
        }
      ]
    },
    {
      header: "Challenges",
      descriptionAbove: "Working in a group was a challenge. I have worked in software teams before, but usually with coworkers who are motivated and engaged in the problem. I felt that my partner in this group was not particularly motivated by this project, which created a difficult dynamic and put me in a position where I had to push her. I had not been in this position before, and I learnt a lot about motivating others. As for the technical challenges, what I found most difficult, and what I think the course strives to teach, was creating a scalable and solid software system. There were several big refactors I had to make, and I did not entirely agree with some of the specifications given to us (as I felt it encroached on our choice of implementation) but working around these obstacles was eye opening. It was easy to see which design choices had a positive impact and which had a negative one as the project grew larger. Overall I was happy with end product. I felt like the code was well structured, followed good design principles, and in the end that demonstrated itself in our ability to add, change, and refactor code with relative ease. The vast majority of the implementation was my own, and so I had to write efficiently so as not to fall behind schedule. In the end we consistently received a grade above 95% in all of our sprints. The GUI also felt clean and worked well during our demonstration of the final product.",
      descriptionBelow: "",
      additional: [
      ]
    },
    {
      header: "Code Structure",
      descriptionAbove: "The task was structured as follows. An input is given, the name of an encoded zip file containing course and room data in a known format. This data is then parsed and saved (in JSON format). When a query is given to the database, the query structure is first validated and if incorrect, a descriptive error message is sent back. Then the appropriate information is aggregated and sent back to the client. For scheduling, a greedy algorithm was used to try and optimize the metric, which was number of people successfully scheduled. The greedy rule was to take the largest available room and fit the largest possible section into it.",
      descriptionBelow: "The frontend code used the AngularJS framework, with a single controller and HTML page providing the UI for both the courses and the rooms, and a separate page and angular controller for the scheduler and the map.",
      additional: [
        {
          type: "code",
          content: courseParser,
          caption: "File parser for courses"
        },
        {
          type: "code",
          content: roomParser,
          caption: "File parser for rooms"
        },
        {
          type: "code",
          content: queryValidator,
          caption: "Query validator sample"
        },
        {
          type: "code",
          content: queryConstructor,
          caption: "Query constructor sample"
        },
        {
          type: "code",
          content: scheduler,
          caption: "Scheduler sample"
        }
      ]
    }
  ]
}