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
    fileReader.onload =function(e,text){
        fileValues = e.target.result;
    };
    fileReader.readAsText(selectedFile);
}

function Main() {
    var check1;
    check1=document.getElementById("checkbox");
    if(check1.checked==true){
        //document.getElementById("demo").innerText="pressed!";
        readFile();
    }else{
        seeds = readSeed();
    }
}
function test(){
    //document.getElementById("demo").innerText=fileValues;
    //alert(seeds);

}

