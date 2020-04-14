class InputValidator{
	constructor(arrayOfInputs, success, error){
		this.arrayOfInputs = arrayOfInputs;
		this.success = success;
		this.error = error;
	}
	
	validate(){
		var array = this.arrayOfInputs;
		for(var i =0; i < array.length; ++i){
			var element = array[i];
			var value = element.value;
			try{
				value = parseFloat(value);
			}catch (e){
				this.error(element, value);
				return;
			}
			this.success(element,value);
		}

	}
}
