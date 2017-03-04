var path = "/content/images/projects/website/";

module.exports = {
    title: "Website",
    icon: "/content/images/logos/website-brand.png",
    github: "https://github.com/agoddijn/website",
    descriptionShort: "Portfolio website designed from scratch using MEAN stack technology",
    sections: [
      {
        header: "Introduction",
        descriptionAbove: "This website was initally intended to be a portfolio where I could showcase myself and my achievements to potential employers. I think it still serves this purpose, but now, the design of the website is also in itself a demonstration of my design values. I have tried to make this website as scalable, and data driven as possible, choosing to keep only the formatting instructions on the frontend and all the data on the backend. This makes for a fairly lightweight frontend which only calls data to be displayed when it is needed.",
        descriptionBelow: "This also makes for a completely scalable website that could be used as a boilerplate for other website implementations. All you have to do is change the data, and everything will be correctly formatted",
        additional: [
          {
            type: "image",
            content: path + "dataDrivenDemo2.png",
            caption: "File structure in backend"
          },
          {
            type: "image",
            content: path + "dataDrivenDemo.png",
            caption: "Example of data file"
          },
          {
            type: "image",
            content: path + "jsDependencies.png",
            caption: "All the JS tools used"
          },
          {
            type: "image",
            content: path + "zenhubDemo.png",
            caption: "Example of how ZenHub was used"
          },
          {
            type: "image",
            content: path + "herokuDemo.png",
            caption: "Example of how heroku was used"
          }
        ]
      },
      {
        header: "Tools and technologies",
        descriptionAbove: "The technologies I chose were based on my experience working for <a href='https://routific.com/' target='_blank'>Routific</a>. They used a full javascript stack called the <a href='http://mean.io/' target='_blank'>MEAN stack</a>, which uses Angular on the front end and Mongoose, Express, and Node on the backend. It is a very scalable framework, which was part of my original design plan, and having a bit of experience helped me get started",
        descriptionBelow: "In terms of the creation process, using tools like ZenHub and Heroku allowed me to test different ideas and deploy quickly and efficiently. ZenHub really allowed me to manage different ideas I had for different parts of the site, and broke down problems into smaller ones that were easy to tackle. It also means anyone can now join me on this project, everything is nicely set up on GitHub",
        additional: [
          {
            type: "image",
            content: path + "angular.png",
            caption: "Angular"
          },
          {
            type: "image",
            content: path + "nodejs.png",
            caption: "NodeJs"
          },
          {
            type: "image",
            content: path + "express.png",
            caption: "ExpressJs"
          },
          {
            type: "image",
            content: path + "heroku.svg",
            caption: "Heroku"
          },
          {
            type: "image",
            content: path + "github.png",
            caption: "github"
          },
          {
            type: "image",
            content: path + "cloudflare.png",
            caption: "CloudFlare"
          },
          {
            type: "image",
            content: path + "zenhub.png",
            caption: "ZenHub"
          }
        ]
      },
      {
        header: "Design",
        descriptionAbove: "The design kind of happened by accident. I am no CSS guru, and don't know the first thing about good frontend design. I did however have a vision of a very clean and simple interface that was easy to navigate without too much clutter. I knew what general layout I wanted, and so after a while the design sort of took shape on its own, and it's a product I am fairly happy with.",
        descriptionBelow: "",
        additional: []
      },
      {
        header: "Outlook",
        descriptionAbove: "I hope this website will continue to serve its original purpose as a portfolio which is in itself a demonstration of my ability and design values. I think I will also use this as a boilerplate for other website implementations. Everything is open source on GitHub so anyone can take a look and use this as a template.",
        descriptionBelow: "",
        additional: []
      }
    ]
  }