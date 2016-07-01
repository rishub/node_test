var fs = require("fs");



function mergeValues(values, content) {
	//Cycle over the keys
	for(var key in values) {
		//Replace all {{key}} with value from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}

	return content;
}




function view(template_name, values, response) {

	//Read from the template file
	// fs.readFile('./views/' + template_name + '.html', (err, data) => {
	//   	if (err) throw err;
	//   	//Insert values into the content

	//   	//Write out to the response
	// 	reponse.write(data);
	// });

	//Read from the template file
	var data = fs.readFileSync('./views/' + template_name + '.html', {encoding: "utf8"});

	//Insert values into the content
	data = mergeValues(values, data)

	//Write out to the response
	response.write(data);

}

module.exports.view = view;