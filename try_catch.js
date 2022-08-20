console.log(
    "hey gayu!!!!!"
);

// catch=> agar error agaya to ye karo
// try=> koshish karo error handle karne kig

// hum try catch use krte hai error handling ke lie so "catch" errors so the script can do something more reasonable instead of stopping.

// pretend this is coming from a server as response


let a="hey dude!!!!!";

a=undefined;
if(a!=undefined){
    throw new Error('this is not undefined')
}
else{
    console.log('this is defined');
}

try {
    // null.console
    console.log('we are inside try block');
    functionGayatri()
} catch (error) {
    console.log(error);
    console.log('are you okay???');
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('finally we will run this');
}