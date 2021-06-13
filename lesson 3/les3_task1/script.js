let n =2;
while(n<100){
    if (n===2 || n===3 || n===5 || n===7){console.log(n)}
    if(n%n===0 && n%2!==0 && n%3!==0 && n%5!==0 && n%7!==0){
        console.log(n)
    }
    n++
}