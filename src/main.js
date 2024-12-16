// 位于 ./assets/ 文件夹中的 main.css 样式文件。通过这种方式，你可以确保所有的全局样式在应用启动时就被加载。
import "./assets/main.css";
// 这里从 vue 包中导入了 createApp 函数。createApp 是 Vue 3 中用来创建应用程序实例的方法。
import { createApp } from "vue";
// 从 ./App.vue 文件中导入了顶层组件 App。App.vue 是整个应用程序的根组件，所有的其他组件都将嵌套在这个根组件内。
import App from "./App.vue";

// 最后这一行是创建应用实例并将其挂载到具有 id="app" 的 DOM 元素上
createApp(App).mount("#app");
