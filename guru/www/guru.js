var TITLE_BORDER_RADIUS_RATIO = 0.02;
var TITLE_FONT_SIZE_RATIO = 0.03;
var SECTION_FONT_SIZE_RATIO = 0.0125;
var INTERVAL_SECS = 5*60;
var RANDOMNESS = 0.3;

var semi_random_index_generator = new SemiRandomIndexGenerator(content.length, RANDOMNESS);
var guru_image_picker = null;
var timer = null;

class Content{
	constructor(selected_content){
		this.section = selected_content[0];
		this.title = convert_to_html(selected_content[1]);
		this.text = selected_content[2];
		this.image_src = selected_content[3];
		
		// escape HTML if flag is set
		if(selected_content[4])this.text = convert_to_html(this.text);
		
		this.text_on = selected_content[5];
		this.image_on = selected_content[6];		
	}
}

function apply_content(content){
	var section_element = document.getElementById("section");
	var title_element = document.getElementById("title");
	var text_element = document.getElementById("content");
	var image_element = document.getElementById("image");
	var guru_image_element = document.getElementById("guru_image");
	
	section_element.innerHTML = content.section;
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
		text_visibility_element.style = "display:block-inline";
	}else{
		text_visibility_element.style = "display:none";
	}
}

function set_image_visiblity(value){
	var image_visibility_element = document.getElementById("image_visibility");	
	if(value == true){
		image_visibility_element.style = "display:block-inline";
	}else{
		image_visibility_element.style = "display:none";
	}	
}

function choose_content(){
	var selected_raw_content = undefined;
	while(selected_raw_content == undefined){
		var index = semi_random_index_generator.next();
		selected_raw_content = content[index];
	}
	return new Content(selected_raw_content);
}

function resizeHandler(){
	/*var wh = window.innerHeight;*/
	var width = window.innerWidth;
	
	var bubble_style_css = borderRadiusCss(titleBorderRadiusForWidth(width));
	bubble_style_css += paddingCss(titleBorderRadiusForWidth(width));
    document.getElementById("bubble").style = bubble_style_css;
    
	var titlebar_outer_style_css = borderRadiusCss(titleBorderRadiusForWidth(width));
	titlebar_outer_style_css += paddingCss(titleBorderRadiusForWidth(width)/2);
    document.getElementById("titlebar_outer").style = titlebar_outer_style_css;
    
    var title_style_css = fontSizeCss(titleFontSizeForWidth(width));
    document.getElementById("title").style = title_style_css;
    
    var section_style_css = fontSizeCss(sectionFontSizeForWidth(width));
    document.getElementById("section").style = section_style_css;
    
	var content_style_css = borderRadiusCss(titleBorderRadiusForWidth(width));
	content_style_css += paddingCss(titleBorderRadiusForWidth(width));
    document.getElementById("content").style = content_style_css;   
}

function titleBorderRadiusForWidth(width){
	var size = Math.floor(width * TITLE_BORDER_RADIUS_RATIO);
	if(size < 10)return 10;
	return size;
}

function titleFontSizeForWidth(width){
	var size = Math.floor(width * TITLE_FONT_SIZE_RATIO);
	if(size < 10)return 10;
	return size;
}

function sectionFontSizeForWidth(width){
	var size = Math.floor(width * SECTION_FONT_SIZE_RATIO);
	if(size < 10)return 10;
	return size;
}

function borderRadiusCss(radius){
	return "border-radius: "+ radius+"px;"
}

function paddingCss(padding){
	return "padding: "+ padding+"px;"
}

function fontSizeCss(fontsize){
	return "font-size: " +fontsize+"px;"
}

function replace_all(target, replacement, text){
	var previous = "";
	var current = text;
	while(previous != current){
		previous = current;
		current = current.replace(target, replacement);
	}
	return current;
}

function convert_to_html(text){
	var result = replace_all("&", "<<oh_got_an_ampersand>>", text);
	result = replace_all("<<oh_got_an_ampersand>>", "&amp;", result);
	result = replace_all("'", "&apos;", result);
	result = replace_all("\"", "&quot;", result);
	result = replace_all(">", "&gt;", result);
	result = replace_all("<", "&lt;", result);
	result = result.replace(/(?:\r\n|\r|\n)/g, '<br />');
	return result;	
}

function valid_content(){
	if(content == undefined){console.log("content is undefined"); return false;}
	var valid = true;
	content.forEach(function(element){
		if(element.length != 7){
			console.log("ERROR (" + element[1] + ") content is incorrect its length is " + element.length);
			valid = false;
		}
	})
	return valid;
}

function change(){
	var content_to_apply = choose_content();
	apply_content(content_to_apply);
	
	var cookie = semi_random_index_generator.as_string();	
	setCookie("semi_random_index_generator", cookie, 1);
	
	timer = setTimeout(change, INTERVAL_SECS * 1000);
}

function load() {
	resizeHandler();
	if(!valid_content())return;
	
	guru_image_picker = new GuruImagePicker();
	
	semi_random_index_generator_cookie = getCookie("semi_random_index_generator");
	
	if(semi_random_index_generator_cookie == null){
		var cookie = semi_random_index_generator.as_string();	
		setCookie("semi_random_index_generator", cookie, 1);
	}
	else
	{
		semi_random_index_generator.initialise_from_string(content.length, RANDOMNESS, semi_random_index_generator_cookie);
		
		// If the generator looks sick create new generator
		if(semi_random_index_generator.stack == undefined){
			semi_random_index_generator = new SemiRandomIndexGenerator(content.length, RANDOMNESS);
		}
		if(semi_random_index_generator.stack.length == 0){
			semi_random_index_generator = new SemiRandomIndexGenerator(content.length, RANDOMNESS);
		}
	}

	var content_to_apply = choose_content();
	apply_content(content_to_apply);
	
	if(timer == null)timer = setTimeout(change, INTERVAL_SECS * 1000);
}

window.onload = load;
window.addEventListener('resize', resizeHandler);