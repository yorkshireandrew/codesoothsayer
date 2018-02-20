/**
 * Picks a pseudo-random guru image
 * chosen deterministically by the content
 * which guru is picked can be weighted
 */

class GuruImagePicker {
	constructor(){
		var guru_max = 0;
		gurus.forEach(function(element){
			guru_max = guru_max + element[1]; 
		});
		this.guru_max = guru_max;
	}
	
	guru_img_src_from_content(content){
		var picking_number = this.number_from_content(content) % this.guru_max;
		for(var x = 0; x < gurus.length; x++){
			var guru = gurus[x];
			picking_number = picking_number - guru[1];
			if(picking_number < 0){
				return guru[0];
			}
		}
		var guru = gurus[0]; // should never get here
		return guru[0];	
	}
	
	number_from_content(content){
		var result = content.title.length; // title
		var result = result + content.text.length; // content text
		var result = result + content.image_src.length; // img src length
		return result;
	}
}