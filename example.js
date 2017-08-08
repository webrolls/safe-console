
import SafeConsole from './src/index.js';

var c = new SafeConsole();

var temp = {
	a: 'kaleem',
	b: null
};
 
	c.safeLog(temp);	
	console.log(temp); 

	c.testing(function(){
		console.log('======>',temp.c);
	});

 