// JavaScript中创建数组有两种方式
// （一）使用 Array 构造函数：
// var arr1 = new Array(); //创建一个空数组
// var arr2 = new Array(20); // 创建一个包含20项的数组
// var arr3 = new Array(“lily”,“lucy”,“Tom”); // 创建一个包含3个字符串的数组
// （二）使用数组字面量表示法：
// var arr4 = []; //创建一个空数组
// var arr5 = [20]; // 创建一个包含1项的数组
// var arr6 = [“lily”,“lucy”,“Tom”]; // 创建一个包含3个字符串的数组


// 数组的常用方法（依赖于数组使用）
// var arr = new Array(1,2,3,4,5,6,7,8,9)
// 1.push():向数组后面添加元素，原数组改变
    // var str = arr.push(10)
    // console.log(arr);
    // console.log(str);

// 2.pop():从数组末尾删除一个元素，原数组改变,返回这个删除的元素，不接收参数
    // console.log(arr.pop())
    // console.log(arr);

// 3.unshift():返回数组中元素的个数向数组的头部增加元素，括号中有多少就加多少，原数组发生改变
    // console.log(arr.unshift(0));
    // console.log(arr);

// 4.shift():从数组的头部删除一个元素，返回这个删除的元素，不接收参数,原数组改变
    // console.log(arr.shift());
    // console.log(arr);

// 5.slice(4):从下标为4的开始截取，直至数组结束，不改变原数组
    // arr.slice(4)//从下标为4的开始截取，直至数组结束
    // arr.slice(0,2)//从下标0开始截取，到下标2结束，不包含下标2的数，此方法原数组不变

// 6.splice():/一个参数，从下标4对应的位置开始，直到数组结束,改变原数组
    // const arg = arr.splice(4)
    // console.log(arg);//[ 5, 6, 7, 8, 9 ]
    // console.log(arr);//[ 1, 2, 3, 4 ]
    // const args = arr.splice(4,3,1,1,1)
    // console.log(args);//[ 5, 6, 7 ]
    // console.log(arr);[1, 2, 3, 4, 1,1, 1, 8, 9]

// 7.reverse():数组翻转，该方法会改变原来的数组，而不会创建新的数组
    // const arg = arr.reverse()
    // console.log(arg);
    // console.log(arr);

// 8.sort():无参数默认从小到大排序，判断方式：按位判断,改变原数组
    // const arg = [1,3,2,5,4]
    // const args = arg.sort()
    // console.log(args);
    // console.log(arg);
    // const args = arg.sort((a,b)=>b-a)
    // console.log(args);
    

// 数组的遍历方法

// 1.for循环遍历

// 2.forEach()
    // const arr = [1,2,3,4,5]
    // //遍历数组中的每一项，没有返回值，对原数组没有影响，不支持IE
    // const arg = arr.forEach((item,index,array)=>{
    //     item+=1;
    //     console.log(item,index,array);
    // })
    // console.log(arg);
    //数组中有几项，那么传递进去的匿名回调函数就需要执行几次；

// 3.map():map的回调函数中支持return返回值
    // const arr = [1,2,3,4,5]
    // const arg = arr.map((item,index,array)=>{
    //     console.log(item,index,array);
    //     return item
    // })
    // console.log(arg);

// 4.for of //可以正确响应break、continue和return
    // const arr = [1,2,3,4,5]
    // for(var value of arr){
    //     console.log(value);
    // }

// 5.for in 
    // const arr = [1,2,3,4,5]
    // arr.name = 'xiaobai'
    // for(var key in arr){
    //     console.log(key);
    // }
    // for of 和 for in 的区别：
        // 1.for of 无法遍历对象，for in 可以
        // 2.遍历出来的值不同
        // 3.for in 会遍历自定义属性，for of不会
        // for(var item of arr){
        //     // console.log(item);
        // }
        // for(var key in arr){
        //     console.log(arr[key]);
        // }

// 6.filter()://不会改变原始数组，返回新数组
    // var arr = [73,84,56, 22,100]
    // var newArr = arr.filter(item => item>80)   //得到新数组 [84, 100]
    // console.log(newArr,arr)

// 7.every()是对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true。
    // var arr = [ 1, 2, 3, 4, 5, 6 ];
    // console.log( arr.every( function( item, index, array ){
    //     return item > 3;
    // }));

// 8.some():some是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true。
    // var arr = [ 1, 2, 3, 4, 5, 6 ];
    // console.log( arr.some( ( item, index, array )=>{
    //     return item > 3;
    // }));

// 9.reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值,
// reduce接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引，数组
// reduce还有第二个参数，我们可以把这个参数作为第一次调用callback时的第一个参数，上面这个例子因为没有第二个参数，所以直接从数组的第二项开始
    // const arr = [1,2,3,4,5]
    // const val = arr.reduce((pre,next,index,array)=>{
    //     return pre + next
    // },5)
    // console.log(val);

// 10.reduceRight和reduce作用一样，数组中的值从右向左开始缩减，最终为一个值

// 11.find()方法返回数组中符合测试函数条件的第一个元素。否则返回undefined
    // const arr = [1,2,3,4,5]
    // function f(e){
    //     return e == 4
    // }
    // console.log(arr.find(f))

// 12.findIndex
//对于数组中的每个元素，findIndex 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 true。
//只要有一个元素返回 true，findIndex 立即返回该返回 true 的元素的索引值
//如果数组中没有任何元素返回 true，则 findIndex 返回 -1。
//findIndex 不会改变数组对象。
    // console.log([1,2,3].findIndex(x => x == 3));
    // console.log([1,2,3].findIndex(x => x == 4));

// 13.keys，values，entries
//ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。
//它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
    // const arr = ['a','b']
    // for (let index of arr.keys()) {
    //     console.log(index);// 0 1
    // } 
    // for (let elem of arr.values()) {
    //     console.log(elem); //'a' 'b'
    // }
    // for (let [index, elem] of arr.entries()) {
    //     console.log(index, elem);// 0 "a"  1 "b"
    // }
