/*
 * @Description: }
 * @Date: 2021-08-06 19:37:37
 * @LastEditTime: 2021-09-24 18:29:33
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export const mobile = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
export const Ip = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/
export const mac = /[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
export function isExist(arg) {
  if (typeof arg === 'undefined' || arg === null || isNaN(arg) || arg === '') {
    return false
  } else {
    return true
  }
}

export function isExistString(arg) {
  if (typeof arg === 'undefined' || arg === null || arg === '') {
    return false
  } else {
    return true
  }
}

export function DeepCopyRA(arg) {
  const newValue = IsType('Object', arg) // 判断是否是对象
    ? {}
    : IsType('Array', arg) // 判断是否是数组
      ? []
      : IsType('Date', arg) // 判断是否是日期对象
        ? new arg.constructor(+arg)
        : IsType('RegExp', arg) || IsType('Error', arg) // 判断是否是正则对象或错误对象
          ? new arg.constructor(arg)
          : arg
  // 判断是否是数组或对象
  if (IsType('Object', arg) || IsType('Array', arg)) {
    // 循环遍历
    for (const key in arg) {
      // 防止原型链的值
      Object.prototype.hasOwnProperty.call(arg, key) && (newValue[key] = DeepCopyRA(arg[key]))
    }
  }
  return newValue
}

function IsType(type, value) { Object.prototype.toString.call(value) === `[object ${type}]` }

// 通过接口获取
export async function getOptionArr(fn, params = {}, default_val = []) {
  if (!fn) { return default_val }

  const res = await fn(params).then(async res => {
    const { data: { result_list: result_list }} = res
    return result_list
  }).catch(async err => {
    console.log(err, 'err')
    return default_val
  })
  return res
}
