<template>
  <div>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="#FF4F65">
        <img slot="tabbar-icon" src="../../assets/img/tabbar/tabbarhome.svg" alt="" srcset="">
        <img slot="tabbar-icon-active" src="../../assets/img/tabbar/tabbarhome_actived.svg" alt="" srcset="">
        <p slot="tabbar-title">首页</p>
      </tab-bar-item>
      <tab-bar-item  path="/category">
        <img slot="tabbar-icon" src="../../assets/img/tabbar/icon_tabbar_gzt_default.svg" alt="" srcset="">
        <img slot="tabbar-icon-active" src="../../assets/img/tabbar/icon_tabbar_gzt_default_actived.svg" alt="" srcset="">
        <p slot="tabbar-title">分类</p>
      </tab-bar-item>
      <tab-bar-item  path="/cart">
        <img slot="tabbar-icon" src="../../assets/img/tabbar/icontabbarshoppingup.svg" alt="" srcset="">
        <img slot="tabbar-icon-active" src="../../assets/img/tabbar/icontabbarshoppingup_actived.svg" alt="" srcset="">
        <p slot="tabbar-title">购物车</p>
      </tab-bar-item>
      <tab-bar-item  path="/profile">
        <img slot="tabbar-icon" src="../../assets/img/tabbar/icontabbarmyup.svg" alt="" srcset="">
        <img slot="tabbar-icon-active" src="../../assets/img/tabbar/icontabbarmyup_actived.svg" alt="" srcset="">
        <p slot="tabbar-title">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@comps/common/tabbar/TabBar'
  import TabBarItem from '@comps/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar' ,
    //import引入的组件需要注入到对象中才能使用
    components: {
      TabBar,
      TabBarItem
    },
    //方法集合
    methods: {
      
    },
  }
</script>
<style scoped>
</style>