var lux = {
	'name' : ["Classic Lux", "Sorceress Lux", "Spellthief Lux", "Commando Lux", "Imperial Lux", "Steel Legion Lux", "Star Guardian Lux", "Elementalist Lux"],
	'image' : ["images/Lux_0.jpg","images/Lux_1.jpg", "images/Lux_2.jpg","images/Lux_3.jpg","images/Lux_4.jpg","images/Lux_5.jpg","images/Lux_6.jpg","images/Lux_7.jpg"]
}





function main() {
 
}

function randomize() {
	var selected = Math.floor(Math.random() * 9);
	$(".tester").text(selected);
	$(".skin-name").text(lux['name'][selected]);
	$("#image").attr("src",lux['image'][selected]);
}