/**
 * Picks a guru image based on a guru content item
 */

class GuruImagePicker {
	constructor(){
		var guru_max = 0;
		gurus.forEach(function(element){
			guru_max = guru_max + element[1]; 
		});
		this.guru_max = guru_max;
	}
}