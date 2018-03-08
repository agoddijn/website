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
            descriptionAbove: "",
            descriptionBelow: "",
            additional: []
        },
        {
            header: "Product",
            descriptionAbove: "",
            descriptionBelow: "",
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
            descriptionAbove: "",
            descriptionBelow: "",
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
            descriptionAbove: "",
            descriptionBelow: "",
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