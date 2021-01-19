// const testVar = {}

// function testFunc() {
//   return "hi"
// }


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
] 

// function superbowlWin(argument){
//   // console.log("this is the argument", argument)
//   argument.find
//   argument.forEach(e => console.log(e.result));

// }

// function superbowlWin(record){
//   record.find( function(s) { 
//     console.log("this is each iteration", s)
//     return s.result === "W" })

// }

function superbowlWin(record){
  if (record.find( function(s) { return s.result === "W" })){
    return record.find( function(s) { return s.result === "W" }).year
  } else {
    return undefined
  }
}