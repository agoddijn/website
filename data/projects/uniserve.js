var path = "/images/projects/uniserve/";
var codePath = "../code/uniserve/";

var pingerCache = require(codePath + "pingerCache.js");
var pingerTest = require(codePath + "pingerTest.js");
var webBackend = require(codePath + "webBackend.js");

module.exports = {
    name: "Uniserve",
    icon: "/images/logos/uniserve.png",
    descriptionShort: "Custom web app created for customer Uniserve",
    github: "https://github.com/agoddijn/uniserveProject",
    sections: [
        {
            header: "Introduction",
            descriptionAbove: "As part of a university project, we were given the task of building a web app to meet the specifications of a client, Uniserve. They wanted an analytics app that displayed the health of their customers servers. We were required to routinely ping all the devices on their list, log their response times, store them, and create an app that would insight into how their devices were doing.",
            descriptionBelow: "",
            additional: []
        },
        {
            header: "Product",
            descriptionAbove: "We ended with a nice, interactive, modular web app, where users can see a list of their devices, their status, a chart with displaying the health of the devices over a select period of time, and a map with the location and status of their servers.",
            descriptionBelow: "On the backend, we created a series of node apps that simultaneously. One, the Pinger, would ping devices, log information, and send this to the database. It includes a failsafe, so if the database is not responding, the information is not lost. The second aggregates the older ping records, so the database doesn't exceed capacity. The third is a node web backend that provides an api for accessing and updating the database.",
            additional: [
                {
                    type: "image",
                    content: path + "fullpage.png",
                    caption: "Front page of the app"
                },
                {
                    type: "image",
                    content: path + "clickAndDrag.png",
                    caption: "Modules are click and dragable"
                },
                {
                    type: "image",
                    content: path + "rearrange.png",
                    caption: "Modules can be rearranged and resized"
                },
                {
                    type: "image",
                    content: path + "mapAndCluster.png",
                    caption: "Map shows server locations, status, and clusters"
                },
                {
                    type: "image",
                    content: path + "report.png",
                    caption: "Full reports of locations available as pdf"
                },
                {
                    type: "image",
                    content: path + "pdfGen.png",
                    caption: "PDF generated from report page"
                },
                {
                    type: "image",
                    content: path + "pm2Monit.png",
                    caption: "Node processes can be monitored"
                },
            ]
        },
        {
            header: "Design",
            descriptionAbove: "We had members on our team that were experienced in setting up a scalable development environment. This included automated builds, deployment scripts, unit testing, performance testing, and a host of database tools to flood the development environments with fake test data.",
            descriptionBelow: "The scalable design allowed us to work very efficiently, and make sure the codebase was easy to change once it was handed off to the customer. It was also well documented, in order to ensure a smooth handoff from us to uniserve.",
            additional: [
                {
                    type: "code",
                    content: pingerCache,
                    caption: "Pinger can cache data in case of db connection failure"
                },
                {
                    type: "code",
                    content: pingerTest,
                    caption: "Fully tested modules, both performance and unit testing"
                },
                {
                    type: "code",
                    content: webBackend,
                    caption: "Web backend"
                }
            ]
        },
        {
            header: "Tools",
            descriptionAbove: "We used an array of modern tools to develop the app. A lot of the tools were used for automation of the workflow, but also to ensure the app could be seamlessly worked on by multiple people.",
            descriptionBelow: "Typescript ended up being very useful for development. It made me realise how important type checking is for large projects that need to move quickly.",
            additional: [
                {
                    type: "image",
                    content: path + "react.png",
                    caption: "React"
                },
                {
                    type: "image",
                    content: path + "typescript.png",
                    caption: "Typescript"
                },
                {
                    type: "image",
                    content: path + "pm2.png",
                    caption: "pm2"
                },
                {
                    type: "image",
                    content: path + "nodejs.png",
                    caption: "Node Js"
                },
                {
                    type: "image",
                    content: path + "material.png",
                    caption: "Material UI"
                },
                {
                    type: "image",
                    content: path + "webpack.png",
                    caption: "Webpack"
                },
                {
                    type: "image",
                    content: path + "yarn.png",
                    caption: "Yarn"
                },
            ]
        }
    ]
}