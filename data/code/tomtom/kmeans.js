module.exports = "\
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
}";