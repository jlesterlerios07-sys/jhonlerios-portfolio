// Colors used for the table row buttons
var stripeColor = "#c4b5fd";
var plainColor = "#f5f3ff";
var headColor = "#7c3aed";

$("#concealBtn").click(function(){
    $("#infoBox").hide("slow")
    $("#noticeLine").hide("slow")
})

$("#revealBtn").click(function(){
    $("#infoBox").show(1000)
    $("#noticeLine").show(1000)
})

$("#switchTitleBtn").click(function(){
    $("#pageTitle").text("This is New Title")
    $("#noticeLine").text("Change Title Selected")
})

$("#switchTitleBtn").dblclick(function(){
    $("#pageTitle").text("Welcome Students!")
    $("#noticeLine").text("Waiting...")
})

$("#stripeOddBtn").click(function(){
    $("#classTable tr:odd").css("background", stripeColor)
    $("#classTable tr:even").css("background", plainColor)
    $("#classTable th").css("background", headColor)
    $("#tableNotice").text("Odd Rows Selected")
})

$("#stripeEvenBtn").click(function(){
    $("#classTable tr:odd").css("background", plainColor)
    $("#classTable tr:even").css("background", stripeColor)
    $("#classTable th").css("background", headColor)
    $("#tableNotice").text("Even Rows Selected")
})

$("#programPicker").change(function(){
    $("#programResult").text($(this).val())
})
