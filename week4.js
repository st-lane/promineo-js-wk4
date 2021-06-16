/* ---------------------
// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
----------------------- */
function getFN(fname, lname){
    return `${fname} ${lname}`;
}
console.log("getFN: ", getFN("Jim", "Kirk")); 

/* ---------------------
// 2.	Write the same function as above as an arrow function with a different name.
----------------------- */
const getFullname = (fname, lname) => {
    return `${fname} ${lname}`;
}
console.log("getFullname: ", getFullname("Jim", "Kirk")); 

/* ---------------------
3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
----------------------- */
//  a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. 
//      The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
setTimeout(() => alert("Time is up!"), 2000);

//  b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, 
//      pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.
let askAreWeThereYet = (shaddup) => {
    shaddup = confirm('Are we there yet?\n------------------------\nPress OK to exit loop.');
    if(shaddup){
        clearInterval(nagId);
    } 

}
var shaddup = false; 
var nagId = setInterval(askAreWeThereYet,4000, shaddup);

/* ---------------------
4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.
----------------------- */
    
    /* ---------------------
    a.	Write a new function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the
        array, and a callback function that will process the sliced element. 
    - Inside the function, use the first two parameters to splice an element from the array.
    - Inside the function, call the callback function and pass the spliced value into it.
    - Outside of the function, create an array of strings, call processSplicedValue and pass in the array you just created, an index number, 
      and console.log into it. 
      For example: processSplicedValue(arrayName, 2, console.log);
    ----------------------- */
    const processSplicedValue = (arrIn,spliceIdx,callback) =>{
        if (arrIn === undefined || arrIn === null || arrIn.length === 0) {
            alert("Array must have one or more elements.");
            return;
        }
        if (spliceIdx < 0 || spliceIdx > arrIn.length){
            alert("Splice index out of bounds.");
            return;
        }
        arrTmp = arrIn.splice(spliceIdx, 1);
        callback(arrTmp);
    }
    var arrFlintstones = ["Fred","Wilma","Pebbles","Barney","Betty","Bam-Bam"];
    // Test 1:
    processSplicedValue(arrFlintstones,0,console.log);

    /* ---------------------
    b.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
    ----------------------- */
    processSplicedValue(arrFlintstones,2,alert);

    /* ---------------------
    c.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
    ----------------------- */
    processSplicedValue(arrFlintstones,2,()=> alert(arrTmp));

    /* ---------------------
    d.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
    ----------------------- */
    const writeTo = (arrIn, intMode) => {
        // can you next functions?  Hmmm ...
        function toScreen(strIn){
            document.addEventListener('DOMContentLoaded', ()=>{
                var P = document.createElement("P").textContent = `Write to screen: ${strIn}`;
                    document.body.append(P);
            });
        }
        
        function toLog(strIn){
            console.log(`Write to log: ${strIn}`);
        }

        // Could just get valeu from elem ( arrIn[0] ), but in future somebody may want to use a multi-item array.
        var strOut = arrIn.join(",");
        switch(intMode){
            case 0: 
                toLog(strOut);
                break;
            case 1:
                // delay writing to screen until DOM is complete
                toScreen(strOut);
                break;
            default:
                toLog(strOut);
                toScreen(strOut);
        }
    } 
    
    processSplicedValue(arrFlintstones,2,()=> writeTo(arrTmp, 2));

// Add common header - just to be fancy.
document.addEventListener('DOMContentLoaded', ()=>{
  // add H1 using content form doc title
  var header1 = document.createElement("H1");
  header1.textContent = document.title ? document.title : "Update document title";
  document.body.prepend(header1);
} );