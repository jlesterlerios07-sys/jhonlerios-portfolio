$(document).ready(function(){

    $("#btn1").click(function(){
        $("#title").text("Hello!")
        $("#stats").text("You click the button")
    })

    $("#btn1").dblclick(function(){
        $("#title").text("You double click the button")
        $("#stats").text("You double click button")
    })

    $("#btn2").click(function(){
        $("#studentcon").hide("slow")
        $("#stats").text("Hide the profile")
    })

    $("#btn3").click(function(){
        $("#studentcon").show("slow")
        $("#stats").text("Displayed the profile")
    })

    $("#course").click(function () {
    $("#pickcourse")
    })

    $("#choice").change(function () {
    $("#coursecon").text($(this).val())
    })


})
