// function testable(target) {
//   target.isTestable = true
// }
// @testable()
// class MyTestableClass {
//
// }
// console(MyTestableClass.isTestable)

// function testable(isTestable) {
//   return function (target) {
//     // target.isTestable = isTestable
//     target.prototype.isTestable = isTestable
//   }
// }
// @testable(true)
// class MyTestableClass {
//
// }
// console(MyTestableClass.isTestable)
//
// @testable(false)
// class MyClass {
//
// }
// console(MyClass.isTestable)

class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function () {
    console.log(`Calling "${name}" with`, arguments)
    return oldValue.apply(null, arguments);
  }
  return descriptor
}

const math = new Math();
math.add(2, 4);