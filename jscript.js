(function(){

    var $ = function(selector){
        return document.querySelector(selector);
    };

    function dynamicEvent(){
        this.innerHTML = 'Dynamic event success';
        this.className += ' dynamic-success';

    }

    var links = $('#links').getElementsByTagName('li');

    for(var i=0; i<links.length;i++){
        var link = links[i];
        link.onclick = dynamicEvent;
    }
    var a=document.get
    $('.generate').onclick=function(){

        var dynamicValue = $('.generate-submit').value;

        if(!dynamicValue){

            alert('Please eneter something');
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
})();