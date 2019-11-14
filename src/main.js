import { SodokuCheck } from './sodoku.js';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $("#sodoku").submit(function(event) {
    event.preventDefault();
    let arrayBoard = [];
    for(let i=0; i < 81; i++){
      arrayBoard.push($('#cell-'+i).val());
    }
    let sodokuCheck = new SodokuCheck(arrayBoard);
    sodokuCheck.columnArray();
    sodokuCheck.rowArray();

    if(sodokuCheck.winner === true) {
      $('#winner').show();
    } else {
      $('#loser').show();
    }
  });
});
