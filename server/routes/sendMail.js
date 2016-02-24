var config = require('../config.js');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.mandrillApi);

module.exports = sendMail;

function sendMail(req, res) {

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var toSend = {
    "html": "<p>"+message+"</p>",
    "text": message,
    "subject": "From Website",
    "from_email": email,
    "from_name": name,
    "to": [{
      "email": "alex.goddijn@gmail.com",
      "name": "Alexander Goddijn",
      "type": "to"
    }]
  };
  mandrill_client.messages.send({"message": toSend}, function(result) {
    console.log(result);
    var status = result[0].status;
    if (status == 'sent') {
      res.send({success: true});
    } else {
      res.send({success: false, reason: status});
    };
  }, function(e) {
    console.log("Mandrill Error: "+e.message);
    res.send({success: false, error: e});
  });
};
