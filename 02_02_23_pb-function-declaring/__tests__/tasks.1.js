const rewire = require('rewire');
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")

let consoleOutput = "";
storeLog = inputs => (consoleOutput += inputs);

describe("1. Function declaration", () => {
  test("Function `multiply` exists", () => {
    const solution = rewire("../solution");
    const multiply = solution.__get__("multiply")
    expect(multiply).toBeDefined()
  })
  test("`multiply` is declared as named function", () => {
    expect(content).toMatch(/function *multiply *\(/i)
  })
  test("Function multiplies two numbers passed as arguments", () => {
    const solution = rewire("../solution");
    const multiply = solution.__get__("multiply")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    multiply(3, 4)
    multiply(1.5, 6)
    expect(consoleOutput).toContain('12')
    expect(consoleOutput).toContain('9')
  })
});

describe("2. Function as variable value", () => {
  test("Function `myMultiply` exists", () => {
    const solution = rewire("../solution");
    const myMultiply = solution.__get__("myMultiply")
    expect(myMultiply).toBeDefined()
  })
  test("Function declaration is assigned to `myMultiply` variable", () => {
    expect(content).toMatch(/myMultiply *= *function *\(/i)
  })
  test("Function multiplies two numbers passed as arguments", () => {
    const solution = rewire("../solution");
    const myMultiply = solution.__get__("myMultiply")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    myMultiply(4, 4)
    myMultiply(1.7, 6)
    expect(consoleOutput).toContain('16')
    expect(consoleOutput).toContain('10.2')
  })
});

describe("3. Arrow function", () => {
  test("Function `myMultiplyFunc` exists", () => {
    const solution = rewire("../solution");
    const myMultiplyFunc = solution.__get__("myMultiplyFunc")
    expect(myMultiplyFunc).toBeDefined()
  })
  test("`myMultiplyFunc` is declared using **arrow** function notation", () => {
    expect(content).toMatch(/myMultiplyFunc *= *\(.*\) *= *>/i)
  })
  test("Function multiplies two numbers passed as arguments", () => {
    const solution = rewire("../solution");
    const myMultiplyFunc = solution.__get__("myMultiplyFunc")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    myMultiplyFunc(5, 4)
    myMultiplyFunc(1.8, 6)
    expect(consoleOutput).toContain('20')
    expect(consoleOutput).toContain('10.8')
  })
});

describe("4. Declarations", () => {
  test("Function `remainderOfDivision1` exists", () => {
    const solution = rewire("../solution");
    const remainderOfDivision1 = solution.__get__("remainderOfDivision1")
    expect(remainderOfDivision1).toBeDefined()
  })
  test("`remainderOfDivision1` checks the remainder of division of two numbers passed as arguments and prints the result to the terminal", () => {
    const solution = rewire("../solution");
    const remainderOfDivision1 = solution.__get__("remainderOfDivision1")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    remainderOfDivision1(51.3, 4)
    remainderOfDivision1(10.5, 6)
    expect(consoleOutput).toContain('3.299999999999997')
    expect(consoleOutput).toContain('4.5')
  })
  test("Function `remainderOfDivision2` exists", () => {
    const solution = rewire("../solution");
    const remainderOfDivision2 = solution.__get__("remainderOfDivision2")
    expect(remainderOfDivision2).toBeDefined()
  })
  test("`remainderOfDivision2` checks the remainder of division of two numbers passed as arguments and prints the result to the terminal", () => {
    const solution = rewire("../solution");
    const remainderOfDivision2 = solution.__get__("remainderOfDivision2")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    remainderOfDivision2(53.3, 4)
    remainderOfDivision2(10.6, 6)
    expect(consoleOutput).toContain('1.2999999999999972')
    expect(consoleOutput).toContain('4.6')
  })
  test("Function `remainderOfDivision3` exists", () => {
    const solution = rewire("../solution");
    const remainderOfDivision3 = solution.__get__("remainderOfDivision3")
    expect(remainderOfDivision3).toBeDefined()
  })
  test("`remainderOfDivision3` checks the remainder of division of two numbers passed as arguments and prints the result to the terminal", () => {
    const solution = rewire("../solution");
    const remainderOfDivision3 = solution.__get__("remainderOfDivision3")
    solution.__set__({console: {log: jest.fn(storeLog)}})
    remainderOfDivision3(53.4, 4)
    remainderOfDivision3(10.7, 6)
    expect(consoleOutput).toContain('1.3999999999999986')
    expect(consoleOutput).toContain('4.699999999999999')
  })
});
