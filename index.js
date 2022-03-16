import http from "http";
import fs from "fs";

const port = 8080;
const wasmFile = fs.readFileSync("./test.wasm"); // fetching a wasm file
const wasmModule = new WebAssembly.Module(wasmFile); // creating a module from the wasm file
const wasmInstance = new WebAssembly.Instance(wasmModule); // creating an instance of the module
const add2 = wasmInstance.exports.add; // getting the add function from the module
const variable = add2(20, 10); // Originally, this a wat function but now it is running in javascript

const { add, sub, mul, div, test } =  new WebAssembly.Instance(new WebAssembly.Module(fs.readFileSync("./test.wasm"))).exports; // shorter, one liner version of the above code
// I only found the add function on youtube but the rest of the code is mine by pure experiment without even any documentation or googling. I don"t know how to write comments in wat, so I'm writting it in javascript. 
const added = add(20, 10);
const subbed = sub(20, 10);
const mulled = mul(20, 10);
const divided = div(20, 10);
const tested = test(10, 20, 30, 40);

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end(`20 and 10   : ${variable} \nAdd         : ${added} \nSub         : ${subbed}\nMul         : ${mulled} \nDiv         : ${divided} \nTest        : ${tested}`);
};

const server = http.createServer(requestListener);

server.listen(port,()=>console.log("Server is running on port "+port));