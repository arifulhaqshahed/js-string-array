let name = 'Arif';

try{
    name = 'shahed';
}
catch(err){
    console.log('getting error', err);
}
console.log(name);


// syntax

/*
    try {
        tryCode - Block of code to try
    }
    catch(err) {
        catchCode - Block of code to handle errors
    }
    finally {
        finallyCode - Block of code to be executed regardless of the try / catch result
    } 
    
*/