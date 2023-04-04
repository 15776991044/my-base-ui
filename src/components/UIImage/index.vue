<template>
  <div>
    图片懒加载
    <slot v-if="loading" name="placeholder">
      <div class="el-image__placeholder">loading</div>
    </slot>
    <slot v-else-if="error" name="error">
      <div class="el-image__error">error</div>
    </slot>  
    <!-- //未识别的属性可以通过 v-bind="$attrs" 传入内部组件。未识别的事件可通过v-on="$listeners"传入 -->
    <img v-else class="el-image__inner" :src="src" v-bind="$attrs" v-on="$listeners">
  </div>
</template>

<script>
const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined
export default {
  name: 'UIImage',
  componentName: 'UIImage',
  props: {
    scrollContainer: {}, //懒加载，用来监听滚动的容器
  },
  data(){
    return {
      loading: true,
      error: false,
      imageWidth: 0,
      imageHeight: 0,
      src: '',
      show: true, //懒加载，is_lazy=true

    }
  },
  computed: {
    imageStyle() {
      const { fit } = this;
      if (fit) {
        return isSupportObjectFit()
          ? { 'object-fit': fit }
          : this.getImageStyle(fit);
      }
      return {};
    }
  },
  watch: {
    src(){
      this.show&&this.loadImage()
    },
    show(val){
      val&&this.loadImage()
    }
  },
  mounted(){
    this.loadImage()
    this.addLazyLoadListener()
  },
  methods: {
    loadImage(){
      this.loading=true
      this.error=false
      const img = new Image()
      img.onload=e => this.handleLoad(e, img)
      img.onerror=this.handleError.bind(this)
    },
    handleLoad(e, img){
      this.imageWidth=img.width
      this.imageHeight=img.height
      this.loading=true
      this.error=false
    },
    handleError(e){
      this.loading=false
      this.error=true
    },
    getImageStyle(fit){
      const {imageWidth, imageHeight} = this
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight
      }=this.$el;
      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};
      const imageAspectRatio = imageWidth / imageHeight;
      const containerAspectRatio = containerWidth / containerHeight;
      if (fit==='scale-down'){
        const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
        fit=isSmaller?'none':'container'
      }
      switch (fit) {
        case 'none':
          return { width: 'auto', height: 'auto' };
        case 'contain':
          return (imageAspectRatio < containerAspectRatio) ? { width: 'auto' } : { height: 'auto' };
        case 'cover':
          return (imageAspectRatio < containerAspectRatio) ? { height: 'auto' } : { width: 'auto' };
        default:
          return {};
      }
    },
    addLazyLoadListener(){
      const {scrollContainer}=this
      let _scrollContainer = null;
      if (this.isHtmlElement(scrollContainer)){
        _scrollContainer = scrollContainer
      } else if (this.isString(scrollContainer)){
        _scrollContainer=document.querySelector(scrollContainer)
      } else {
        _scrollContainer = this.getScrollContainer(this.$el)
      }
      console.log('_scrollContainer', _scrollContainer)
      if (_scrollContainer){
        this._scrollContainer = _scrollContainer;
        // this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
        // on(_scrollContainer, 'scroll', this._lazyLoadHandler);
        this.handleLazyLoad();
      }
    },
    handleLazyLoad() {
      if (this.isInContainer(this.$el, this._scrollContainer)) {
        this.show = true;
        this.removeLazyLoadListener();
      }
    },
    isHtmlElement(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    },
    isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    },
    getScrollContainer(el, vertical){
      let parent=el
      while (parent){
        if ([window, document, document.documentElement].includes(parent)){
          return window;
        }
        if (this.isScroll(parent, vertical)){
          return parent
        }
        parent=parent.parentNode
      }
      return parent
    },
    isScroll(el, vertical){
      return true
      const determinedDirection=vertical!==null&&vertical!==undefined 
      const overflow = determinedDirection
        ?vertical
          ?this.getStyle(el, 'overflow-y')
          :this.getStyle(el, 'overflow-x')
        : this.getStyle(el, 'overflow');
      return overflow.match(/(scroll|auto|overlay)/);
    },
    getStyle(){

    },
    isInContainer(el, container){
      const elRect = el.getBoundingClientRect();
      let containerRect;
      if ([window, document, document.documentElement, null, undefined].includes(container)) {
        containerRect = {
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
          left: 0
        };
      } else {
        containerRect = container.getBoundingClientRect();
      }
      return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right;
    }
  }
}
</script>
