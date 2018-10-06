# redux-todolist-2-actionCeator

![Redux数据流](https://upload-images.jianshu.io/upload_images/13627346-fa223790583e59b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 抽出UI组件
创建 TodolistUI.js 在文件中定义一个UI组件（一般这个UI组件只有一个render 函数的组件，也可以把他再简化为无状态组件即用函数定义组件而不是用类的方式定义），让视图与控制分离。
被抽出的UI组件(TodolistUI)被称为傻瓜组件，即只负责页面的组件，而剩下的容器组件(Todolist)则被称为聪明组件，它将负责组件的逻辑。
UI组件与容器组件之间的通信通过容器组件向UI组件传递props来完成。

### 使用Action Creators 统一管理action
在组件那边太多的action会让页面变得复杂、难以管理。所以我们将所有的action都放在actionCreators.js文件中，会让逻辑更清晰

### 使用actionType来管理action的命名
redux的action事件是用字符串命名的，当我们把aciton的变量名拼写错误的时候就会出现点了但没反应的情况，但是控制台里得不到任何的报错信息。如果我们使用一个常量来定义action名的话一旦出现拼写错误就会报错，这样就可以避免因为action名写错而得不到报错信息的情况。