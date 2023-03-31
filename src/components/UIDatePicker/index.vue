<template>
  <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      ref="popper"
      :style="{ width: width + 'px' }"
      :class="popperClass"
      class="el-picker-panel time-select el-popper"
    >
      <slot />
      <el-scrollbar noresize wrap-class="el-picker-panel__content">
        <div
          v-for="item in items"
          :key="item.value"
          class="time-select-item"
          :class="{ selected: value === item.value, disabled: item.disabled, default: item.value === defaultValue }"
          :disabled="item.disabled"
          @click="handleClick(item)"
        >{{ item.value }}</div>
      </el-scrollbar>
    </div>
  </transition> 
</template>

<script>
const parseTime = function(time) {
  const values = (time || '').split(':');
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);

    return {
      hours,
      minutes
    };
  }
  /* istanbul ignore next */
  return null;
};

const compareTime = function(time1, time2) {
  const value1 = parseTime(time1);
  const value2 = parseTime(time2);

  const minutes1 = value1.minutes + value1.hours * 60;
  const minutes2 = value2.minutes + value2.hours * 60;

  if (minutes1 === minutes2) {
    return 0;
  }

  return minutes1 > minutes2 ? 1 : -1;
};

const formatTime = function(time) {
  return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
};


const nextTime = function(time, step) {
  const timeValue = parseTime(time);
  const stepValue = parseTime(step);

  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };

  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;

  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;

  return formatTime(next);
};

export default {
  name: "UIDatePicker",
  componentName: "UIDatePicker",
  data(){
    return {
      visible: true
    }
  },
  watch: {
    value(val) {
      if (!val) return;
      this.$nextTick(() => this.scrollToOption());
    }
  },
  
}
</script>

