app.service('JobData', function() {
  var tomtom = {
    name: "TomTom",
    logo: "",
    positions: [
      {
        name: "Software Engineer",
        description: "Worked on cluster algorithms for a product",
        additional: [
          {
            type: "github",
            content: ""
          }
        ]
      },
      {
        name: "Product Manager",
        description: "Worked on developing a wearable fitness tracker product",
        additional: []
      }
    ]
  };

  var axiomzen = {
    name: "AxiomZen",
    logo: "",
    positions: [
      {
        name: "Software Engineer",
        description: "Worked on backend and frontend web design for Routific",
        additional: [
          {
            type: "website",
            content: ""
          }
        ]
      }
    ]
  };

  var jobs = [tomtom, axiomzen];

  return {jobs: jobs};

});