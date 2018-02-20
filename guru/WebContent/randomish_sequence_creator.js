class LessRandomIndexGeneratorReduction {
	constructor(original_list){
		var index = Math.floor(Math.random() * original_list.length);
		this.selected = original_list[index];
		this.remaining = original_list.slice(0, index);
		if(index < original_list.length - 1)
		{
			this.remaining = this.remaining.concat(original_list.slice(index+1, original_list.Length));
		}
	}
}

class LessRandomIndexGenerator{
	constructor(collection_size, randomness){
		var random_collection = this.randomise_array(this.filled_ordered_array(collection_size));
		var chomp_size = this.compute_chomp(collection_size, randomness);
		this.pool = random_collection.slice(0, chomp_size);
		this.stack = random_collection.slice(chomp_size, collection_size);
	}
	
	next(){
		var retval = this.stack.shift();
		var reduction = new LessRandomIndexGeneratorReduction(this.pool);
		this.pool = reduction.remaining;
		this.pool.push(retval);
		this.stack.push(reduction.selected);
		return retval;
	}
	
	filled_ordered_array(sequence_length){
		var retval = [];
		for(var x = 0; x < sequence_length; x++){
			retval.push(x);
		}
		return retval;
	}
	
	randomise_array(available){
		var retval = [];
		while(available.length > 0){
			var reduction = new LessRandomIndexGeneratorReduction(available);
			retval.push(reduction.selected);
			available = reduction.remaining;
		}
		return retval;	
	}
	
	compute_chomp(collection_size, randomness){
		var proposed_chomp = Math.floor(collection_size * randomness);
		if(proposed_chomp > 0) return proposed_chomp;
		return 1;
	}
}
