var random_result;
var lose = 0;
var win = 0;
var num_tracker = 0;

var images = [
    'https://farm5.static.flickr.com/4124/5209203814_879375decc_b.jpg',
    'https://i.pinimg.com/originals/11/a8/a1/11a8a1b6a402392e990fae395308209f.jpg',
    'https://i.pinimg.com/originals/85/8f/a5/858fa5aa897ffa150a5b8580f639ae17.jpg',
    'https://i.pinimg.com/originals/37/b9/58/37b9584ad8e4f83cf4c9f8d33ef3cad4.jpg',
];

var game = function(){ 

$(".crystals").empty();

random_result = Math.floor(Math.random() * 101) + 19;

$('#result').html('Random Number: ' + random_result);

for(var i = 0; i < 4; i++){
var randomNum = Math.floor(Math.random()* 13) + 1;


var crystal = $("<div>");
crystal.attr({
    "class": 'crystal',
    "number": randomNum
});

crystal.css({
    "background-image":"url('" + images[i] + "')",
    "background-size":"cover"
});

$(".crystals").append(crystal);
}
}

game();



$(document).on('click',".crystal", function () {

var num = parseInt($(this).attr('number'));

num_tracker += num;

$('#num_tracker').html("Your score: " + num_tracker);

console.log(num_tracker);

if(num_tracker > random_result){
    lose++;
    $('#lost').html("Your losses: " + lose );
    num_tracker = 0;
    $('#num_tracker').html("Your score: " + num_tracker);
    game();
}
else if(num_tracker === random_result){
win++;
$('#win').html("Your wins: " + win);
num_tracker = 0;
$('#num_tracker').html("Your score: " + num_tracker);
game();
}

});

