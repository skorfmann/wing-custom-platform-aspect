class MyAspect {
  visit(_node) {
    console.log("MyAspect got called")
  }
}

exports.MyAspect = MyAspect;