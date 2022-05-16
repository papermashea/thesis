//// ORDER OF OPERATIONS
// export csv from ftgu_plantsTable.xlxs ==> plantsTable.csv
// (fastest) convert csv to json ==> plantsTable.json
// run node cleanup.js for cleaned plants ==> plants.json

var fs = require('fs');

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
			butterinsects: "butterflies/moths",
			lepidoptera: "butterflies/moths",
			moths: "butterflies/moths"
		}

		var ace = {
			cleistogamy: "asexual/self",
			cleistogamous: "asexual/self",
			cleistogomous: "asexual/self",
			cleistogomy: "asexual/self",
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
			hymenoptera: "insects",
			insects: "insects",
			flies: "insects",
			beetles: "insects"
		}

		var plantObject = {
			value: cData.edibilityrating,
			id: cData.latinID.toLowerCase(),
			family: cData.family,
			latinname: cData.latinname,
			commonname: cData.commonname,
			synonyms: cData.synonyms,
			range: cData.range.replace(/ *\[[^\]]*]/g, '').replace("?", "").replace(/(\r\n|\n|\r)/gm, ""),
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
			height: parseFloat(cData.height).toFixed(2).replaceAll('NaN', ""),
			width: parseFloat(cData.width).toFixed(2).replaceAll('NaN', ""),
			size: cData.size.toLowerCase().replaceAll('#n/a', ""),
			hardiness: parseInt(cData.hardinessmap),
			hardinessuse: cData.hardinessuse.toLowerCase(),
			habitat: cData.habitat.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			habitatcite: cData.habitat.match(/(?<=\[).+?(?=\])/g),
			growth: cData.growth.toLowerCase().replaceAll('unknown', "").trim(),
			flowerstart: cData.flowerstart,
			flowerstartmonth: cData.flowerstartmonth.toLowerCase(),
			flowerend: cData.flowerend,
			flowerendmonth: cData.flowerendmonth.toLowerCase(),
			seedstart: cData.seedstart,
			seedstartmonth: cData.seedstartmonth.toLowerCase(),
			seedend: cData.seedend,
			seedendmonth: cData.seedendmonth.toLowerCase(),
			proptype: cData.proptype.toLowerCase().trim().replaceAll('stratified seed', 'pretreated seed').replaceAll('scarify seed', 'pretreated seed').replaceAll('cold frame', 'pretreated seed').replaceAll('presoaked seed', 'pretreated seed'),
			propdetails: cData.propdetails.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, "").replaceAll("\ufffd"," degrees"),
			propcite: cData.propdetails.match(/(?<=\[).+?(?=\])/g),
			cultivationdetails: cData.cultivationdetails.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, "").replaceAll("\ufffd"," degrees"),
			cultivationcite: cData.cultivationdetails.match(/(?<=\[).+?(?=\])/g),
			pollinators: cData.pollinators.toLowerCase().replaceAll('5 - 6',"").replaceAll('7',"").replaceAll('?',"").replaceAll("wasps","bees").replaceAll("bumblebees","bees").replaceAll('carrion','').replaceAll('hover-flies','insects').replaceAll('s,b','s, b').replace(/cleistogamy|cleistogomy|cleistogamous|cleistogomous|apomictic|apomixy|apomixis|dryoptera|self/gi, function(matched){
      			return ace[matched];}).replace(/midges|hoverflies|diptera|hymenoptera|insects|flies|beetles/gi, function(matched){
      			return insects[matched];}).replace(/butterflies|butterinsects|moths|lepidoptera/gi, function(matched){
      			return lepidoptera[matched];}).trim().split(", "),
			flowertype: cData.flowertype.toLowerCase(),
			scent: cData.scented.toLowerCase(),
			aromatic: cData.aromatic,
			woodland: cData.woodland,
			meadow: cData.meadow,
			sun: cData.sun.toLowerCase().split(", "),
			soil: cData.soil.toLowerCase().split(", "),
			moisture: cData.moisture.toLowerCase().split(", "),
			ph: cData.ph.toLowerCase().split(", "),
			tolerancesbool:{
				pollution: cData.pollution,
				wind: cData.wind,
				poorsoil: cData.poorsoil,
				drought: cData.drought,
				frosttender: cData.frosttender,
				},
			tolerances: [ ...(cData.pollution ? ["pollution"] : ""), ...(cData.wind ? ["wind"] : ""), ...(cData.poorsoil ? ["poor soil"] : ""), ...(cData.drought ? ["drought"] : ""), ...(cData.frosttender ? [""] : ["frost"])],
			usefulness: cData.edibilityrating+cData.medicinalrating+cData.materialrating,
			weightedusefulness: cData.usefulness,
			edibleuses: cData.edibleuses.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			ediblecite: cData.edibleuses.match(/(?<=\[).+?(?=\])/g),
			ediblerating: cData.edibilityrating,
			medicinaluses: cData.medicinal.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			medicinalcite: cData.medicinal.match(/(?<=\[).+?(?=\])/g),
			medicinalrating: cData.medicinalrating,
			materialuses: cData.materialuses.replace(/ *\[[^\]]*]/g, '').replace(/(\r\n|\n|\r)/gm, ""),
			materialcite: cData.materialuses.match(/(?<=\[).+?(?=\])/g),
			materialrating: cData.materialrating,
			indigenoususe: cData.indigenoususe,
			hazards: cData.knownhazards.toLowerCase().replace(/ *\[[^\]]*]/g, ''),
			hazardscite: cData.knownhazards.match(/(?<=\[).+?(?=\])/g),
			img: cData.imgthb,
			imgthb: cData.imgthb,
			imglink: cData.imglink,
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