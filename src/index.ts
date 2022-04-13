function sum(a: number, b: number): number {
  return a + b
}

let nums: number[] = [1];
let arrs: Array<number> = [1, 2]

// let name:string = undefined
let name: string | undefined = undefined;

let a: string = "hello"
console.log(a)
console.log(sum(1, 2))

function throwError(msg: string): never {
  throw new Error(msg);
  console.log(msg)
}

function xunhuan(): never {
  while (true) {

  }
}

let aa: "A" = "A" //字面量约束
let user: {
  name: string
  age: number
}

user = {
  name: 'aa',
  age: 1
}

type Gender = "男" | "女"
type User = {
  name: string
  age: number
  gender: Gender
}
let u: User
u = {
  name: 'dd',
  age: 12,
  gender: "女"
}

function getUsers(g: Gender): User[] {
  return []
}


function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  throw new Error("a和b必须是相同的类型")
}
const result = combine(1,2)

function sums(a:number, b:number, c?: number){
  if(c){
    return a + b + c
  }
  return a + b;
}

function sums1(a:number, b:number, c: number = 0){
  if(c){
    return a + b + c
  }
  return a + b;
}
sums1(1,2)