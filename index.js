
  const userInformation = require('./information');
    
  const cowsay = require("cowsay");

console.log(cowsay.say({
    text : 
    (`Hi, my name is ${userInformation.firstName} and I'm from the ${userInformation.campus}`),
    e : "oO",
    T : "U "
}));

