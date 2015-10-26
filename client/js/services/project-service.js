app.service('ProjectData', function() {
  var halp = {
    title: "H.A.L.P",
    icon: "",
    descriptionLong: "Long Halp description",
    descriptionShort: "Short Halp description",
    additional: [
      {
        type: "youtube",
        content: "https://www.youtube.com/embed/b17GVBJdl9Y"
      }
    ],
  };

  var website = {
    title: "Website",
    icon: "",
    descriptionLong: "Long website description",
    descriptionShort: "Short website description",
    additional: [
      {
        type: "github",
        content: "https://github.com/agoddijn/website"
      }
    ]
  };

  var projects = [halp, website];

  return {projects: projects};
});