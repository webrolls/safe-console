export default class {
   	
   	constructor() {
		   this.arr = [];
		   console.log(' <==> ',console);
  	}

 	assert() {}

	clear() {}

	count() {}

	dir() {}

	dirxml() {}

	error() {}

	group() {}

	groupCollapsed() {}

	groupEnd() {}

	info() {}

	log(...logParam) {
		for(var i in arguments){
			try {
				console.log(arguments[i]);
			} catch (ex) {
				console.log('Breaking console.log ' + ex);
			}
	 	}
 	}

	profile() {}

	profileEnd() {}

	table() {}

	time() {}

	timeEnd() {}

	timeStamp() {}

	trace() {}

	warn() {}

	safeLog(obj, arr) {

		if(arr) {
			for(var i in arr) {
				try {
					console.log(arr[i] +' = ' + obj[arr[i]]);
				} catch (ex) {
					console.log('Breaking console.log ' + ex);
				}
		 	}
		} else {
				try {
					console.log('Object => '+JSON.stringify(obj));
				} catch (ex) {
					console.log('Breaking console.log ' + ex);
				}
		}

 	}

 	testing(str) {
		this.arr.push(str);
		window.arr = this.arr;
	}


};