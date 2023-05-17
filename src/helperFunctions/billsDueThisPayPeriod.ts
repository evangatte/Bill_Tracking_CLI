import input from "./input.js";
import { readJson, writeJson } from "./readWriteFile.js";



/*** Incomplete ***/


//returns an array of everyfriday of the month
function getFridaysArr() {
	var d = new Date(),
	  month = d.getMonth(),
	  fridays = [];
  
	d.setDate(1);
	// Get the first Friday in the month
	while (d.getDay() !== 5) {
	  d.setDate(d.getDate() + 1);
	}
  
	// Get all the other Fridays in the month
	while (d.getMonth() === month) {
	  var pushDate = new Date(d.getTime());
	  fridays.push(pushDate.getDate());
	  d.setDate(d.getDate() + 7);
	}
  
	return fridays;
  }


export function billsDueThisPayPeriod() {

	const fridays = getFridaysArr();
	console.log(fridays);
//	const data: any = readJson();
//
//
//	const billsDueArray = [];
//	console.log(data);
}
