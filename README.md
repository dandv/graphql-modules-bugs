# Bug 1 - undefined User module export in Auth module

```shell script
git clone git@github.com:dandv/graphql-modules-bugs.git
git checkout circular-undefined-1
npm install
npm test
```

# Bug 2 - TBD
```shell script
git checkout use-di
npm test
```

The injector fails to get the provider, but no error reaches the developer.
