// let x= 3;
// console.log(x);

// let year = 2023;
// let month=1;
// let day = 4;

// let template = `${year} -${month} -${day} `;
// console.log(template);

// let className = 'p-elect';
// let title = '스마트 폰';

// let product = String.raw`<section class="${className}">\n\n\n
//                 <h1>${title}</h1>
//               </section>`;
// console.log(product);



// let attName = "kor";

// let exam = {
//     [attName]:10,
//     eng:20,
//     math:30,
//     student:{
//         name:'newlec',
//         phone:'010-1234-5678'
//     }    
// };

// console.log(`kor:${exam.kor}`);

// let {kor, eng:english, student:{name,phone}} = exam;
// console.log(phone);
// console.log(english);



// let std1 = {name:'dragon', phone:'010'};
// ({name, phone} = std1);
// console.log(phone);

// let kors = [1,2,3];
// let[kor1,kor2,kor3]=kors;
// console.log(kor1);

// let kors2 = [20,30,40];
// [kor1, kor2, kor3]=kors2;
// console.log(kor1);

// let a, b;
// [a, b] = kors2;
// console.log(a);

// a=200;
// b=300;
// console.log(a);
// [a,b]=[b,a];
// console.log(a);

// let kors3 = [5,6,7];
// [, ,kor3] = kors3;
// console.log(kor3);

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let[n1,n2,...rest]=nums;
// console.log(rest);

// let set = new Set([1,2,3,4,5,"강남"]);
// // set.add(5);
// // set.add("5");
// // set.add(2);
// // set.add(5);



// console.log(set.size);

// for(let k in set)
//     console.log(k);

//     console.log("---------------------");

// for(let n of set)
//     console.log(n);

// console.log("---------------------");
// set.forEach((v)=>{
//     console.log(`value: ${v}`);
// })

// set.forEach((v,k)=>{
//     console.log(`key: ${k},value: ${v}`);
// })


// let map = new Map();
// map.set("id", 1);
// map.set("title", "map이란?");

// console.log("foreach----------------");
// map.forEach(function(v,k){
//     console.log(`key:${k}, value: ${v}`);
// });
// console.log("/foreach----------------");

// let notice = new Map();
// notice.set("id", 1);
// notice.set("title", "map is ...");
// notice.set("writer", "newlec");

// console.log("**************************************");

// console.log(notice.get("title"));

// notice.forEach((v,k)=>{
//     console.log(`key:${k}, value: ${v}`);
// })

// for(let key of notice.keys())
//     console.log(`key: ${key}`);


// for(let v of notice.values())
//     console.log(`key: ${v}`);
    
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// for(let entry of notice.entries()){
//     console.log(`key: ${entry[0]}, value: ${entry[0]}`);
// }
// console.log("===================================");
// for(let [k,v] of notice)
//     console.log(`key: ${k}, value: ${v}`);
// for(let n of notice)
//     console.log(`n: ${n}`);


// //======================
// let exam4 = {
//     kor:10,
//     eng:20,
//     math:30
// }

// // for(let v of exam4)
// //     console.log(v);

// // ============================
// console.log("코노마마데와 오오리란조")
// let obj = Object.create(null);

// let list = [
//     {id:1, title:"jsp is", writerId:"newlec"},
//     {id:2, title:"servlet is", writerId:"newlec"},
//     {id:3, title:"자바스크립트는..", writerId:"newlec"},
//     {id:4, title:"스프링은....", writerId:"newlec"},
// ];

// list.forEach((n)=>{});
// let ar = list.map((n)=>{return `<span>${n.title}</span>`});
// console.log(ar);
















