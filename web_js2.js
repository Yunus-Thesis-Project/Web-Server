var ros = new ROSLIB.Ros({
    url : 'ws://192.168.43.244:9090'
});

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
console.log('Connection to websocket server closed.');
});

var imageTopic= new ROSLIB.Topic({
ros : ros,
name : '/image',
messageType : 'sensor_msgs/CompressedImage'
});

var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/chatter',
    messageType : 'std_msgs/String'
});

var listener2 = new ROSLIB.Topic({
    ros : ros,
    name : '/chatter2',
    messageType : 'std_msgs/String'
});
var str_1, str_2;

listener.subscribe(function(m) {
    str_1 = m.data;
    document.getElementById("p_2").innerHTML = str_1;
});

listener2.subscribe(function(m) {
    str_2 = m.data;
    document.getElementById("p_1").innerHTML = str_2;
});

imageTopic.subscribe(function(m) {
var imagedata = "data:image/jpeg;base64," + m.data;
document.getElementById('stream').setAttribute('src', imagedata);
});