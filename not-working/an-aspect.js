class MyAspect {
  constructor() {
    console.log("MyAspect got created")
  }

  visit(_node) {
    console.log("MyAspect got called")
  }
}

exports.MyAspect = MyAspect;