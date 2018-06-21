var prevScrollPos=window.pageYOffset;

window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}

var data = $('#form').serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
}, {});