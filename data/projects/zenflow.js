var path = "/images/projects/zenflow/";

module.exports = {
    name: "Zenflow",
    icon: "/images/logos/zenflow.png",
    descriptionShort: "Geolocation based photo sharing app built for hackathon",
    sections: [
        {
            header: "Zenflow",
            descriptionAbove: "I came up with the idea for and built this app for a hackathon in 2014. The idea was to share photos based on geolocation, with the goal of being able to view and visit any place in the world through the photos people captured on their mobile devices. This gives people an constantly updating and realistic impression of a geographic location. This was before the times of the Snapchat Map.",
            descriptionBelow: "The app was built in Swift, with some help from a couple of Apple developers, over the course of a weekend. I kept working on it afterwards, but eventually had to stop because of the time taken up by my internship. The app had a total of 2 pages, a camera view, and a map view, which were accessed by swiping left and right.",
            additional: [
                {
                    type: "image",
                    content: path + "screenshot.png",
                    caption: "Screenshot of the main app page"
                }
            ]
        }
    ]
}