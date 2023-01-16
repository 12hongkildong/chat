export default function test(){
    console.log("module1 test")
}

export function test1(){
    console.log("module1.test1")

}
export function test2(){
    console.log("module1.test2")

}

export class Exam{
    constructor(){
        this.kor=2;
        this.eng=3;
        this.math=4;

    }

}


export let exam2 = new Exam();







