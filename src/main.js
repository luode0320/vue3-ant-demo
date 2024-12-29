// 这里从 vue 包中导入了 createApp 函数。createApp 是 Vue 3 中用来创建应用程序实例的方法。
import { createApp } from 'vue';
// 从 ./App.vue 文件中导入了顶层组件 App。App.vue 是整个应用程序的根组件，所有的其他组件都将嵌套在这个根组件内。
import App from './App.vue';
// 导入组件库
import Antd from 'ant-design-vue';
// 导入组件库css
import 'ant-design-vue/dist/reset.css';

// 加载vue
const app = createApp(App);
// 加载Ant Design Vue组件库
app.use(Antd);
// 绑定
app.mount('#app');
