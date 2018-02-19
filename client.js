$(document).ready(function(){
  var userChar = "X";
  var computerChar = "O";
  var userFields = [];
  var computerTurn = '';
  var computerFields = [];
  
  $('#o').on('click', function(){
    userChar = "O";
    computerChar = "X";
    createTicTacToe();
  });
  
  $('#x').on('click', function(){
    userChar = "X";
    computerChar = "O";
    createTicTacToe();
  });
 
  $(document).on('click', '#message', function(){
   computerFields = [];
   userFields = [];
   createTicTacToe(); 

  });

  $(document).on('click', '#ticTable #cell1', function(){
    
    clickedNum(1, computerFields, userFields, userChar, computerChar);
  });
                 
$(document).on('click', '#ticTable #cell2', function(){
  clickedNum(2, computerFields, userFields, userChar, computerChar);
});
  
  $(document).on('click', '#ticTable #cell3', function(){
     clickedNum(3, computerFields, userFields, userChar, computerChar);
  });
  
  $(document).on('click', '#ticTable #cell4', function(){
    clickedNum(4, computerFields, userFields, userChar, computerChar); 
  });
  
  $(document).on('click', '#ticTable #cell5', function(){
    clickedNum(5, computerFields, userFields, userChar, computerChar);
  }); 
  
$(document).on('click', '#ticTable #cell6', function(){
  clickedNum(6, computerFields, userFields, userChar, computerChar);
});
  
 $(document).on('click', '#ticTable #cell7', function(){
    clickedNum(7, computerFields, userFields, userChar, computerChar);
 });
  
  $(document).on('click', '#ticTable #cell8', function(){
    clickedNum(8, computerFields, userFields, userChar, computerChar);
  });
  
   $(document).on('click', '#ticTable #cell9', function(){
      clickedNum(9, computerFields, userFields, userChar, computerChar); 
   });
 });

function finishGame(computerFields, userFields){
   document.getElementById("heading").innerHTML = '<h2 style="color:#f9650e;">GAME OVER!</h2>';
  
}

function stillPlaying(arr1, arr2){
  var returnVal = true;
  returnVal = checkCombos(arr1);
  if (returnVal){
    returnVal = checkCombos(arr2);
  } 
  if (returnVal){
    if(arr1.length + arr2.length == 9){
       returnVal = false;
    }
  }
  return returnVal;
}

function checkCombos(arr){
  var returnVal = true;
  
    returnVal = checkAllNums([1,2,3], arr)
  
  if (returnVal){
    returnVal = checkAllNums([4,5,6], arr)
  }
  
   if (returnVal){
    returnVal = checkAllNums([7,8,9], arr)
  }
  
   if (returnVal){
    returnVal = checkAllNums([1,4,7], arr)
  }
  
   if (returnVal){
    returnVal = checkAllNums([2,5,8], arr)
  }
  
  if (returnVal){
    returnVal = checkAllNums([1,5,9], arr)
  }
  
   if (returnVal){
    returnVal = checkAllNums([3,6,9], arr)
  }
  
  if (returnVal){
    returnVal = checkAllNums([3,5,7], arr)
  }

  return returnVal;
}

function checkAllNums(numArr, arr){
  var returnVal = true;
  var counter = 0;
  for (var j = 0; j < numArr.length; j++){
    if ($.inArray(numArr[j], arr) > -1){
      counter ++;
    }
  }
  if (counter == 3){
    returnVal = false;
  }
    
  return returnVal;
}

function getComputerField(userArr, computerArr){
  var returnVal = 0; 
  
  //First, check if we can score;
  returnVal = checkScores(computerArr, userArr);
  
  //Then, need to make sure user is not about to score: check for rows, columns and slashes; if find any, stop user
  if (returnVal == 0){
    returnVal = checkScores(userArr, computerArr);
  }

//alert('returnVal1 in getComp..' + returnVal);
 //User is not about to score:find strategic points not yet taken; 5 or   corners
  if (returnVal == 0){
    if (($.inArray(5, userArr) == -1) && ($.inArray(5, computerArr) == -1))
      returnVal = 5; 
  }

  if (returnVal == 0){
    if (($.inArray(1, userArr) == -1) && ($.inArray(1, computerArr) == -1))
      returnVal = 1; 
  }

  if (returnVal == 0){
    if (($.inArray(3, userArr) == -1) && ($.inArray(3, computerArr) == -1))
      returnVal = 3; 
  }
  
  if (returnVal == 0){
    if (($.inArray(7, userArr) == -1) && ($.inArray(7, computerArr) == -1))
      returnVal = 7; 
  }
  
  if (returnVal == 0){
    if (($.inArray(9, userArr) == -1) && ($.inArray(9, computerArr) == -1))
      returnVal = 9; 
  }
  
  //alert('returnVal2 in getComp..' + returnVal);
  //If we still didn't score anything, go for the leftover fields
  if (returnVal == 0){
    if (($.inArray(2, userArr) == -1) && ($.inArray(2, computerArr) == -1))
      returnVal = 2; 
  }
  
  if (returnVal == 0){
    if (($.inArray(4, userArr) == -1) && ($.inArray(4, computerArr) == -1))
      returnVal = 4; 
  }
  
  if (returnVal == 0){
    if (($.inArray(6, userArr) == -1) && ($.inArray(6, computerArr) == -1))
      returnVal = 6; 
  }
  
  if (returnVal == 0){
    if (($.inArray(8, userArr) == -1) && ($.inArray(8, computerArr) == -1))
      returnVal = 8; 
  }
  //alert('returnVal3 in getComp..' + returnVal);
  return returnVal;
}

function checkScores(arr1, arr2){
  var returnVal = 0;
  //Check 123, 456, 789; 147, 258, 369; 159, 357
  returnVal = checkNums([1,2,3], arr1, arr2)
  
  if (returnVal == 0){
    returnVal = checkNums([4,5,6], arr1, arr2)
  }
  
   if (returnVal == 0){
    returnVal = checkNums([7,8,9], arr1, arr2)
  }
  
   if (returnVal == 0){
    returnVal = checkNums([1,4,7], arr1, arr2)
  }
  
   if (returnVal == 0){
    returnVal = checkNums([2,5,8], arr1, arr2)
  }
  
  if (returnVal == 0){
    returnVal = checkNums([1,5,9], arr1, arr2)
  }
  
   if (returnVal == 0){
    returnVal = checkNums([3,6,9], arr1, arr2)
  }
  
  if (returnVal == 0){
    returnVal = checkNums([3,5,7], arr1, arr2)
  }
  
  return returnVal;
}

function checkNums(numArr, arr1, arr2){
  var returnVal = 0;
  var temp = 0;
  var counter = 0;
  for (var i = 0; i < numArr.length; i++){
    //if num in arr: increase counter; if num not in arr: add it to temp
    if ($.inArray(numArr[i], arr1) > -1){
      counter += 1;  
    }
    else{
      temp = numArr[i];    
    }    
  }
  //if counter == 2 and temp is not already in computerArr, add temp to return val;
 if ((counter == 2) && ($.inArray(temp, arr2) == -1)){
    returnVal = temp;  
  }
  
  //alert('in checkNum, numArr: ' + numArr + ' returnVal: ' + returnVal);
  return returnVal;
}

function createTicTacToe(){
 
  document.getElementById("heading").innerHTML = 'Tic Tac Toe';
   
  $('#innerDiv').empty();
  
  var content = '<table id="ticTable"><tr id="row1"><td id="cell1">&nbsp;</td><td id="cell2">&nbsp;</td><td id="cell3">&nbsp;</td></tr><tr id="row2"><td id="cell4">&nbsp;</td><td id="cell5">&nbsp;</td><td id="cell6">&nbsp;</td></tr><tr id="row3"><td id="cell7">&nbsp;</td><td id="cell8">&nbsp;</td><td id="cell9">&nbsp;</td></tr></table>';
  
  $('#innerDiv').append(content);
  
}
      
function clickedNum(num, computerFields, userFields, userChar, computerChar){
  //alert('here! gameOver: ' + gameOver);
    //Note: here we need to also program the computer's step!
    if (stillPlaying(computerFields, userFields)){
       $('#cell'+ num).html(userChar);
    userFields.push(num);
      
      computerTurn = getComputerField(userFields, computerFields);
      //alert('compTurn: ' + computerTurn);
      $('#cell'+ computerTurn).html(computerChar);
      computerFields.push(computerTurn);
      
      if (!stillPlaying(computerFields, userFields)){
        finishGame(computerFields, userFields);
        computerFields=[];
        userFields=[];
      }
    }
    else{
      finishGame(computerFields, userFields);
      computerFields=[];
        userFields=[];
    }
  
}
   