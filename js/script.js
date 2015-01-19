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

//Normally the styling would be done in a css file, however just as practice I've done it with jQuery
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

//This is an OOP version of the code above. I did not write it, it was written by a more experienced
//developer who was showing me more about OOP and how it works and should be written.
//
// $(function() {
//   var X = 'X';
//   var O = 'O';
//
//   var Board = function($container) {
//     this.$container = $container;
//     this.board = ["","","","","","","","",""];
//     this.curPlayer = X;
//   };
//
//   Board.prototype.render = function() {
//     for (var i = 0; i < 9; i++) {
//       this.$container.append('<div class="square" id="' + i + '"/>');
//     }
//     // .bind says that we want the 'this' in handleSquareClicked to be the Board object.
//     this.$container.find('.square').on('click', this.handleSquareClicked.bind(this));
//   };
//
//   Board.prototype.handleSquareClicked = function(e) {
//     // 'this' is the Board object. e.target is the clicked square.
//     if($(e.target).html()){
//       alert("Illegal move! Try another square.");
//     } else {
//       $(e.target).html(this.curPlayer);
//       var index = parseInt($(e.target).attr('id'));
//       console.log(index);
//       this.board[index] = this.curPlayer;
//       console.log(this.board);
//       this.win();
//       this.draw();
//       this.switchPlayer();
//     }
//   };
//
//   Board.prototype.win = function() {
//     var board = this.board;
//     var curPlayer = this.curPlayer;
//     var winningAlignments = [
//     // horizontal
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     // vertical
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     // diagonal
//     [0, 4, 8],
//     [2, 4, 6]
//     ];
//     for (var i = 0; i < winningAlignments.length; i++) {
//       var wa = winningAlignments[i];
//       if(board[wa[0]] && board[wa[0]] === board[wa[1]] &&board[wa[1]] === board[wa[2]]) {
//         alert(curPlayer + " Wins!");
//         this.resetBoard();
//         return;
//       }
//     }
//   };
//
//   Board.prototype.draw = function() {
//     for (var i = 0; i < this.board.length; i++) {
//       if (this.board[i] === "") {
//         return;
//       }
//     }
//     alert("Game Over, It's a Draw!");
//   };
//
//   Board.prototype.resetBoard = function(){
//     this.board = ["","","","","","","","",""];
//     count = 0;
//     this.$container.find('.square').html("");
//   };
//
//   Board.prototype.switchPlayer = function() {
//     this.curPlayer = ( this.curPlayer === X ) ? O : X;
//     displayMessage( 'Current Player: ' + this.curPlayer );
//   };
//
//   //Create board obejct and assign each square the blank value.
//
//
//   var displayMessage = function( message ) {
//     $( '.message' ).html( message );
//   };
//
//   var board1 = new Board($('#container1'));
//   board1.render();
// });
