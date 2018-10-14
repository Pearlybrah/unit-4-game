var crystal = {
points: 0,
losses: 0,
wins: 0,
goal: 0,
};

$("#positive-results").text(crystal.wins);
$("#negative-results").text(crystal.losses);
$("#numberGuessed").text(crystal.goal);
$("#points").text(crystal.points);


$(".button").on("click", function() {

    crystal.points = (parseInt(crystal.points) + parseInt($(this).val()));
    
    if (crystal.winner()) {
        crystal.finished();
    };

    $("#positive-results").text(crystal.wins);
    $("#negative-results").text(crystal.losses);
    $("#numberGuessed").text(crystal.goal);
    $("#points").text(crystal.points);



});


crystal.finished = function() {
  crystal.points = 0;

  this.goal = Math.floor((Math.random() * 101) + 19);

  $("#crystal1").val(Math.floor((Math.random() * 12) +1));
  $("#crystal2").val(Math.floor((Math.random() * 12) +1));
  $("#crystal3").val(Math.floor((Math.random() * 12) +1));
  $("#crystal4").val(Math.floor((Math.random() * 12) +1));


};


crystal.winner = function() {
    if (crystal.points === this.goal) {
        this.wins++;
        return true
    } else if (crystal.points > this.goal) {
        this.losses++;
        return true
    }
    return false
};

crystal.finished();



