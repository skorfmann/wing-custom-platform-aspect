# wing-custom-platform-aspect

for https://github.com/winglang/wing/issues/5151

```
npm install
```

### not working

a deeply nested required aspect is not invoked

[not-working-platform](./not-working/index.js)

```
wing compile -t ./not-working main.w
newApp called
presynth called
```

### working

the same aspect referenced from the platform entrypoint works

[working-platform](./working/index.js)

```
wing compile -t ./working main.w
newApp called
presynth called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
MyAspect got called
```
