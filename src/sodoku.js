export function SodokuCheck(arrayBoard) {
  this.arrayBoard = arrayBoard;
  this.gameArray = [];
  this.winner = false;
}


SodokuCheck.prototype.numsMatch = function(gameArray){
  for(let i=0; i < gameArray.length; i++){
    let newArray = Array.from(new Set(gameArray[i]));
    if (newArray.length === 9){
      this.winner = true;
    } else {
      this.winner = false;
      break;
    }
  }
};

SodokuCheck.prototype.rowArray = function() {
  let rowFinal = [];

  for(let i=0;i < 81;i += 9){
    let row = this.arrayBoard.slice(i,i + 9);
    rowFinal.push(row);
  }

  this.numsMatch(rowFinal);
};

SodokuCheck.prototype.columnArray = function(){
  let columns=[];
  let columnFinal = [];
  for (var i = 0; i < 9; i++) {
    for(var j = i; j < this.arrayBoard.length; j+=9){
      columns.push(this.arrayBoard[j]);
    }
  }
  for(let k=0;k < 81;k += 9){
    let column = columns.slice(k,k + 9);
    columnFinal.push(column);
  }
  this.numsMatch(columnFinal);

};
