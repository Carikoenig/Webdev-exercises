// Exercise at end of video from https://www.youtube.com/watch?v=PFmuCDHHpwk

// C    onstructor function
function Stopwatch() {
    
    let duration = 0;
    //for debugging
    let begintimer = Date.now();
    let stoppedtimer = Date.now();
    let startedtimer = Date.now();
    this.start = function(){
        // check whether time has ever been stopped before, 
        // if not keep old startedtimer time 
        // WHY: prevent people calling start after it already started and resetting the actual beginning to a delayed beginning time
        if (startedtimer >= stoppedtimer){
            throw new Error("Stopwatch has already been started Before.");
        } else{
            startedtimer = Date.now();
        }
        
    },
    
    this.stop = function(){
        // prevent multiple stops after each other, uselessly overwriting the previous stop times although alreads stopped
        if(!(stoppedtimer>startedtimer)){
            stoppedtimer = Date.now();
            duration = duration + (stoppedtimer - startedtimer);
        } else{
            throw new Error("Stopwatch has already been stopped Before.");
        }
    }

    this.reset = function(){
        duration = 0;
        stoppedtimer = Date.now();
        startedtimer = Date.now();
    }
    // getter 
    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        }
    });
};





// Debugging code:


// create instance of a stopwatch object
//const sw = new Stopwatch();
/*
console.log(sw);
console.log(`Begintimer: ${sw.begintimer}`);
console.log(`Stoppedtimer: ${sw.stoppedtimer}`);
console.log(`Startedtimer: ${sw.startedtimer}`);
console.log(`duration: ${sw.duration}`);

//wait 5 sec until start()/stop() is called
//setTimeout(() => { sw.start(); console.log(`time at start() after 5 sec wait: ${Date.now()}`); }, 5000);
setTimeout(() => { sw.stop(); console.log(`Last duration: ${sw.duration}`); }, 5000);

// Javascript asynchronous ... executes this before finishing the 5 sec wait above
// needs to be put inside setTimeout()
//console.log(`Last duration: ${sw.duration}`);
*/