/**
 * Created by Tarena on 2019/6/24.
 */
$(function(){
    $("body").css({"background-image":"url('http://pic.rmb.bdstatic.com/f6756b80ea58d17328e6eba20b600f54.jpeg')","background-repeat":"no-repeat","background-size":"cover"});
    var n=-1;

    var json=[
        /*ES6*/
        {title:"参数解构",content:"使用方法：1.形参以对象的形式定义 2.调用${key}"+"<hr>"+" 示例：function({key1:value1,key2:value2}){}.. "+"<hr>"+"简写形式：function({key1,key2}){}..调用：${key1}"}
        ,{title:"对象解构",content:"使用方法：1.对象赋值给变量"+"<hr>"+" 2.再将此变量赋值给对象 "+"<hr>"+"语法：属性对属性"+"<hr>"+" 示例：1.任意定义一个对象"+"<hr>"+" 2.var{age：age,objFn:objFn}=obj;"+"<hr>"+" 3.console.log(${age}); "+"<hr>"+" 简写方式：1...2.var{age,objFn}=obj;3..."}
        ,{title:"数组解构",content:"使用方法：1.数组赋值给变量"+"<hr>"+" 2.再将此变量赋值给数组"+"<hr>"+" 语法：下标对下标"+"<hr>"+" 示例：var date=[2019,6,7，12,55,59]; var [ ， ， ，h，m，s]=date;  //输出h，m，s为12，55，59"}
        ,{title:"解构：概念",content:"提取对象或数组的部分成员，单独使用"}
        ,{title:"求最大最小值两种形式",content:"1.单值形式：Math.max/min(n1,n2); "+"<hr>"+"2.数组形式：Math.max/min.apply(arr/null,arr);"}
        ,{title:"ES6参数增强第三种",content:"作用：拆分数组为单值"+"<hr>"+" 语法：三个点+数组名（...arr） "+"<hr>"+"示例：Math.max(...arr)"}
        ,{title:"ES6参数增强第二种",content:"作用：以数组的形式接受形参 "+"<hr>"+"特点：arguments的升级版 "+"<hr>"+"优点：1.纯数组可使用API "+"<hr>"+"2.有选择性的获取数组 "+"<hr>"+"语法：三个点+形参名（...arr）：表示一个数组"}
        ,{title:"ES6参数增强第一种",content:"作用：给最后一个形参默认值，就算没有传参也有值； "+"<hr>"+"语法：形参位置等号赋默认值 "+"<hr>"+"缺点：赋值位置只能是形参最后一个，且只能有一个"}
        ,{title:"for in的特点",content:"原型链和自有属性都能使用"}
        ,{title:"遍历关联数组或对象，只有一种方式",content:"通过for in的方式遍历"}
        ,{title:"3种遍历索引数组的使用场景和缺点",content:"1.普通for场景：什么都可以做（顺序、倒序、依次递增、2、4、6...）"+"<hr>"+" 缺点：书写麻烦 "+"<hr>"+"2.forEach场景：获取内容和值 "+"<hr>"+"局限：只能从头到尾依次遍历 "+"<hr>"+"3.for of场景：只获取值；"+"<hr>"+"局限：不能获取下标"}
        ,{title:"遍历索引数组的三种方式",content:"1.普通for循环: for(;;) "+"<hr>"+"2.arr.forEach((elem,i,arr){..})"+"<hr>"+" 3.for(var elem of arr){..}"}
        ,{title:"箭头函数的特点",content:"箭头函数内部的this和外部this.attr.API的方式调用此箭头函数的this指向保持一致"}
        ,{title:"箭头函数的使用口诀",content:"1.去function变为()=>{} "+"<hr>"+"2.只有一个形参，可省略形参括号"+"<hr>"+" 3.函数体只有一句话，可省略{}，与此同时，语句中如果有return，return也可省略"}
        ,{title:"箭头函数的作用",content:"可替代其他函数的定义，书写更加简洁"}
        ,{title:"let原理",content:"被let所定义的变量，相当于匿名函数自调"}
        ,{title:"let使用注意点",content:"同名变量重复定义将报错，但允许值的覆盖"}
        ,{title:"let的特点",content:"1.不会被提前，也不会被提前使用"+"<hr>"+"  2.添加了块级作用域"}
        ,{title:"var的缺点",content:"1.声明提前（打乱了正常的执行顺序） "+"<hr>"+" 2.没有块级作用域（块内和块外的变量就会互相干扰）"}

        /*ES5*/
        ,{title:"按值传递特点",content:"1.原始类型的按值传递操作的是副本"+"<hr>"+" 2.引用类型的按值传递操作的是原对象"}
        ,{title:"变量、函数、对象源头",content:"变量、函数属于window；"+"<hr>"+" 对象属于Object"}
        ,{title:"数组API--reduce",content:"语法：var sum=arr.reduce(function(prev,elem){return prev+elem;})"+"<hr>"+" 作用：数组内所有元素的求和、汇总"}
        ,{title:"数组API--filter",content:"语法：var newArr=arr.filter(function(elem,i,arr){ ...return 条件; });"+"<hr>"+" 作用：将数组中符合条件的元素赋值出来，组成新元素"}
        ,{title:"arr.forEach和arr.map的区别",content:"arr.forEach遍历的同时操作原数组；"+"<hr>"+"arr.map遍历的同时生成新数组"}
        ,{title:"数组API--map",content:"语法：var newArr=arr.map(function(elem){return elem*=2;}); "+"<hr>"+"作用：通过操作原数组生成新数组"}
        ,{title:"数组API--forEach",content:"语法：arr.forEach(function(elem，i，arr){arr[i]*=2}) "+"<hr>"+"注意点：elem操作的是赋值副本；arr操作的是原数组"}
        ,{title:"数组API--some",content:"语法：var bool=arr.some(function(elem,i,arr){ ...return 判断条件; }); "+"<hr>"+"作用：判断数组里的某一项是否都符合要求，只要有一项符合符合就返回true"}
        ,{title:"数组API--every",content:"语法：var bool=arr.every(function(elem,i,arr){ ...return 判断条件; }); "+"<hr>"+"作用：判断数组里的每一项是否都符合要求，全都符合就返回true"}
        ,{title:"数组API--indexOf",content:"语法：arr.indexOf('元素值'，起始下标); "+"<hr>"+"作用：查找下标；如果没找到返回-1；和字符串的indexOf用法一样" }
        ,{title:"bind()与call()/apply()区别",content:"bind是永久指向；"+"<hr>"+"其余两者是临时指向"}
        ,{title:"bind()函数的使用",content:"使用场景：将全局函数变成某对象的专用函数 "+"<hr>"+"语法：：var fn1=fn.bind(obj1); fn1(arr[1],arr[2]..);"}
        ,{title:"call()函数与apply()函数的区别",content:"call的参数传的是单值；"+"<hr>"+"apply的参数传的是数组"}
        ,{title:"apply()函数的使用",content:"使用场景：任意对象想调用一个带参的全局函数"+"<hr>"+" 语法：fn.call(obj，arr)"}
        ,{title:"call()函数的使用",content:"使用场景：任意对象想调用一个带参的全局函数 "+"<hr>"+"语法：fn.call(obj，obj.key1，obj.key2..)"}
        ,{title:"可以替换this指向的3个函数",content:"call()/apply()/bind()"}
        ,{title:"面试题：Object.create干了几件事",content:"1.创建了一个空的子对象；"+"<hr>"+"2.自动设置子对象继承父对象；"+"<hr>"+" 3.给子对象添加自有属性"}
        ,{title:"Object.create()的使用方式2【创建子对象并添加新属性】",content:"语法：var 子对象=Object.create(父对象，{key1:{value1+3个开关}..})"}
        ,{title:"Object.create()的使用方式1【创建子对象】",content:"语法：var 子对象=Object.create(父对象)"}
        ,{title:"什么是Object.create()",content:"答：基于一个现有的父对象，创建子对象，自动设置继承关系"}
        ,{title:"保护结构（3个函数）之--冻结",content:"语法：Object.freeze(obj)"+"<hr>"+" 作用：禁止为对象添加/删除/修改新属性"}
        ,{title:"保护结构（3个函数）之--密封",content:"语法：Object.seal(obj)"+"<hr>"+" 作用：禁止为对象添加/删除新属性"}
        ,{title:"保护结构（3个函数）之--防扩展",content:"语法：Object.preventExtensions(obj)"+"<hr>"+" 作用：禁止为对象添加新属性"}

        ,{title:"高级保护对象（访问器属性）",content:"特点：一体两面（半隐藏受保护+保护）；表面是在操作保护属性，实际是在操作受保护属性 "+"<hr>"+" 用法：1.定义一个半隐藏自定属性+{value+3个开关}"+"<hr>"+" 2.定义一个正常属性+{get(){返回半隐藏属性}+set(自定半隐藏属性赋值规则，不满足则抛出错误)} "+"<hr>"+" 注意点：赋值的前提-->要将受保护的key值设置为writable：true"}
        ,{title:"基础保护对象（为单个/多个属性设置3个保护开关）",content:"语法：Object.defineProperty "+"<hr>"+"示例：1.设置单个属性:Object.defineProperty(obj,'attr',{writable:false,enumerable:false,configurable:false}); "+"<hr>"+" 2.设置多个属性:Object.defineProperties(obj,{key1:{writable:false,enumerable:false..},key2:{...}..});"}
        ,{title:"基础保护对象的3个开关--configurable",content:"语法：configurable:bool; "+"<hr>"+" 作用：1.设置该属性是否可被删除"+"<hr>"+" 2.控制这三个开关是否可被修改"}
        ,{title:"基础保护对象的3个开关--enumerable",content:"语法：enumerable:bool; "+"<hr>"+"作用:设置该属性是否可被访问"}
        ,{title:"基础保护对象的3个开关--writable",content:"语法：writable:bool; "+"<hr>"+" 作用:设置该属性是否可被修改"}
        ,{title:"严格模式主要内容",content:"1.禁止给未声明的变量赋值（默认状态会赋值到window对象下）"+"<hr>"+" 2.静默失败升级为错误（运行不成功也不报错；例：当给一个对象的key值设置了writable：false;默认状态如果给这个值赋值，不会执行也不会报错，但是加上'use strict'之后就会报错）"+"<hr>"+" 3.普通函数和匿名函数this指向undefined（默认指向window）"+"<hr>"+" 4.禁用arguments.callee（禁用了递归，用for循环代替）"}

    ];
    /*初始加载页面内容*/
    $(json).each(function(i, elem){
        /*..*/
        $("<a>").html(elem.title).attr("href","#n"+i).attr("name","n"+i).attr("tf",false).addClass("boxTitle").css({margin:"5px",textAlign:"center",display:"block"}).prepend($("<span>")).append($("<span>")).appendTo("#main");
        $("<div>").html(elem.content).addClass("boxContent").css({background:"black",margin:"5px",display:"none","padding":"50px 100px"}).appendTo("#main");
    })

    /*点击标题触发手风琴*/
    $(".boxTitle").click(function(){
        if(n!=-1){
            $(".boxTitle").eq(n).css({"background":"black","line-height":"200px","font-size":"100px","overflow":"auto"}).height(200);
            $(".boxContent").eq(n).slideUp();
            if(n==$(".boxTitle").index(this)){
                n=-1;
                return;
            }
        }
        $(this).css({"background":"linear-gradient(to right,black,white,black)","line-height":"300px","font-size":"150px","overflow":"scroll"}).height(300);
        $(this).next().slideToggle();
        n=$(".boxTitle").index(this);
    })


    /*查找*/
    var reg=/^\s/g;
    $("#search").click(function(){
        $("div.boxContent").each(function(i,elem){
            $("a.boxTitle").eq(i).css({"display":"none"}).attr("tf",false);
            /*console.log($("input[type='text']").val().toLowerCase().search(reg));*/
            if($("input[type='text']").val().toLowerCase().search(reg)==0){
                $(".tet").prop("value","首字符不能为空，请重输..").css("color","grey");
            }
            if($("input[type='text']").val().toLowerCase()!=""&&$("input[type='text']").val().toLowerCase().search(reg)==-1){
                if($("div.boxContent").eq(i).html().indexOf($("input[type='text']").val().toLowerCase())!=-1||$("a.boxTitle").eq(i).html().indexOf($("input[type='text']").val().toLowerCase())!=-1){
                    $("a.boxTitle").eq(i).attr("tf",true);
                }
                if($("a.boxTitle").eq(i).attr("tf")==="true"){
                    $("a.boxTitle").eq(i).css({"display":"block","background":"rgba(80,70,200,0.6)"});
                }
            }
        })
    })
    /*文本框聚焦*/
    $(".tet").focus(function(){
        $(this).prop("value","").css("color","black");
    });

    /*重置*/
    $("#reload").click(function(){
        /*window.location.reload();*/
        $("#main").html(" ");
        $(json).each(function(i, elem){
            $("<a>").html(elem.title).attr("href","#n"+i).attr("name","n"+i).attr("tf",false).addClass("boxTitle").css({margin:"5px",textAlign:"center",display:"block"}).prepend($("<span>")).append($("<span>")).appendTo("#main");
            $("<div>").html(elem.content).addClass("boxContent").css({background:"black",margin:"5px",display:"none","padding":"50px 100px"}).appendTo("#main");
        })
        $(".boxTitle").click(function(){
            if(n!=-1){
                $(".boxTitle").eq(n).css({"background":"black","line-height":"200px","font-size":"100px","overflow":"auto"}).height(200);
                $(".boxContent").eq(n).slideUp();
                if(n==$(".boxTitle").index(this)){
                    n=-1;
                    return;
                }
            }
            $(this).css({"background":"linear-gradient(to right,black,white,black)","line-height":"300px","font-size":"150px","overflow":"scroll"}).height(300);
            $(this).next().slideToggle();
            n=$(".boxTitle").index(this);
        })
    })



})
