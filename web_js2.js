var ros = new ROSLIB.Ros({
    url : 'ws://192.168.137.104:9090'
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

//======================================================================================================

var imageSub = new ROSLIB.Topic({
    ros : ros,
    name : 'ayam/image',
    messageType : 'sensor_msgs/CompressedImage'
});

var timeSub = new ROSLIB.Topic({
    ros : ros,
    name : 'ayam/time',
    messageType : 'std_msgs/String'
});

var targetSub = new ROSLIB.Topic({
    ros : ros,
    name : 'ayam/target',
    messageType : 'std_msgs/String'
});

var errorSub = new ROSLIB.Topic({
    ros : ros,
    name : 'ayam/error',
    messageType : 'std_msgs/String'
});

var detectSub = new ROSLIB.Topic({
    ros : ros,
    name : 'ayam/detect',
    messageType : 'std_msgs/String'
});

//======================================================================================================

var timeData, targetData, errorData, detectData;

timeSub.subscribe(function(m) {
    timeData = m.data;
    document.getElementById("p_1").innerHTML = timeData;
});

targetSub.subscribe(function(m) {
    targetData = m.data;
    document.getElementById("p_2").innerHTML = targetData;
});

errorSub.subscribe(function(m) {
    errorData = m.data;
    document.getElementById("p_3").innerHTML = errorData;
});

detectSub.subscribe(function(m) {
    detectData = m.data;
    document.getElementById("p_4").innerHTML = detectData;
});

imageSub.subscribe(function(m) {
    var imagedata = "data:image/jpeg;base64," + m.data;
    document.getElementById('stream').setAttribute('src', imagedata);
});

var state = 0
function start_stop(){
    state++
    if(state==2) state=0;
    if(state%2==1){
        document.getElementById("p_5").innerHTML = "System Started";
        document.getElementById("p_5").style.color = '#00ff00';
    }else{
        document.getElementById("p_5").innerHTML = "System Stopped";
        document.getElementById("p_5").style.color = '#ff0000';
    }
    
}