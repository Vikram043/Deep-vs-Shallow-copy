function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  

const original = { name: "Alice", hobbies: ["reading", "traveling"] };


const cloned = deepClone(original);  //deep copy

// let shallowCopy=original
// shallowCopy.hobbies.push("coding")



cloned.hobbies.push("coding");


console.log("Original:", original);
console.log("Clone:", cloned);
//console.log('shallow',shallowCopy)
