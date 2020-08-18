// 1.创建 JavaScript 对象

    // 1.1 通过new关键字创建对象
    // var obj = new Object()
    // // 添加属性
    // obj.name = 'xiaoming'
    // // 添加方法
    // obj.sleep = function () {
    //     console.log(this.name + "在睡觉");
    // };
    // obj.sleep()//xiaoming在睡觉

    // 1.2 通过字面量创建对象
    // var obj = {
    //     name : "xiaoming",
    //     age : "18",
    //     show : function (girlfriend) {
    //         console.log(this.name + "的女朋友是" + girlfriend);
    //     }
    // };
    // obj.show('小红')//xiaoming的女朋友是小红

    // 1.3 通过构造函数创建对象
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.say = function(name) {
    //         console.log("你好: " + name + "!");
    //     };
    // }
    // // 创建两个Person对象
    // var person1 =new Person("ande", 18);
    // var person2 =new Person("dahuan", 28);
    // console.log(person1.name);

    //1.4 使用Object.create()方法创建对象
    // var obj = Object.create({x:10,y:10})
    // console.log(this);

    // 3.属性删除：
    // delete运算符可以删除对象中的属性。这里先讲一下delete运算符的内容。
    // delete：一元运算符，用于删除对象和数组中的属性的，单它也仅仅是删除一个值，并不会返回删除的内容。
    // const o = {x:1, y:2};//定义了一个对象
    // delete o.x;
    // console.log("x" in o);;  //这里将会得到false值。
    // const a = [1,2,3];
    // delete a[1];
    // console.log(2 in a);; //元素2已经不再数组中了。
    // console.log(a.length == 3); //这里将会显示为true，虽然删除了属性但是，留下了一个占位，所以数组长度没有变化。

    //4.检测属性:
    //我们经常要判断某一个属性是否存在于某一个对象中。这个时候我们可以通过in运算符，
    //hasOwnProperty()方法或是propertylsEnumerable()方法来进行判断。
        // 1.iN运算符的内容：in操作符是一个二元操作符，其左边的额数值是字符串或者是可以转化为字符串的，右边的内容是对象。
        //     判断的当前的属性是不是存在于对象中。
        // var point = {x:1};
        // console.log("x" in point) //这一个表达式最后返回的将会是true。
        // console.log("toString" in point);; //由于toString是继承方法，所以也是返回true.
        // console.log("z" in point);; //这一表达式最后返回false，因为point对象中没有z属性.
        // //数组可以通过索引来判断当前的数组中是否有相应的数据。

        // 第二种检测的方法是hasOwnProperty()方法。代码如下：
        // var o ={x:1};
        // console.log(o.hasOwnProperty("x")); //true：o有这一属性，
        // console.log(o.hasOwnProperty("y")); //false;
        // console.log(o.hasOwnProperty("toString")); //false
        // 所以我们可以知道，hasOwnProperty方法只能测试当前属性是不是对象的自有属性。

        //第三种检测方式是用propertylsEnumerable()方法。只有当当前的属性是自有属性，并且是可枚举的的时候，这一方法才会返回true。
        
    // 5.枚举属性：
    // 　　遍历属性将会是进场要用到的内容。
    //     for/in循环遍历当前的对象的内容是一种很常见的手段。其可以遍历对象中的所有的可枚举属性，包括当前对象的自有属性和继承属性。
    //     Object.key()方法，枚举属性名称的函数，他返回的是一个数组，其中存在的是对象中的可枚举属性名称组成。
    //     Object.getOwnPropertyNames()方法，其返回的额也是数组，但是是所有的自有属性名称的数组。