1.void 表示没有任何类型，并且只能赋值undefined与null； undefined与null都不能给其它类型赋值，只能赋值给自己本身；他们只属于其它类型下的子类型。

2.never类型表示不存在的值类型，一般用于不会有返回值的函数，以及不会有类型声明保护的值，也是never类型；never类型只能赋值给自己本身，即使any也不能赋值给never，因为本身的含义就是不存在。（一般用于函数中抛出错误与异常）

3.会报错；解决方案-->
~~~
const obj = {
    a: 1,
    b: 'string',
    c: null,
};
obj.c = null;
~~~

4.readonly只允许读，但不允许修改; const声明赋值后就不能再更改，区别就在于const需要初始化赋值，而readonly不用。

5. 解决方案-->
~~~
function foo(a: number) {
    let bar:number;
    return a + 1;
}
foo.bar = 123;
~~~

6.解决方案-->
~~~
let foo: any = {};

for (let i = 0; i < 100; i++) {
    foo[String(i)] = i;
}
~~~

7. 


8. 用关键字abstract修饰的类，被称为抽象类；不允许被实例化的类，必须要通过子类创建才能使用，在abstract 父类中用abstract修饰的方法，必须在子类中实现。

9.可以用来获取对象的结构类型与函数的结构类型（进行结构类型的拷贝）


10.用于获取某种类型的所有键，其返回类型是联合类型

11. 解决方案-->
~~~
function fn(value: number): string {
    return String(value);
}
const foo: any = fn;
~~~

12.解决方案-->
~~~
function getValue(str: string): string {

    return str;
}

console.log(getValue('nihao'), 'getValue');
~~~

13.解决方案-->


14.解决方案-->
~~~
const foo:Map<string,number> = new Map();
foo.set('bar', 1);
~~~


15.(如何声明 getProperty...)解决方案-->
~~~
function getProperty(obj: any, key: string): string {

    if (this.x.hasOwnProperty(key)) {
        return obj[key].toString();
    } else {
        throw Error(`${key}在x对象中不存在`)
    }
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a")
getProperty(x, "m");
~~~

16. 「|」 ：表示这个变量同时拥有所有类型所需要的成员，可以作为其中任何一个类型使用。（或者...）简写

	「&」：前后判断都必须为true

17.使用 is 来确认参数 date 是一个 Date 类型

18.严格校验null

19. interface属于全局声明；
type 和 interface 的语法不一样，type 需要等号，而 interface 不需要等号；

interface主要声明的是函数和对象，并且总是需要引入特定的类型
type声明的可以是任何的数据类型（基本类型别名，联合类型，元组等类型）

20.
	(import..from..)：import命令只能在模块的顶层，不能在代码块之中（比如，在if代码块之中，或在函数之中）

	(import(path: string)):支持动态加载模块,可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用.

	(import ... = require()):在需要的页面中使用require指定到该模块，即可导出模块中的export属性并执行赋值操作（值拷贝）;
若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。

21.声明一个变量

22. module的意思就是模块，例如导出时可以分模块导出module.export{...}

23.引入样式：npm i --save-dev css-loader style-loader
	引入图片：npm i --save-dev file-loader

24.

25.
	1.Namespace简化了js对象在全局命名空间里的命名，这使得namespaces可以很容易的去构造使用。它们可以跨越多个文件，也可以通过使用--outFile标识去串联起来使用。Namespaces在web程序中是一种很好的组织代码的方式，把所有的依赖包含进script标签插入到你的html页面上。
像所有的全局命名空间污染一样，它很难去确定组件的依赖，尤其是在一个大型的应用程序中

	2.modules既可以包含代码也可以包含声明。两者最主要的区别就是modules声明了它的依赖 	

26.在项目中编写 jsconfig.json 或 tsconfig.json （链接：https://blog.csdn.net/weixin_30677617/article/details/94965142）

	增加配置属性
	~~~
	{
    name: "alias",
    type: "object",
    isTSConfigOnly: true,
    category:ts.Diagnostics.Module_Resolution_Options,
    description:ts.Diagnostics.A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl
}
	~~~
27.
~~~
let strClass: typeof String = String;

let str: String = new strClass();

let str1 = strClass;
~~~




