var openingHours = {
	monday: [
		{ begin:"10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	tuesday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	wednesday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	thursday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	friday: [],
	saturaday: [],
	sunday: [],
}

var daysSelected = {
	monday: true,
	tuesday: true,
	wednesday: true,
	thursday: true,
	friday: false,
	saturday: false,
	sunday: false,
}
var hoursToAdd = { begin: "19:00", end: "23:00" }

function add(daysSelected, hoursToAdd)
{
		for (let day in daysSelected)
			if (daysSelected[day])
				openingHours[day].push(hoursToAdd);
}
/*
function amelioration2(daysSelected, hoursToAdd)
{
		for (day in openingHours)
		{
			let k = 0;

			while (k <= 1)
			{
				var get = new Date();	
				var regexopen = get.getHours.openingHours.monday[k].begin;
				var regexhour = get.getHours.hoursToAdd.begin
				for (l in regexopen)
					if (regexopen[l] != regexhour[k])
					{
						console.log(regexopen[l]);
						console.log("Des horraires se chevauche impossible d'ajouter de novelle horraire")
					}
					k++;
			}
		}
}
*/


add(daysSelected, hoursToAdd);
console.log(openingHours);
//amelioration2(daysSelected, hoursToAdd);

//var get = new Date();	
//var regexopen = get.getHours(openingHours.monday[0].begin);
//console.log(regexopen);