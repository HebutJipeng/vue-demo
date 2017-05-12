# myvue

> this is my vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


windows | kill node process

netstat -a -n                               #各个端口占用情况
netstat -ano                                #各个端口占用和进程PID
netstat -aon | findstr "8080"              

# search
tasklist |  findstr "8080"                  #查看端口号对应应用

# kill node 
TASKKILL /F /IM node.exe /T  
