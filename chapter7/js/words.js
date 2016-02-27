function $(id){
    'use strict';

    if(typeof id != 'undefined'){
        return document.getElementById(id);
    }
}

function setText(elementId, message){
    'use strict';

    if ((typeof elementId == 'string') && (typeof message == 'string')) {
        let output = $(elementId);
        if (output.textContent !== undefined) {
            output.textContent = message;
        } else {
            output.innerText = message;
        }
    }
}
function sortWords(max){
    'use strict';

    let words = $('words').value;

    words = words.split(' ');

    let sorted = words.map(value => value.toLowerCase()).sort();

    // let sorted = words.map(function(value){
    //     return value.toLowerCase();
    // }).sort();

    setText('output', sorted.join(', '));

    return false;
}

function init(){
    'use strict';
    $('theForm').onsubmit = sortWords;
}
window.onload = init;
