$(function () {
    /*$('input').focus(function () {
        $(this).css("background-color", "tomato")
    })
    $('input').blur(function () {
        $(this).css("background-color", "")
    })
    $('input').change(function () {
        console.log($(this).val())
    })
    $("#register_form").submit(function (e){
        e.preventDefault()
        console.log("Form submitted")
    })*/

    $('#output').load("sample.txt", function (response, status, xhr) {
        /*if (status === "error") {
            alert("Error: " + xhr.status + " " + xhr.statusText);
        } else if (status === "success") {
            alert("Success! ")
        }*/

        $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
            console.log(data, status)
        })

        $.post("https://jsonplaceholder.typicode.com/posts", { title: "Harry Potter", body: "Hello", id: 101 }, function (data, status) {
            console.log(data, status)
        })


        //Butr we actually use fetch api
    })
})