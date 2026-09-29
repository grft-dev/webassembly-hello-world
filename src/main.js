import { instantiate } from "@assemblyscript/loader";

const instance = await instantiate(fetch("/bill.wasm"));
const text = instance.exports.__getString(instance.exports.hello());

document.querySelector("#bill").textContent = text;
