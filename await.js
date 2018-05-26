function resolveAfterSeconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

// function f1() {
//     var x = resolveAfterSeconds(10);
//     console.log(x);
// }

async function f1() {
    var x = await resolveAfterSeconds(10);
    console.log(x);
}

f1();