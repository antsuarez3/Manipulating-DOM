$(document).ready(function () {
    //OBJECTIVE 1 //
    let something = $('<input/>').attr({ type: 'button', name: 'btn1', value: 'Click Me' });
    $('body').append(something);
    $(something).on('click', function () {
        alert("Aye, Aye, focus dude!");
    })

    // OBJECTIVE 2 //
    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        let value = $("#words").val();
        alert(value);
    });

    //OBJECTIVE 3 //
    let div = $("div")
    div.height('100px');
    div.css("background-color", "blue");
    div.hover(

        function () {
            $(this).css({ "background-color": "white" });
        },

        function () {
            $(this).css({ "background-color": "blue" });
        }
    );

    //OBJECTIVE 4 //
    $('#para5').on('click', function () {
        //$('#para5').css("color", 'red');

        let colorR = Math.floor((Math.random() * 256));
        let colorG = Math.floor((Math.random() * 256));
        let colorB = Math.floor((Math.random() * 256));
        $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");

    })

    //OBJECTIVE 5 //
    let buttonFive = $('<input/>').attr({ type: 'button', name: 'btn1', value: 'All these clicks' });
    $('body').append(buttonFive);
    $('<div id="divFive"></div>').appendTo('body');

    $(buttonFive).on('click', function () {
        let span = $('<span></span>');
        let spanText = 'Anthony Suarez ';
        $(span).append(spanText);
        $(buttonFive).append(span);
        $('#divFive').append(span);
    })

    //OBJECTIVE 6 //
}); 