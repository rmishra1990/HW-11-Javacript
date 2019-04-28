// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

function teamRoster(person) {
    return person.madeTeam === true;
  }

  // filter() uses the custom function as its argument
var teamPlayers = roster.filter(teamRoster);

// Test
console.log(teamPlayers);

var numPlayers = teamPlayers.length;
var numCutPlayers = roster.length - numPlayers;

console.log(`${numPlayers} players made the team`)
console.log(`${numCutPlayers} players were cut`)