<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActived">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active">
      </slot>
    </div>
     <!-- 留下一个作为参照 <p :class="{actived: isActived}"> -->
    <p :style="activeStyle">
      <slot name="tabbar-title"></slot>
    </p>
    
  </div>

</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#FF4F65'
    }
  },
  data () {
    return {
      // isActived: true
    }
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) >= 0;
    },
    // 因为这个表达式比价复杂，所以单独作为一个计算属性，不放在模板中
    activeStyle() {
      return this.isActived ? {color: this.activeColor} : {} ;
    }
  },
  methods: {
    itemClick()  {
      this.$router.replace(this.path);
    }
  }
}
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .tab-bar-item p {
    padding: 0;
    margin: 0;
  }
  /* .actived {
    color: #FF4F65;
  } */
</style>