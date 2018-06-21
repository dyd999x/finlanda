var prevScrollPos=window.pageYOffset;

window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}


function seeInput(){
    var x = document.getElementById("user_input").value;
    document.getElementById("demo").innerHTML = x;
    alert(x);
}
