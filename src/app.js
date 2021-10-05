//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function createFormation(formation)
{
 let ar=
   {
     defender:formation[0],midfeild:formation[1],forward:formation[2]
   }
   return ar
 
}


//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut( year)
{
  var arr=[]
  let x=0
  for(const player of players) {
    if(player.debut === year)
    arr[x++] = player

  }
  return arr;

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{
  var arr=[]
  let x=0
  for(const player of players)
  {
    if(player.position===position)
    arr[x]=player
    x++
  }
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award)
{
  var arr=[]
  let x=0
  for(const player of players)
  {
    if(player.award===award)
    arr[x]=player
    x++
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var awardWon= []
  var count=0
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i]['awards'].length;j++){
      if(players[i]['awards'][j]['name']==awardName){
        count+=1
        if(count==noOfTimes){awardWon.push(players[i])}
      }
    }
    count=0
  }
  return awardWon
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country)
{
  var arr=[]
  var x=0;
  for(let i=0;i<players.length;i++)
  {
   let count=0
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        count++
      }
    }
    if(count!=0 && players[i]["country"]===country)
    {
      arr[x]=players[i]
      x++
    }
  }
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(times, team, age)
{
  var arr=[]
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["awards"].length>=times && players[i]["team"]===team && players[i]["age"]<age)
    {
      arr[x]=players[i];
      x++
    }
  }
  return arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
