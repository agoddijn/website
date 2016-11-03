module.exports = {
    name: "TomTom",
    logo: "/content/images/logos/TomTom.png",
    positions: [
      {
        name: "Software Engineer",
        descriptionAbove: "I worked as a software engineer on a project building a commuter product. The product sits in the user's car and learns their daily commute, then provides alternative routes depending on current traffic conditions. My job was to create an algorithm that would look at the start and end points of routes recorded by the device, and assign a general 'hub' to a cluster of points. In this way, small variations in the user's destination are grouped into one destination.",
        descriptionBelow: "In the images above, the flames are hubs and the pins are destinations. The algorithm works by generating random hubs, then assigning each point a closest hub. The hub then moves to the centre of the points and the extraneous hubs are trimmed. The process is repeated untill the hubs no longer have to move to get to the centre of the points. <a href='https://github.com/agoddijn/cluster-algorithm' target='_blank'>View on Github</a>",
        additional: [
          {
            type: "code",
            content: "\
// The main algorithm\n\
public List<Hub> mainAlgorithm() {\n\
  removeDouble();\n\
  int sizePoints = points.size();\n\
  boolean cont = true;\n\
  if (hubs.isEmpty()) {\n\
    generateHubs(points.size() * HUBNUM);\n\
  }\n\
  while (cont) {\n\
    for (int i = 0; i < sizePoints; i++) {\n\
      Poi curPoint = points.get(i);\n\
      curPoint.assignHub(getClosestHub(curPoint));\n\
    }\n\
    trimHubs(); // deletes hubs with only one point\n\
    cont = moveHubsToCentre();\n\
  }\n\
  trimHubs2(); // deletes hubs that are too close to eachother\n\
  trimHubs3(); // deletes hubs that are too far away from anything\n\
  return hubs;\n\
}",
            caption: "Main Algorithm"
          },
          {
            type: "image",
            content: "/content/images/jobs/tomtom/googleEarthDemo.png",
            caption: "Placement of hubs on map"
          },
          {
            type: "image",
            content: "/content/images/jobs/tomtom/hubDemo.png",
            caption: "Accuracy of hub palcement"
          },
          {
            type: "code",
            content: "\
// Move hubs to the centre of assigned POI's\n\
public boolean moveHubsToCentre() {\n\
  int size = hubs.size();\n\
  boolean cont = false;\n\
  for (int i = 0; i < size; i++) {\n\
    Hub curHub = hubs.get(i);\n\
    if (moveHubToCentre(curHub)) {\n\
      cont = true;\n\
    }\n\
  }\n\
  return cont;\n\
}\n\
\n\
// Move single hub to centre of its assigned POI's\n\
public boolean moveHubToCentre(Hub hub) {\n\
  Point2D centre = findCentre(hub);\n\
  if (hub.getPos().distance(centre) < THRESHOLD1) {\n\
    return false;\n\
  }\n\
  hub.changeCoord(centre);\n\
  return true;\n\
}\n\
\n\
// Find position of centre of assigned x's\n\
public Point2D findCentre(Hub hub) {\n\
  List<Poi> pois = hub.getAssigned();\n\
  double avgX = 0.0;\n\
  double avgY = 0.0;\n\
  double size = hub.getAssigned().size();\n\
  for (int i = 0; i < size; i++) {\n\
    Poi curPoint = pois.get(i);\n\
    avgX += curPoint.getX();\n\
    avgY += curPoint.getY();\n\
  }\n\
  return new Point2D.Double((avgX / size), (avgY / size));\n\
}",
            caption: "Hub centering algorithm"
          }
        ]
      },
      {
        name: "Product Manager",
        descriptionAbove: "I worked on a value proposition for an activity tracker. TomTom was trying to penetrate the activiy tracking market with a competitive product on a short time scale. My role was to research current market conditions, competitor products, and propose a feasible product with a unique selling point.",
        descriptionBelow: "My angle into this product was to create something that emphasized the lifestyle symbolized by an activity tracker, rather than focus on the metrics an activity tracker provides. I wanted to create an ambiguous metric, one which a user could impart their own value on. I also thought about gamification of fitness, and a process to 'unlock a story' as you progressed through your goals. I also wanted to emphasize design, because as much as the product is a tool, it is also a statement, and must look the part. Unfortunately due to the time scale, we were unable to put much time into design.",
        additional: [
          {
            type: "image",
            content: "/content/images/jobs/tomtom/activityTrackerResearch.png",
            caption: "Activity trackers on the market at the time"
          },
          {
            type: "image",
            content: "/content/images/jobs/tomtom/activityTrackerPackaging.png",
            caption: "Packaging for those trackers"
          }
        ]
      }
    ]
}