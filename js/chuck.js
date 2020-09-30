

$(document).ready(function () {

    var Joke = $('#Joke');

    $('#chuck').on('click', function () {

        $.ajax({
            type: "get",
            url: "https://api.chucknorris.io/jokes/random",
            data: "",
            dataType: "json",
            success: function (response, status, xhr) {

                Joke.html(response.value);
                console.log(response);

            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage);

            }
        });

    });

    $('#rand').on('click', function () {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://joke3.p.rapidapi.com/v1/joke",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": apiKey //use your API key
            }
        }

        $.ajax(settings).done(function (response) {

            Joke.html(response.content);
            console.log(response);
        });

    });

});
