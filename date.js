//jshint esversion:6

exports.getDate = function (){
  let today = new Date();
let options = {
weekday:"long",
   day: "numeric",
   month: "long",

};
return today.toLocaleDateString("en-US", options); // M/D/YYYY

};

exports.getDay = function (){
  let today = new Date();
let options = {
weekday:"long",


};
return today.toLocaleDateString("en-US", options); // M/D/YYYY

};
console.log(module.exports);
