<template>
  <div class="IpBox">
    <div class="IpItem" v-for="(item, index) in ipAddress" :key="index">
      <input
        type="text"
        v-model="item.value"
        @input="checkIpVal(item)"
        @keyup="turnIpPosition(item, index, $event)"
        class="inputBox"
        ref="ipInput"
      />
      <span v-show="index<3">.</span>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ipAddress: [
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        }
      ]
    };
  },
  mounted() {
    if (this.value === "") {
      this.ipAddress[0].value = "";
      this.ipAddress[1].value = "";
      this.ipAddress[2].value = "";
      this.ipAddress[3].value = "";
    } else {
      let ipList = this.value.split(".");
      this.ipAddress[0].value = ipList[0] || "";
      this.ipAddress[1].value = ipList[1] || "";
      this.ipAddress[2].value = ipList[2] || "";
      this.ipAddress[3].value = ipList[3] || "";
    }
  },
  watch: {
    ipAddress: {
      // 双向数据绑定的value
      handler: function(newVal, oldVal) {
        let str = "";
        for (const i in this.ipAddress) {
          str += this.formatter(this.ipAddress[i].value);
        }
        if (str === "000000000000") {
          str = "";
        }
        this.$emit(
          "change",
          this.ipAddress.map(item => item.value + "").join(".")
        );
        this.$nextTick(()=>{
          this.$emit('validateIp')
        })
      },
      deep: true
    }
  },
  methods: {
    // 格式化补零方法
    formatter(val) {
      let value = val.toString();
      if (value.length === 2) {
        value = "0" + value;
      } else if (value.length === 1) {
        value = "00" + value;
      } else if (value.length === 0) {
        value = "000";
      }
      return value;
    },
    // 检查ip输入为0-255
    checkIpVal(item) {
      //确保每个值都处于0-255
      let val = item.value;
      // 处理非数字
      val = val.toString().replace(/[^0-9]/g, "");
      val = parseInt(val, 10);
      if (isNaN(val)) {
        val = "";
      } else {
        val = val < 0 ? 0 : val;
        val = val > 255 ? 255 : val;
      }
      item.value = val;
    },
    // 光标位置判断
    turnIpPosition(item, index, event) {
      let self = this;
      let e = event || window.event;
      if (e.keyCode === 37) {
        // 左箭头向左跳转，左一不做任何措施
        if (index !== 0 && e.currentTarget.selectionStart === 0) {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode == 39) {
        // 右箭头向右跳转，右一不做任何措施
        if (
          index !== 3 &&
          e.currentTarget.selectionStart === item.value.toString().length
        ) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (e.keyCode === 8) {
        // 删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
        if (index !== 0 && item.value === "") {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 190) {
        // 回车键、空格键、冒号均向右跳转，右一不做任何措施
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (item.value.toString().length === 3) {
        // 满3位，光标自动向下一个文本框
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      }
    }
  }
};
</script>


 <style lang="scss" scoped>
.IpBox {
  display: flex;
  .IpItem {
    display: flex;
    .inputBox {
      width: 50px;
      height: 32px;
      text-align: center;
      display: inline-block;
      vertical-align: text-bottom;
      line-height: 32px;
      background: #f2f2f2;
      border: 1px solid #c3c3c3;
      border-radius: 3px;
      margin: 0 2px;
      color: #888;
      box-sizing: border-box;
    }
    span {
      display: inline-block;
      vertical-align: baseline;
      width: 5px;
      text-align: center;
      font-size: 28px;
      margin-right: 2px;
      height: 32px;
    }
  }
}
/*取消掉默认的input focus状态*/
.IpItem input:focus {
  outline: none;
}
</style>