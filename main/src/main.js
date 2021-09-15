import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//qiankun配置
import { registerMicroApps, start } from 'qiankun';

//子应用列表
let apps = [
  {
    name:'subapp',
    entry:'//localhost:8080',//子应用的地址，这里演示是本地启动的地址。
    container:'#app',//子应用的容器节点的选择器（vue一般为app）
    activeRule:'/subapp',//访问子应用的规则，比如：主应用为localhost:8081，那访问该子应用的url应为localhost:8081/subapp
  }
]

//注册子应用
registerMicroApps(apps);

//启动
start();

new Vue({
  render: h => h(App),
}).$mount('#app')
