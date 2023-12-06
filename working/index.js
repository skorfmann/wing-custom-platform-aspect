const { MyAspect } = require("./an-aspect.js");
const { Aspects } = require('cdktf');
const { App } = require('@winglang/sdk/lib/target-tf-aws');

exports.Platform = class MyPlatform {
  target = "tf-aws";

  newApp(appProps) {
    console.log("newApp called");
    return new App(appProps);
  }

  preSynth(app) {
    console.log("presynth called");
    Aspects.of(app).add(new MyAspect());
  }
}

