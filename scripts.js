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
    var selectedFile = document.getElementById('datafile').files[0];

    var fileReader = new FileReader();
    fileReader.onload =function(e){
        var text=e.target.result;
        //document.getElementById("demo").innerText=fileValues;
    };
    fileValues=fileReader.readAsText(selectedFile);
}
function Main() {
    seeds = readSeed();
    readFile();
}
function test(){
    document.getElementById("demo").innerText=fileValues;
}

