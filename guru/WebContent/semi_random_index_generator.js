class SemiRandomIndexGeneratorReduction {
	constructor(original_list){
		var index = Math.floor(Math.random() * original_list.length);
		this.selected = original_list[index];
		this.remaining = original_list.slice(0, index);
		if(index < original_list.length - 1)
		{
			this.remaining = this.remaining.concat(original_list.slice(index+1, original_list.length));
		}
	}
}

class PickedList {
	constructor(original_list, object_to_pick){
		var index = original_list.indexOf(object_to_pick);
		if(index >= 0){
			this.selected = original_list[index];
			this.remaining = original_list.slice(0, index);
			if(index < original_list.length - 1)
			{
				this.remaining = this.remaining.concat(original_list.slice(index+1, original_list.length));
			}
		}
		else{
			this.selected = null;
			this.remaining = original_list.slice(0, original_list.length);
		}
	}
}

class SemiRandomIndexGenerator{
	constructor(collection_size, randomness){
		var random_collection = this.randomise_array(this.filled_ordered_array(collection_size));
		var chomp_size = this.compute_chomp(collection_size, randomness);
		this.pool = random_collection.slice(0, chomp_size);
		this.stack = random_collection.slice(chomp_size, collection_size);
	}
	
	initialise_from_string(collection_size, randomness, input){
		var stack_size = collection_size - this.compute_chomp(collection_size, randomness);
		var random_collection = this.randomise_array(this.filled_ordered_array(collection_size));
		var stack = [];
		
		var parsed_input = this.parse_string(input);
		parsed_input.forEach(function(element){
			if(stack_size > 0){
				var picked_list = new PickedList(random_collection, element);
				random_collection = picked_list.remaining; 
				stack.push(element);
				stack_size = stack_size - 1;
			}
		});
		
		while(stack_size > 0){
			var reduction = new SemiRandomIndexGeneratorReduction(random_collection);
			stack.push(reduction.selected);
			random_collection = reduction.remaining;
			stack_size = stack_size - 1;
		}
		this.stack = stack;
		this.pool = random_collection;
	}
	
	parse_string(input){
		bits = input.split(",");
		var result = [];
		bits.forEach(function(element){result.push(ParseInt(element))})
		return result;
	}
	
	next(){
		var retval = this.stack.shift();
		var reduction = new SemiRandomIndexGeneratorReduction(this.pool);
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
			var reduction = new SemiRandomIndexGeneratorReduction(available);
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
