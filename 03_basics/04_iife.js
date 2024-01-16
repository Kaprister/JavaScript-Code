// Immediately invoked function Expression (IIFE)


(function chai(){
    // named iife
    console.log("DB CONNECTED!");
})();

// chai()

// iife syntax
// ()()

( () => {
    console.log('DB CONNECTED TWO!');
} )();

( function aurcode() {
    console.log('DB CONNECTED THREE!');
} )();


( (name) => {
    console.log(`DB CONNECTED TWO! ${name}`);
} )('sushant');