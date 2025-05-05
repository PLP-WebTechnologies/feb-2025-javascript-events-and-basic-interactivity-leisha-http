//for loop
//for. {intialization; ConditionRule; increment/decrement) {
    // ..... code rxecution
    //.}
    for (let x = 0; x<15; x++){
        //console.log(`iteration number${x}`);
    }
    //while loop
    let count = 0;
    while(count <10){
        console.log(`count: ${count}`);
        count++
    }
//do while loop
let num = 10
do{
    console.log(`number: ${num}`);
    num -=2;

}while (num > 0);

//for....of loop
const fruits = ["apple", "banana", "orange", "grape"];
for (const fruit of fruits) {
    console.log(fruit);
}

