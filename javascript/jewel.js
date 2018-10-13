

var comNumber = Math.floor(Math.random() * 120 + 19);
$("#numberGuessed").text(comNumber);

for (let i = 0; i < 4; i++){

var crystalPic = $("<img>");
crystalPic.addClass("crystal-image");
crystalPic.attr("src", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.consciousreminder.com%2Fwp-content%2Fuploads%2F2017%2F02%2F5529738_orig.jpg&imgrefurl=https%3A%2F%2Fwww.consciousreminder.com%2F2018%2F09%2F23%2Fcrystals-for-the-adventurous-explorer%2F&docid=KfIL7wr9aNxBPM&tbnid=qEYtqTReXMTsdM%3A&vet=12ahUKEwizrt6uyoHeAhVpFjQIHYnmCno4ZBAzKFowWnoECAEQXA..i&w=1066&h=800&bih=649&biw=1213&q=crystals&ved=2ahUKEwizrt6uyoHeAhVpFjQIHYnmCno4ZBAzKFowWnoECAEQXA&iact=mrc&uact=8");
crystalPic.attr("data-crystalWeight", comNumber[i]);
$("#crystalBoxes").append(crystalPic);

}

var userCounter = 0;

$("#crystals").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalWeight"));
    crystalValue = parseInt(crystalValue);

    userCounter += crystalValue;

    userCounter = Math.floor(Math.random() * 12 + 1);
    $("#points").text(userCounter);

    if (userCounter === comNumber) {
        $("#points").text("You Win!");
    } else if (userCounter >= comNumber) {
        $("#points").text("You Lose!");
    }

});
