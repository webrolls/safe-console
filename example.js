
import SafeConsole from './src/index.js';

var c = new SafeConsole();

var temp = {
	a: 'stringValue',
	b: null
};
 
c.safeLog(temp);	
console.log('Print temp Object from console log() => ' , temp); 

c.testing('store the log global object using console testing method! ');

 
