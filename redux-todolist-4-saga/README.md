# redux-todolist-4-saga
使用saga中间件进行异步函数的处理
redux-saga 是一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的中间件。
github地址：[https://redux-saga-in-chinese.js.org/](https://redux-saga-in-chinese.js.org/)
文档地址：[saga中文文档](https://redux-saga-in-chinese.js.org/)

### saga基本使用
##### 1. 在stroe下面的index.js中配置saga
首先引入createSagaMiddleware在创建sagaMiddleware中间件，然后创建一个sagas.js文件，再用sagaMiddleware去run这个文件。然后去写sagas.js
在sagas.js中一定要到导出一个generator函数，在这个函数中写一些逻辑。