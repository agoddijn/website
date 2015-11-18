app.service('JobData', function() {
  var tomtom = {
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
  };

  var axiomzen = {
    name: "AxiomZen",
    logo: "/content/images/logos/AxiomZen.png",
    positions: [
      {
        name: "Software Engineer",
        descriptionAbove: "I worked on backend and frontend web design for <a href='https://routific.com/' target='_blank'>Routific</a>, a startup based in Vancouver, providing affordable logistics solutions. It was here that I first learnt web development. My job was to help where I could on the website. This included front end and back end work. On the front end I did some work making the login seamless across the main website and API website. I also did work making a data driven, scalable <a href='https://routific.com/faq' target='_blank'>FAQ page</a>. On the backend I set up some map servers, worked on seamless integration of data on the API website to the backend API, and developed some automation tools to help the developers.",
        descriptionBelow: "Having no prior experience working in web development (on the front or back end) this was an extremely challenging internship for me. The interview process alone cost many hours, learning what was necessary to develop a simple Angular application. I thought I would be able to contribute something valuable to the company regardless of my technical skill level due to my intuitive understanding of product, but I learnt that there is a big difference between conceptualizing a product, understanding how it works, and actually implementing it. It requires the right tools and the right team",
        additional: [
          {
            type: "code",
            content: "\
'''\n\
Author: Alexander Goddijn\n\
Created: 16th April 2015\n\
Last updated: by Alex Goddijn on 17th April 2015\n\
'''\n\
\n\
'''\n\
Instructions:\n\
Valid methods: \"add\" \"update\"\n\
In data/templates/ include a folder with your template name\n\
In the folder place .html and .css files with the same template name\n\
In your html file, instead of a link to a stylesheet put empty '<stlye></style>'\n\
In same folder /data/templates/templateName/ include a params.json file with\n\
Required parameters (check https://mandrillapp.com/api/docs/templates.JSON.html)\n\
Use API key associated with account the template needs to be uploaded to\n\
'''\n\
\n\
import requests\n\
import json\n\
import pynliner\n\n\
APIKEY = \"\"\n\
METHOD = \"update\"\n\
\n\
def generate_html(templateName):\n\
  html = open('./data/templates/'+templateName+'/'+templateName+'.html').read().decode('utf-8')\n\
  insertCss = html.split('<style></style>')\n\
  css = open('./data/templates/'+templateName+'/'+templateName+'.css').read().decode('utf-8')\n\
  toInline = insertCss[0] + '<style>' + css + '</style>' + insertCss[1]\n\
  code = pynliner.fromString(toInline)\n\
  return code\n\
\n\
\n\
def upload_template(data, method):\n\
  data['key'] = APIKEY\n\
  r = requests.post('https://mandrillapp.com/api/1.0/templates/'+method+'.json', json=data)\n\
  print r\n\
\n\
\n\
def template_tool(templates):\n\
  for templateName in templates:\n\
    params = json.load(open('./data/templates/'+templateName+'/params.json'))\n\
    code = generate_html(templateName)\n\
    params['code'] = code\n\
    upload_template(params, METHOD)\n\
\n\
template_tool(['sign-up','cancel-plan','charge-failure','dev-sign-up','forgot-password','upgrade-plan'])",
            caption: "Tool for automating email template updates (Python)"
          },
          {
            type: "code",
            content: "\
'''\n\
Usage: create data folder in same folder as this file.\n\
Add json files for areas here. Refer to sample file for\n\
format, do not forget region. At the bottom of the page\n\
add the name of any file you want to include in calculation\n\
in array. Make sure you have all the necesary modules and\n\
libraries installed via pip. Also do not forget google API key\n\
'''\n\
\n\
import json\n\
import gmaps\n\
import requests\n\
import statistics\n\
\n\
APIKEY = '' # Important, do not forget\n\
ROUTIFIC_API_URL = 'http://localhost:5000'\n\
\n\
def calculate_factor(areas):\n\
  for area in areas:\n\
    endpoints = json.load(open('./data/' + area + '.json'))\n\
\n\
    osmmatrixString = requests.post(ROUTIFIC_API_URL + '/matrix', json=endpoints).text\n\
    osmJson = convert_string_to_json(osmmatrixString)\n\
    try:\n\
      osmmatrixJson = osmJson['matrix']\n\
    except Exception as err:\n\
      raise Exception(osmJson['error'])\n\
\n\
    gmapmatrixJson = fetch_matrix_from_endpoints(endpoints)\n\
\n\
    gmapOverOsm = compute_analytics(gmapmatrixJson, osmmatrixJson)\n\
    print area\n\
    print 'Factor - ' + str(statistics.mean(gmapOverOsm))\n\
    print 'Standard Deviation - ' + str(statistics.stdev(gmapOverOsm)) + '\n'\n\
\n\
def convert_string_to_json(string):\n\
  from StringIO import StringIO\n\
  io = StringIO(string)\n\
  return json.load(io)\n\
\n\
def fetch_matrix_from_endpoints(endpoints):\n\
  return {origin_name: {destination_name: fetch_route_properties(origin_coords, destination_coords) for destination_name, destination_coords in \n\endpoints['to'].iteritems()} for origin_name, origin_coords in endpoints['from'].iteritems()}\n\
\n\
def fetch_route_properties(origin, destination):\n\
  # if origin and destination are the same, do not even query gmap\n\
  if origin == destination:\n\
    return {'distance': 0,\n\
            'duration': 0}\n\
\n\
  # rename 'lng' to 'lon' as required by gmaps lib\n\
  origin = {'lat': origin['lat'], 'lon': origin['lng']}\n\
  destination = {'lat': destination['lat'], 'lon': destination['lng']}\n\
\n\
  gmaps_api = gmaps.directions.Directions(api_key = APIKEY, use_https = True)\n\
  response = gmaps_api.directions(origin, destination, departure_time=None, arrival_time=None)\n\
  first_alternative = response[0] # sometimes GMaps returns two or three alternatives\n\
  first_leg = first_alternative['legs'][0] # the route could have multiple points\n\
  distance_in_metres = first_leg['distance']['value']\n\
  duration_in_seconds = first_leg['duration']['value']\n\
  return {'distance': distance_in_metres,\n\
          'duration': duration_in_seconds}\n\
\n\
def compute_analytics(gmap, osm):\n\
  gmapArr = []\n\
  for origin in gmap.iteritems():\n\
    for destination in origin[1].iteritems():\n\
      gmapArr.append(destination[1]['duration'])\n\
\n\
  osmArr = []\n\
  for origin in osm.iteritems():\n\
    for destination in origin[1].iteritems():\n\
      osmArr.append(destination[1])\n\
\n\
  gmapOverOsm = []\n\
  for i in range(0, len(gmapArr)):\n\
    if gmapArr[i] != 0 and osmArr[i] != 0:\n\
      gmapOverOsm.append(gmapArr[i]/float(osmArr[i]))\n\
\n\
  return gmapOverOsm\n\
\n\
calculate_factor(['UK'])",
            caption: "Tool for calculating discrepencies between OSRM and Google Map trip trimes"
          },
          {
            type: "image",
            content: "/content/images/jobs/routific/contactModal.png",
            caption: "Designed and implemented the contact form (on both front end and back end)"
          },
          {
            type: "image",
            content: "/content/images/jobs/routific/earlyWork.png",
            caption: "Some earlier work"
          }
        ]
      }
    ]
  };

  var jobs = [tomtom, axiomzen];

  return {jobs: jobs};

});