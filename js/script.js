var prevScrollPos=window.pageYOffset;
var $ = function(selector){
    return document.querySelector(selector);
};
window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}
var seeds;
var fileValues;
function readSeed(){
    var data=document.getElementById("user_input").value;
    return data
}
function readFile(){
    var selectedFile = document.getElementById('datafile').files[0];
    var fileReader = new FileReader();
    fileReader.onload =function(e,text){
        fileValues = e.target.result;
    };
    fileReader.readAsText(selectedFile);
}



function Main() {
    var check1;
    check1=$('#checkbox');
    document.getElementById("demo").innerText="pressed!";
    readFile();
    seeds = readSeed();

}

$('.generate').onclick=function(){

    var dynamicValue = $('.generate-submit').value;

    if(!dynamicValue){

        alert('Please enter something');
    } else {
        $('.generate-submit').value = 'Click your item below';
        var li = document.createElement('li');
        li.className = 'dynamic-link';
        li.innerHTML = dynamicValue;
        $('#links').appendChild(li);
        li.onclick = dynamicEvent;
    }
    return false;
};
function test(){
    document.getElementById("user_input").value=fileValues;
    alert(seeds);
}