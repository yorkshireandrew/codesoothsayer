var TITLE_BORDER_RADIUS_RATIO = 0.02;
var TITLE_FONT_SIZE_RATIO = 0.03;
var INTERVAL_SECS = 10;
var RANDOMNESS = 0.3;

var semi_random_index_generator = new SemiRandomIndexGenerator(content.length, RANDOMNESS);
var guru_image_picker = null;

class Content{
	constructor(selected_content){
		this.title = selected_content[0];
		this.text = selected_content[1];
		this.image_src = selected_content[2];
		this.text_on = selected_content[3];
		this.image_on = selected_content[4];		
	}
}

function apply_content(content){
	var title_element = document.getElementById("title");
	var text_element = document.getElementById("content");
	var image_element = document.getElementById("image");
	var guru_image_element = document.getElementById("guru_image");
	
	title_element.innerHTML = content.title;
	text_element.innerHTML = content.text;
	image_element.src = content.image_src;
	guru_image_element.src = guru_image_picker.guru_img_src_from_content(content)

	set_text_visibility(content.text_on);
	set_image_visiblity(content.image_on);
}

function set_text_visibility(value){
	var text_visibility_element = document.getElementById("content_visibility");
	if(value == true){
		text_visibility_element.display = "block-inline";
	}else{
		text_visibility_element.display = "none";
	}
}

function set_image_visiblity(value){
	var image_visibility_element = document.getElementById("image_visibility");	
	if(value == true){
		image_visibility_element.display = "block-inline";
	}else{
		image_visibility_element.display = "none";
	}	
}

function choose_content(){
	var index = semi_random_index_generator.next();
	var selected_raw_content = content[index];
	return new Content(selected_raw_content);
}

function resizeHandler(){
	/*var wh = window.innerHeight;*/
	var width = window.innerWidth;
	var title_style_css = borderRadiusCss(titleBorderRadiusForWidth(width));
	title_style_css += fontSizeCss(titleFontSizeForWidth(width));
    document.getElementById("title").style = title_style_css;
}

function titleBorderRadiusForWidth(width){
	return Math.floor(width * TITLE_BORDER_RADIUS_RATIO);
}

function titleFontSizeForWidth(width){
	return Math.floor(width * TITLE_FONT_SIZE_RATIO);
}

function borderRadiusCss(radius){
	return "border-radius: "+ radius+"px;"
}

function fontSizeCss(fontsize){
	return "font-size: " +fontsize+"px;"
}

function load() {
	resizeHandler();
	guru_image_picker = new GuruImagePicker();
	var l = semi_random_index_generator;
	console.log([l.next(),l.next(),l.next(),l.next(),l.next(),l.next(),l.next(),l.next(),l.next(),l.next()])
	var content_to_apply = choose_content();
	apply_content(content_to_apply);
}

window.onload = load;
window.addEventListener('resize', resizeHandler);