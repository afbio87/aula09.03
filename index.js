import PromptSync from "prompt-sync"
const prompt = PromptSync()
let number= Number(prompt('Tabuada do ...:'))
let i=1
let result = 0
for(let i = 1;i<=10; i++){
    result=i*number
    console.log(`${i}x${number}=${result}`)
}