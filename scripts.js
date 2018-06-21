var prevScrollPos=window.pageYOffset;

window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}
var x;
function seeInput(){
    var data=document.getElementById("user_input").value;

    return data
}
function Main() {
    x = seeInput();
    window.alert(x);

}