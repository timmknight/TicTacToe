$(function() {

//Create board obejct and assign each square the blank value.
  var board = ["","","","","","","","",""];

  var X = 'X';
  var O = 'O';
  var curPlayer = X;
  var  count = 0;
  var index = 0;
  // var divid =
  var switchPlayer = function() {
    curPlayer = ( curPlayer === X ) ? O : X;
    displayMessage( 'Current Player: ' + curPlayer );
  };

  var addXorO = function(){

    $('.square').on('click', function(){

      if($(this).html()){
        alert("Illegal move! Try another square.");
      } else {
        $(this).html( curPlayer);

      $(this).html( curPlayer);

      var index = parseInt($(this).attr('id'));
      console.log(index);
      board[index] = curPlayer;
      console.log(board);
      win();
      switchPlayer();

      countClicks();

      }
    }
    );
  };


  var win = function(){
    //Horizontal winning alignments

    if((board[0] === board[1])&&(board[0] === board[2])&&board[0]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    if((board[3] === board[4])&&(board[3] === board[5])&&board[3]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    if((board[6] === board[7])&&(board[6] === board[8])&&board[6]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }

    //Vertical alignments
    if((board[0] === board[3])&&(board[0] === board[6])&&board[0]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    if((board[1] === board[4])&&(board[1] === board[7])&&board[1]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    if((board[2] === board[5])&&(board[2] === board[8])&&board[2]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    //Diagonal alignments
    if((board[0] === board[4])&&(board[0] === board[8])&&board[0]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }
    if((board[2] === board[4])&&(board[2] === board[6])&&board[2]){
      alert(curPlayer + " Wins!");
      resetBoard();
    }

  };


  var displayMessage = function( message ) {
    $( '.message' ).html( message );
  };

var resetBoard = function(){
  board = ["","","","","","","","",""];
  count = 0;
  $('.square').html("");

};

  //Selectors
  var $container = $('#container');

  var countClicks = function(){
    count=parseInt(count)+parseInt(1);
    console.log(count);
    if(count===10){
      count = 0;
      alert("Game Over, It's a Draw!");
      resetBoard();
    }
    return count;
  };


  var renderGrid = function(){
    for (var i = 0; i < 9; i++) {
      $container.append("<div class='square' id=" + i + "/>");
      $container.css('margin', 'auto');
    }
  };

  var gridStyling = function(){
    var $square = $('.square');
    var borderstyling = '1px solid black';
    var borderbottom = 'border-bottom';
    var borderright = 'border-right';
    var height = 'height';
    var width = 'width';
    $square.css(height, '150px');
    $square.css(width, '150px');
    $square.css('background-color', 'grey');
    $square.css('box-sizing', 'border-box');
    $square.css('font-size', '5em');
    $square.css('text-align', "center");
    $square.css('line-height', "150px");
    $square.css('float', 'left');
    $container.css(width, '450px');
    $container.css(height, '450px');
    $('.message, .title').css('text-align', 'center');
    $('#0, #1, #2, #3, #4, #5').css(borderbottom, borderstyling);
    $('#0, #1, #3, #4, #6, #7').css(borderright, borderstyling);
  };

  switchPlayer();
  renderGrid();
  gridStyling();
  addXorO();
  win();
  countClicks();
});
