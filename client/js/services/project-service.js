app.service('ProjectData', function() {
  var halp = {
    title: "H.A.L.P",
    icon: "/content/images/logos/HALP.png",
    descriptionLong: "Long Halp description",
    descriptionShort: "Robot designed and built from scratch for a competition",
    additional: [
      {
        type: "youtube",
        content: "https://www.youtube.com/embed/b17GVBJdl9Y"
      }
    ],
  };

  var website = {
    title: "Website",
    icon: "/content/images/logos/website-brand.png",
    descriptionLong: "Long website description",
    descriptionShort: "Portfolio website designed from scratch using MEAN stack technology",
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