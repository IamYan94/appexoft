function stringNumber(data) {
    if (typeof data === "string") {
        console.log("\u0420\u044F\u0434\u043E\u043A: ".concat(data));
    }
    else if (typeof data === "number") {
        console.log("\u0427\u0438\u0441\u043B\u043E: ".concat(data));
    }
    else {
        console.log("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0442\u0438\u043F: ".concat(data));
    }
}
stringNumber("Hello, Rostyk");
stringNumber(167);
