var mqtt = require("mqtt");

var options = {
  port: 8883,
  host:"mqtts://b-51cdecbe-d5bc-4b69-90b2-d9bf8ad91213-1.mq.us-east-1.amazonaws.com",
  clientId:
    "mqttjs_blackie_" +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: "<username>",
  password: "<password>",
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: "MQIsdp",
  protocolVersion: 3,
  clean: true,
  encoding: "utf8"
};

var client = mqtt.connect(
  "mqtts://b-51cdecbe-d5bc-4b69-90b2-d9bf8ad91213-1.mq.us-east-1.amazonaws.com",
  options
);

client.on("connect", function() {
  console.log("Connected Publisher start...");
  client.subscribe("presence");
  //start sending
  setInterval(function() {
    var message =  "Hello mqtt with timeInMs:" + Date.now();
    console.log("sending ", message);
    client.publish("presence", message, { qos: 1 }, function() {
      console.log("sent ", message);
    });
  }, 1000);
});

client.on("message", function(topic, message) {
  // message is Buffer
  console.log("Received msg from AWS MQ:" + message.toString());
});
