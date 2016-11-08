var path = "/content/images/projects/website/";

module.exports = {
    title: "Website",
    icon: "/content/images/logos/website-brand.png",
    github: "https://github.com/agoddijn/website",
    descriptionShort: "Portfolio website designed from scratch using MEAN stack technology",
    sections: [
      {
        header: "Introduction"
      },
      {
        header: "Tools and technologies",
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
        header: ""
      },
      {
        header: "Outlook"
      }
    ]
  }