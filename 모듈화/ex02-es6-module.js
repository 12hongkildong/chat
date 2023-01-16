import aaa,{test1, test2, Exam, exam2} from './module1.js' // 거론 안 하면 defulat가 온다.
import bbb,{test1 as test3} from './module2.js'


aaa()
test1();
test2();
bbb();
test3();
console.log(exam2);

let exam1 = new Exam();
console.log(exam1);