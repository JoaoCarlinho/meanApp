import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  title = 'tictactoe';
  s//tatus = document.getElementById('status');
  @ViewChild('status') status: ElementRef;
  //determine if computer is x's or o's
  xControlledbyAI = false;
  oControlledbyAI = false;
  xAIChecked = false;
  oAIChecked = false;
  xPlayer = (this.xAIChecked)? 1:0;
  oPlayer = (this.oAIChecked)? 1:0;
  aiPlayers = this.xPlayer + this.oPlayer;
  //determine who's turn it is
  xTurn = true;
  //string representation of current player's move
  
  turn: string;
  //determine if there's a threat
  threat = false;
  //determine if there's a winner
  state = true;
  //array for marked spaces
  xSquares: String[] = [];
  oSquares: String[] = [];

  corners: string[] = ['one', 'three', 'seven', 'nine'];
  options: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  //arrays for winning conditions
  winningArrays = new WinningArrays;
  ngOnInit() {
    //list winning combinations
  this.winningArrays.topRow = ['one', 'two', 'three'];
  this.winningArrays.midRow = ['four', 'five', 'six'];
  this.winningArrays.botRow = ['seven', 'eight', 'nine'];
  this.winningArrays.firstCol = ['one', 'four', 'seven'];
  this.winningArrays.secondCol = ['two', 'five', 'eight'];
  this.winningArrays.thirdCol = ['three', 'six', 'nine'];
  this.winningArrays.topToBotDiagonal = ['one', 'five', 'nine'];
  this.winningArrays.botToTopDiagonal = ['seven', 'five', 'three'];
  }
  constructor(){

  }

  Restart(){
    //remove AI players
    this.xControlledbyAI = this.xAIChecked = false;
    this.oControlledbyAI = this.oAIChecked = false;
    //set classnames for all squares to null
    for(let square of this.options){
      const el: HTMLElement = document.getElementById(square);
      el.className = null;
    }

    //set state to true
    this.state = true;
  
  }

  PlayAIMove(){
    //console.log('AI controlling x is '+this.xControlledbyAI);
    //console.log('AI controlling o is '+this.oControlledbyAI);
    if(this.state){
      if(this.CheckIfAIHasNextMove()){
        this.DetermineTurn();
        alert(this.turn);
        console.log('AI has next move');
        if(this.xControlledbyAI && this.xTurn){
          if(this.aiMove()){
            console.log('AI x made a move');
          };
        }else if(this.oControlledbyAI && !this.xTurn){
          if(this.aiMove()){
            console.log('AI o made a move');
          };
        }
        //this.sleep(30000);
        this.PlayAIMove();
      }else{
        console.log('user has next move');
      }
    }
  }

  CheckIfAIHasNextMove(): boolean{
    if(this.xControlledbyAI && this.xTurn ){
      return true;
    }else if(this.oControlledbyAI && !this.xTurn){
      return true;
    }
    return false;
  }

  DetermineTurn(){
    if(this.xTurn){
      this.turn = "It's X's turn";
    }else{
      this.turn = "It's O's turn";
    }
  }

  findWinner() : string {
    for (let value of Object.values(this.winningArrays)) {
      //alert(value);
      this.state = !this.arrayContainsWinningArray(value, this.xSquares);
      if(this.state == false){
        return "x's";
      }
      this.state = !this.arrayContainsWinningArray(value, this.oSquares);
      if(this.state == false){
        return  "o's";
      }
    }
    return "none";
  }

  detectStaleMate() : boolean{
    let staleMate: boolean = false;
    let moves = this.xSquares.length + this.oSquares.length;
    staleMate = (moves == 9)? true : false;
    if(staleMate){
      this.state = false;
    }
    return staleMate;
  }

  CheckStatus(event){
    //tell players status of squares and game
    var target = event.target || event.srcElement || event.currentTarget;
    var elementID = target.attributes.id.nodeValue;

    const el: HTMLElement = document.getElementById(elementID);
    //alert('working with element id:'+elementID);
    
    if(this.state == true){
      if(this.detectStaleMate()){
        this.status.nativeElement.innerHTML = "refresh and play again"
      }else if(el.className == 'xTurn' || el.className == 'oTurn'){
        this.status.nativeElement.innerHTML = 'this is '+el.className.substring(0,1)+"'s";
      }else{
        this.status.nativeElement.innerHTML = 'take it!';
      }
    }
  }

  assignSpot(id): boolean{
    //give square to x's or o's
    const el: HTMLElement = document.getElementById(id);
    //console.log(el.id+' being tested');
    let elementName = el.id;

    if(this.state == true){
      //true means game is still on
      if(this.CheckAvailability(el)){
        //update square mark
        el.className = (this.xTurn)?  'xTurn': 'oTurn';
        //console.log(elementName+"'s class is "+el.className)
        //add value to player's array
        if(this.xTurn){
          this.xSquares.push(id);
          console.log('x owns');
          console.log(this.xSquares);
        }else{
          this.oSquares.push(id);
          console.log('o owns');
          console.log(this.oSquares);
        }
        //determine game status
        if(this.findWinner() != "none"){
          alert(this.findWinner()+' wins!');
          this.status.nativeElement.innerHTML = "refresh and play again"
          return false;
        }else if(this.detectStaleMate()){
          alert('Stalemate!');
          this.status.nativeElement.innerHTML = "refresh and play again"
          return false;
        }else{
          this.status.nativeElement.innerHTML = 'owned';
          this.xTurn = !this.xTurn;
          this.PlayAIMove();
        }
        return true;
      }else{
        this.status.nativeElement.innerHTML = "This seat's taken";
        return false;
      }
    }else{
      return false;
    }
  }

  aiMove(): boolean{
    if(this.FindAndPlayThreats()){
      //console.log('AI played threat');
      return true;
    }
    if(this.Fork()){
      //console.log('AI forked');
      return true;
    }
    if(this.TakeCenterSquare()){
      //console.log('AI took center square');
      return true;
    }if(this.MustPlayOppositeCorner()){
      //console.log('AI played opposite corner');
      return true;
    }if(this.PlayEmptyCorner()){
      //console.log('AI played empty corner');
      return true;
    }
    else{
      for(let option of this.options){
        if(this.assignSpot(option)){
          //console.log('AI played random open space');
          return true;
        }
      }
    }
    

  }
  PlayEmptyCorner(): boolean{
    for(let corner of this.corners){
      if(this.assignSpot(corner)){
        return true;
      }
    }
    return false;
  }

  MustPlayOppositeCorner(): boolean{
    let opArray = (this.xTurn)? this.xSquares : this.oSquares;
    for(let corner of this.corners){
      if(opArray.indexOf(corner) !== -1){
        if(this.findAvailabilityofOppositeCorner(corner)){
          return true;
        }
      }
    }

    return false;
  }

  findAvailabilityofOppositeCorner(corner): boolean{
    let opposite: HTMLElement;
    if(corner == 'one'){
      if(this.assignSpot('nine')){
        return true;
      }
    }else if(corner == 'three'){
     if(this.assignSpot('seven')){
      return true;
    }
    }else if(corner == 'seven'){
      if(this.assignSpot('three')){
        return true;
      }
    }else if(corner == 'nine'){
      if(this.assignSpot('one')){
        return true;
      }
    }
    return false
  }

  TakeCenterSquare(): boolean{
    const el: HTMLElement = document.getElementById('five');
    if(this.assignSpot('five')){
      return true;
    }
    return false;
  }

  Fork(): boolean{
    let moves = this.xSquares.length + this.oSquares.length;
    if(moves > 3){
      //create two threats if possible
      let threatCombo : String[] = [];
      //examine values currently in player's array
      let myArray = (this.xTurn)? this.xSquares : this.oSquares;
      //determine if two or more values show up twice or more in set of winning arrays
      //then determine if the two or more spots needed to create threats for each combo are available
        if(this.FindForks(myArray)){
          //play the fork and return true
          return true;
        }
      return false;
    }
      return false;
  }



  FindForks(myArray): boolean{
    //determine if two or more values show up twice or more in set of winning arrays
    //Place id's of squares already owned in an array
    if(this.MultipleFromWinnersInMyArray(myArray).length > 0 ){
      //then determine if the two or more spots needed to create threats for each combo are available
      let forkMakers = this.MultipleFromWinnersInMyArray(myArray);
      if(this.ForkOptionsMakeFork(forkMakers).length > 0){
        this.assignSpot(this.ForkOptionsMakeFork);
        return true;
      }
    }
    return false;
  }

  FindAndPlayThreats() : boolean{
    let moves = this.xSquares.length + this.oSquares.length;
    //console.log(moves+' moves have been made');
    if(moves > 2){
      if(this.xTurn){
        // check opposite player's squares first'
        if(this.DetermineThreat(this.oSquares)){
          if(this.PlayThreat(this.oSquares)){
            return true;
          }
        }else if(this.DetermineThreat(this.xSquares)){
          if(this.PlayThreat(this.xSquares)){
            return true;
          }
        }
    }else{
        // check opposite player's squares first'
        if(this.DetermineThreat(this.xSquares)){
          if(this.PlayThreat(this.xSquares)){
            return true;
          }
        }else if(this.DetermineThreat(this.oSquares)){
            if(this.PlayThreat(this.oSquares)){
              return true;
            }
        }
        return false;
      }
    }
    return false;
  }

  DetermineThreat(playerArray){
    //console.log('searching for threats');
    //.log('winning arrays are');
      //console.log(this.winningArrays);
      for (let key in this.winningArrays) {
        let valueArray = this.winningArrays[key];
        //console.log(valueArray);
        this.threat = this.PlayerArrayContainsTwoFromWinners(playerArray, valueArray);
        if(this.threat == true){
            //console.log('threat determined');
            return true;
        }
    }
    //console.log('no threat');
    return false;
  }

  PlayThreat(playerArray): boolean{
    for (let key in this.winningArrays) {
      let valueArray = this.winningArrays[key];
        //iterate through winning combos looking for threats for whichever array is for current AI player
        this.threat = this.PlayerArrayContainsTwoFromWinners(playerArray, valueArray);
        if(this.threat == true){
            if(this.findMissingValueFromWinningCombo(valueArray,playerArray)){
              return true;
            }
        }
    }

    return false;
  }

  PlayerArrayContainsTwoFromWinners(needle: string[], haystack: string[]): boolean{
      
        //console.log('searching for');
        //console.log(needle);
        //console.log('in');
        //console.log(haystack);
      
    let count = 0;
    for(var i = 0; i < needle.length; i++){
      if(haystack.indexOf(needle[i]) !== -1){
        count++;
        //console.log(count+'matches found');
      }
    }
    if(count == 2){
      return true;
    }else{
      return false;
    }
  }

  findMissingValueFromWinningCombo(needle, haystack): boolean{
    for(var i = 0; i < needle.length; i++){
      if(haystack.indexOf(needle[i]) === -1){
        //play this value
        //alert('playing '+needle[i]);
        if(this.assignSpot(needle[i])){
          return true;
        }
      }
    }
    return false;
  }

  arrayContainsWinningArray(needle, haystack){
    for(var i = 0; i < needle.length; i++){
      if(haystack.indexOf(needle[i]) === -1)
        return false;
    }
    return true;
  }

  MultipleFromWinnersInMyArray(needle): String[]{
    let comboOptions: String[] = [];
    for (let value of Object.values(this.winningArrays)) {
      for(var i = 0; i < needle.length; i++){
        if(value.indexOf(needle[i]) !== -1){
          comboOptions.push(needle[i]);
        }
      }
    }
    if(comboOptions.length > 1){
      return comboOptions;
    }else{
      return [];
    }
  }

  ForkOptionsMakeFork(comboOptions){
    let ignoredValue;

    for(let i=0; i < comboOptions.length; i++){
      for(let j=i+1; j < comboOptions.length; j++){
        //create object to save array objects containing both comboOptions[i] and [j]
        //find out if i and j appear together in WinnningArrays object more than once
        let forkObjectValues: String[]; 
        for (let value of Object.values(this.winningArrays)) {
          //iterating through each winningArray object, search for matches to i and j
          for(let valueIndex = 0; valueIndex < value.length; value++){
            //valueIndex keeps track of the index being tested for i and j
            let matchFound = 0;
            let matchIndexes = [];
            if(value[valueIndex] == comboOptions[i] || value[valueIndex] == comboOptions[j] ){
              //when comboOption[i] or [j] matches a value in the winningArray object, add to number of matches
              //and store the value at valueIndex of winningArray object
              matchFound++;
              matchIndexes.push(value[valueIndex]);
            }
            if(value[valueIndex] != comboOptions[i] && value[valueIndex] != comboOptions[j] ){
              //when neither comboOption[i] or [j] matches a value in the winningArray object, set value as ignored Value
              ignoredValue = value[valueIndex];
              
            }
            if(matchFound > 1){
              //if i and j both matched, store unmatched value from winningArrays  
              forkObjectValues.push(ignoredValue)
              let forkOptions = [];
              for(let fOBIndex = 0; fOBIndex < forkObjectValues.length; fOBIndex++){
                if(forkOptions.indexOf(forkObjectValues[fOBIndex]) !== -1){
                  //if ignoredValue shows up twice for same i and j, play this value because it's the fork
                  return forkObjectValues[fOBIndex];
                }else{
                  forkOptions.push(forkObjectValues[fOBIndex])
                }
              }
            }
          }
        }
      }
    }

    return '';
  }

  CheckAvailability(element){
    if(element.className != 'oTurn' && element.className != 'xTurn'){
      //alert(element.id+" will be played");
      //console.log(element.id+" available");
    }
    return (element.className != 'oTurn' && element.className != 'xTurn');
  }

  UpdateChecked(e, marker){
    if(marker == 'x'){
      this.xAIChecked= e.target.checked;
      if(this.xAIChecked){
        this.xPlayer = 1;
      }else{
        this.xPlayer = 0;
      }
      this.aiPlayers = this.xPlayer + this.oPlayer;
      //console.log('xPLayer:'+this.xPlayer);
    }else if(marker == 'o'){
      this.oAIChecked= e.target.checked;
      if(this.oAIChecked){
        this.oPlayer = 1;
      }else{
        this.oPlayer = 0;
      }
      this.aiPlayers = this.xPlayer + this.oPlayer;
      //console.log('oPLayer:'+this.oPlayer);
    }else{
      //console.log('no marker found');
    }
    console.log(this.aiPlayers+' AI players in the game');
    
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    let sleepTime = milliseconds / 1000;

    //alert('sleeping for '+sleepTime+' seconds');
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

}

export class WinningArrays{
  //arrays for winning conditions
  topRow: object;
  midRow: object;
  botRow: object;
  firstCol: object;
  secondCol: object;
  thirdCol: object;
  topToBotDiagonal: object;
  botToTopDiagonal: object;
}
