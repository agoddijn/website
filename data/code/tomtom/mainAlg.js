module.exports = "// The main algorithm\n\
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
}";