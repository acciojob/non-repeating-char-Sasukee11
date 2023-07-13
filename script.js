//your JS code here. If required.
const a = prompt('Enter a string');
const arr = [...a];
arr.sort();
for(let i =0 ;i<arr.length-1;i++){
	if(arr[i] !== arr[i+1]){
		alert(arr[i]);
	}
}