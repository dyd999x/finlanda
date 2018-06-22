var prevScrollPos=window.pageYOffset;

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
    var data=document.getElementById("datafile").value;
    return data;
}
function Main() {
    seeds = readSeed();
    fileValues = readFile();
    window.alert(fileValues);
}

