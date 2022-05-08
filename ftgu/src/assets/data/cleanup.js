//// ORDER OF OPERATIONS
// export csv from ftgu_plantsTable.xlxs ==> plantsTable.csv
// (fastest) convert csv to json ==> plantsTable.json
// run node cleanup.js for cleaned plants ==> plants.json

var fs = require('fs');

// function createObject(){
// 	csv = fs.readFileSync("plantsTable.csv")
// 	var array = csv.toString().split("\r");
// 	let result = [];
// 	let headers = array[0].split(", ")

// 	for (let i = 1; i < array.length - 1; i++) {
// 	  let obj = {}

// 	  let str = array[i]
// 	  let s = ''

// 	  let flag = 0
// 	  for (let ch of str) {
// 	    if (ch === '"' && flag === 0) {
// 	      flag = 1
// 	    }
// 	    else if (ch === '"' && flag == 1) flag = 0
// 	    if (ch === ', ' && flag === 0) ch = '|'
// 	    if (ch !== '"') s += ch
// 	  }

// 	  let properties = s.split("|")

// 	  for (let j in headers) {
// 	    if (properties[j].includes(", ")) {
// 	      obj[headers[j]] = properties[j]
// 	        .split(", ").map(item => item.trim())
// 	    }
// 	    else obj[headers[j]] = properties[j]
// 	  }

// 	  result.push(obj)
// 	}

// 	let json = JSON.stringify(result);
// 	fs.writeFileSync('plantsTableTest.json', json);
// }

var plants = [];

function createPlants() {
	let json = fs.readFileSync('plantsTable.json')
	let plantData = JSON.parse(json)

	// console.log(jsonData)
	// console.log(plantData)

	var cleanData = plantData.map( function (cData){

		var nonvasc = {
			fern: "fern/moss/lichen",
			lichen: "fern/moss/lichen",
			moss: "fern/moss/lichen"
		}

		var bulb = {
			bulb: "bulb/corm",
			corm: "bulb/corm"
		}

		var grass = {
			grass: "grass/bamboo",
			bamboo: "grass/bamboo"
		}

		var lepidoptera = {
			butterflies: "butterflies/moths",
			lepidoptera: "butterflies/moths",
			moths: "butterflies/moths"
		}

		var ace = {
			cleistogamy: "asexual/self",
			cleistogamous: "asexual/self",
			cleistogomous: "asexual/self",
			cleistogamy: "asexual/self",
			apomixis: "asexual/self",
			apomixy: "asexual/self",
			apomictic: "asexual/self",
			self: "asexual/self",
			dryoptera: "asexual/self"
		}
		
		var insects = {
			midges: "insects",
			hoverflies: "insects",
			diptera: "insects",
			hymenoptera: "insects"
		}

		var plantObject = {
			value: cData.edibilityrating,
			id: cData.latinID.toLowerCase(),
			family: cData.family,
			latinname: cData.latinname,
			commonname: cData.commonname,
			synonyms: cData.synonyms,
			range: cData.range.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			type: cData.type.toLowerCase().replace('+', '/').replaceAll('annual climber', 'climber').replace('perennial climber', 'climber').replace(/bulb|corm/gi, function(matched){
      			return bulb[matched];}).replace(/fern|lichen|moss/gi, function(matched){
      			return nonvasc[matched];}).replace(/grass|bamboo/gi, function(matched){
      			return grass[matched];}),
			group: cData.type.toLowerCase().replaceAll('annual climber', 'climber').replace('perennial climber', 'climber').replace(/bulb|corm/gi, function(matched){
      			return bulb[matched];}).replace(/fern|lichen|moss/gi, function(matched){
      			return nonvasc[matched];}).replace(/grass|bamboo/gi, function(matched){
      			return grass[matched];}).split("+"),
			season: cData.timeframe,
			leaftype: cData.leaftype,
			height: cData.height,
			width: cData.width,
			size: cData.size.toLowerCase().replaceAll('#n/a', ""),
			hardiness: parseInt(cData.hardinessmap),
			hardinessuse: cData.hardinessuse.toLowerCase(),
			habitat: cData.habitat.toLowerCase().replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			growth: cData.growth.toLowerCase().replaceAll('unknown', "").trim(),
			flowerstart: cData.flowerstart,
			flowerstartMonth: cData.flowerstartmonth.toLowerCase(),
			flowerend: cData.flowerend,
			flowerendmonth: cData.flowerendmonth.toLowerCase(),
			seedstart: cData.seedstart,
			seedstartmonth: cData.seedstartmonth.toLowerCase(),
			seedend: cData.seedend,
			seedendmonth: cData.seedendmonth.toLowerCase(),
			proptype: cData.proptype.toLowerCase().trim().replaceAll('stratified seed', 'pretreated seed').replaceAll('scarify seed', 'pretreated seed').replaceAll('cold frame', 'pretreated seed').replaceAll('presoaked seed', 'pretreated seed'),
			propdetails: cData.propdetails.toLowerCase().replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			cultivationdetails: cData.cultivationdetails.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			pollinators: cData.pollinators.toLowerCase().replaceAll('5 - 6',"").replaceAll('7',"").replaceAll('?',"").replaceAll("bumblebees","bees").replaceAll("wasps","bees").replaceAll('carrion',"").replaceAll('s,b','s, b').replaceAll(' flies',' insects').replaceAll('hover-flies','insects').replace(/cleistogamy|cleistogomy|cleistogamous|cleistogomous|apomictic|apomixy|apomixis|dryoptera|self/gi, function(matched){
      			return ace[matched];}).replace(/butterflies|moths|lepidoptera/gi, function(matched){
      			return lepidoptera[matched];}).replace(/midges|hymenoptera|hoverflies|diptera/gi, function(matched){
      			return insects[matched];}).trim().split(", "),
			flowertype: cData.flowertype.toLowerCase(),
			scent: cData.scented.toLowerCase(),
			aromatic: cData.aromatic,
			woodland: cData.woodland,
			meadow: cData.meadow,
			sun: cData.sun.toLowerCase().split(", "),
			soil: cData.soil.toLowerCase().split(", "),
			moisture: cData.moisture.toLowerCase().split(", "),
			ph: cData.ph.toLowerCase().split(", "),
			wind: cData.wind,
			pollution: cData.pollution,
			poorsoil: cData.poorsoil,
			drought: cData.drought,
			frosttender: cData.frosttender,
			selffertile: cData.selffertile,
			nitrogenfixer: cData.nitrogenfixer,
			wildlife: cData.wildlife,
			usefulness: cData.usefulness,
			materialuses: cData.materialuses.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			materialrating: cData.materialrating,
			edibleuses: cData.edibleuses.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			edibilityrating: cData.edibilityrating,
			medicinaluses: cData.medicinal.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			medicinalrating: cData.medicinalrating,
			indigenoususe: cData.indigenoususe,
			knownhazards: cData.knownhazards.toLowerCase().replace(/ *\[[^\]]*]/g, ''),
			img: cData.imgthb,
			imgthb: cData.imgthb,
			imglink: cData.imgid,
			imgcreator: cData.imgcreator,
			usda: cData.usda,
			usdalink: cData.usdalink,
			pfaflink: cData.pfaflink,
			wslink: cData.wikispecieslink,
			ovlink: cData.openverselink,
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
// createObject();
createPlants();