console.log("Welcome to The Ultimate jQuery Course!🚀");












$(function () {
    //$("p.second").hide()

    $("#hideButton").click(function () {

        $(".second").toggleClass("box")
        let color = $("div.box").css("background-color")
        $("#third").css({"color": color, "background-color": black})

        console.log(color)

        // $("p.second").text("This is JQuery tuto")


        // $("p.second").slideToggle()

        /* $(".box").animate({
          width: "+=200px",
          height: "200px",
          fontSize: " 15"
         })*/

        console.log($("#hideButton").val())


    })

    $("body").keydown(function (e) {
        if (e.which === 72) {
            $("p.second").hide()
        } else if (e.which === 83) {
            $("p.second").show()
        }
    })
})

