// 1. 傳遞基本資料型別的範例 example of passing primitive data type
function passPrimitiveData(x){
	x++;
}
let x=3;
passPrimitiveData(x);
console.log(x); // 不受函式內的運算影響，印出 3

// 2. 傳遞參考資料型別的範例 example of passing reference data type
function passReferenceData(data){
	data.x=5;
}
let obj={x:10};
passReferenceData(obj);
console.log(obj.x); // 受到函式內的運算影響，印出 5

// 3. 會影響原始陣列的方法範例 example of in-place array method
let arr1=[3,4,5];
arr1.pop(); // 更改原始陣列，移除 5
console.log(arr1.length); // 印出長度 2

// 4. 會創造新陣列的方法範例 example of not in-place array method
let arr2=[3,4,5];
arr2.slice(0,2); // 回傳新陣列 [3,4]，但不會影響原始陣列
console.log(arr2.length); // 印出長度 3