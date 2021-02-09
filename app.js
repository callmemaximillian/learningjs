let val;

val = document.scripts[1];

let scripts = Array.from(document.scripts);



scripts.forEach(element => {
    console.log(element);
});

console.log(val);