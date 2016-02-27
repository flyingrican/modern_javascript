(function(){
    var tasks = [];

    function addTask(){
        'use strict';
        var task = document.getElementById('task');
        var output = document.getElementById('output');

        var message = '';

        if (task.value) {
            tasks.push(task.value);
            message = '<h2>To-Do</h2><ol>';
            var count = tasks.length;
            for (var i = 0; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';
            output.innerHTML = message;

        }//End of task.value IF
        return false;
    }


    function init(){
        'use strict';
        document.getElementById('theForm').onsubmit = addTask;
    }//End of init function
    window.onload = init;
})();
