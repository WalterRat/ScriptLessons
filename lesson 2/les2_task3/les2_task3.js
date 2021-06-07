let a =Number(prompt('Введите первое число')), b=Number(prompt('Введите второе число'));
if (a>=0 && b>=0){
    alert(a-b)
}else if(a<0 && b<0){
    alert(a*b)
}else if ((a>=0 && b<0)||(a<0 && b>=0)){
    alert(a+b)
}