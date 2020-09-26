$(document).ready(function () {
    $('#chuck').on('click', function () {

        $.ajax({
            type: "get",
            url: "https://api.chucknorris.io/jokes/random",
            data: "",
            dataType: "json",
            success: function (response, status, xhr) {
                $('#chulJoke').html(response.value);
                console.log(response.value);

            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage);

            }
        });

    });

    $('#rand').on('click', function () {

        $.ajax({
            type: "get",
            url: "https://sv443.net/jokeapi/v2/joke/Programming",
            data: "",
            // headers: {
            //     "x-rapidapi-host": "jokeapi.p.rapidapi.com",
            //     "x-rapidapi-key": "934d08ff2bmsh39e9e4cef71c30ap1b6cd2jsn82f589d82410"
            // }

            dataType: "json",
            success: function (response, status, xhr) {
                $('#randomJoke').html(response.joke || response.setup + ""
                    + response.delivery);
                console.log(response);

            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage);

            }
        });
        // fetch("https://jokeapi.p.rapidapi.com/categories?format=json", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "jokeapi.p.rapidapi.com",
        //         "x-rapidapi-key": "934d08ff2bmsh39e9e4cef71c30ap1b6cd2jsn82f589d82410"
        //     }
        // })
        //     .then(response => { return response.json() })
        //     .then(response => console.log(response))
        //     .catch(err => {
        //         console.log("the message", err);
        //     });


    });

});
