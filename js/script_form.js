
var seeds;
var targetProteins;
var fileValues;
function repeat() {
    document.getElementById("nr_lines").innerText=$("#user_input").value.split("\n").length+" lines";
    repeater = setTimeout(repeat, 1000);
}

var $ = function(selector){
    return document.querySelector(selector);
};
$("#datafile").onchange=(function(){
    readFile();
});
/*window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}*/
function readTextArea(file){
    var data=file.value;
    return data
}
function readFile(){
    var selectedFile = document.getElementById('datafile').files[0];
    var fileReader = new FileReader();
    fileReader.onload =function(e){
        fileValues = e.target.result;
        $("#user_input").value=fileValues;
        document.getElementById("nr_lines").innerText=$("#user_input").value.split("\n").length;
    };
    fileReader.readAsText(selectedFile);

}
function Main() {
    /*readFile();*/

    seeds = readTextArea($("#user_input"));
    targetProteins = readTextArea($("#target_proteins"));
    var interval = setInterval(function () { repeat(); }, 500);
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
    $("#demo").innerText=targetProteins;
}



$("select").on("click" , function() {

    $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);

});


