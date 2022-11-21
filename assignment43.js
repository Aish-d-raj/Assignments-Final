const arr = [12,18,25,24,2,5,18,20,20,21];
var sum = 0;
for (var i=0; i<arr.length;i++) {

    sum += arr[i];
}
var avg = sum / arr.length;
var t_avg=0;
for(var i=0; i<arr.length; i++){
    if(arr[i]>avg){
        ++t_avg;
    }
}
var more_than_average;
more_than_average= (t_avg/arr.length)*100;
console.log("Percentage of students who have scored more than the average marks is: ",more_than_average);

var f =[];
for(var i=0; i<=25 ; i++){
    f[i]=0;
    for(var j=0; j<arr.length; j++){
        if(i == arr[j]){
          f[i]= 1;
          
        }
    }
    
}
console.log(f);