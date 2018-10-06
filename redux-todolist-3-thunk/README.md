# redux-todolist-3-thunk


我们有时候在组件的生命周期函数componentDidMount中做了一些Ajax数据请求，虽然没有任何问题。但是，如果我们把很多Ajax请求和一些复杂的逻辑都放在组件中进行实现时，组件有时候会变得过于臃肿。所以遇到一些非常复杂的逻辑或者异步请求我们希望把他放在其他地方去统一管理， 而 redux-thunk 这个中间件可以让我们把复杂逻辑和异步请求放到 action 中去处理。

[Redux-thunk](https://github.com/reduxjs/redux-thunk)是一个Redux是中间件，如下入所示，他位于 Action与 Strore中间，简单的说，他就是对store.dispatch进行了一次升级，他通过改造store.dispatch，可以使得store.dispatch可以接受函数作为参数。
![Redux Data Flow](https://upload-images.jianshu.io/upload_images/13627346-fb0c27f17c5db8d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)