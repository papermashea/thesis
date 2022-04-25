//// ORDER OF OPERATIONS
// export csv from ftgu_plantsTable.xlxs ==> plantsTable.csv
// (optional) convert csv to json ==> plantsTable.json
// run node cleanup.js for cleaned plants ==> plants.json

var fs = require('fs');

var plants = [];

function createPlants() {
	let json = fs.readFileSync('plantsTable.json')
	let plantData = JSON.parse(json)

	// console.log(jsonData)
	// console.log(plantData)

	var cleanData = plantData.map( function (cData){

		var plantObject = {
			value: cData.edibilityrating,
			id: cData.latinname.replace(/\s/g, ''),
			family: cData.family,
			latinname: cData.latinname,
			commonname: cData.commonname,
			synonyms: cData.synonyms,
			range: cData.range,
			type: cData.type,
			season: cData.timeframe,
			leaftype: cData.leaftype,
			height: cData.height,
			width: cData.width,
			size: cData.size,
			hardiness: cData.hardiness,
			hardinessUse: cData.hardinessUse,
			habitat: cData.habitat.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			growth: cData.growth,
			flowerstart: cData.flowerstart,
			flowerstartMonth: cData.flowerstartMonth,
			flowerend: cData.flowerend,
			flowerendmonth: cData.flowerendmonth,
			seedstart: cData.seedstart,
			seedstartmonth: cData.seedstartmonth,
			seedend: cData.seedend,
			seedendmonth: cData.seedendmonth,
			proptype: cData.proptype,
			propdetails: cData.propdetails,
			cultivationdetails: cData.cultivationdetails.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			pollinators: cData.pollinators.split(", "),
			flowertype: cData.flowertype,
			scent: cData.scent,
			aromatic: cData.aromatic,
			woodland: cData.woodland,
			meadow: cData.meadow,
			soil: cData.soil.split(", "),
			shade: cData.shade.split(", "),
			sun: cData.sun.split(", "),
			moisture: cData.moisture.split(", "),
			ph: cData.ph.split(", "),
			wind: cData.wind,
			pollution: cData.pollution,
			poorsoil: cData.poorsoil,
			drought: cData.drought,
			frosttender: cData.frosttender,
			selffertile: cData.selffertile,
			nitrogenfixer: cData.nitrogenfixer,
			wildlife: cData.wildlife,
			usefulness: cData.usefulness,
			materialuses: cData.usesnotes.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			materialrating: cData.materialrating,
			edibleuses: cData.edibleuses.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			edibilityrating: cData.edibilityrating,
			medicinaluses: cData.medicinal.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			medicinalrating: cData.medicinalrating,
			indigenoususe: cData.indigenoususe,
			knownhazards: cData.knownhazards.replace(/ *\[[^\]]*]/g, ''),
			imgid: cData.imgid,
			imgtitle: cData.imgtitle,
			imgcreator: cData.imgcreator,
			imgthb: cData.imgthb,
			}
	        return plantObject;
		});


      plants.push(cleanData);
      plants = [].concat(...plants);
      console.log(plants)

    setTimeout(() => {
		fs.writeFileSync("plants.json", JSON.stringify(plants))
    }, 5000)
}

// calling our functions
createPlants();