import { mobile, Ip, mac } from '@/utils/validate.js'

// 从数组中获取想要的某一项，
// arr:数组，key：查找的字段名，target：查找的值，
// get_field：返回全部，还是某一个字段的值，default_val:返回的默认值
function getArrItem(params = {}) {
  const { arr = [], key, target, get_field, default_val } = params
  for (let i = 0, len = arr.length; i < len; i++) {
    try {
      if (arr[i][key] == target) {
        return get_field ? arr[i][get_field] : arr[i]
      }
    } catch (error) {
      console.log('getArrItem-error', error)
    }
  }
  return default_val
}

function getArrIds(params = {}) {
  const { arr = [], key } = params
  let ids = []
  for (let i = 0, len = arr.length; i < len; i++) {
    try {
      if (arr[i][key]) {
        ids.push(arr[i][key])
      }
    } catch (error) {
      console.log('getArrIds-error', error)
    }
  }
  ids = Array.from(new Set(ids))
  return ids
}

// 从数组中，过滤需要的几项
function getArrItems(params = {}) {
  const { arr = [], key, target_arr = [], get_field, getEmpytItem, joinSymble = null, default_val } = params
  const resList = []
  try {
    for (let j = 0, jlen = target_arr.length; j < jlen; j++) {
      const target = target_arr[j]
      let getVal = null
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i][key] == target) {
          getVal = get_field ? arr[i][get_field] : arr[i]
          resList.push(get_field ? arr[i][get_field] : arr[i])
          break
        }
      }
      if (getVal == null && getEmpytItem) {
        resList.push(target)
      }
    }
    return joinSymble == null ? resList : resList.join(joinSymble)
  } catch (error) {
    console.log('getArrItems-error', error)
    return default_val
  }
}

function initRules(conf) {
  let { rules, formAttrList } = conf || {}
  rules = rules || {}
  formAttrList = formAttrList || []
  const blurTypeList = ['input', 'date', 'num', 'tel', 'ip']
  const changeTypeList = ['select']
  formAttrList.map(item => {
    const { prop, label, type, required } = item || {}
    if (required) {
      rules[prop] = rules[prop] || []
      if (blurTypeList.indexOf(type) !== -1) {
        rules[prop].push({ required: true, message: `请填写${label}`, trigger: 'blur' })
      } else {
        rules[prop].push({ required: true, message: `请选择${label}`, trigger: 'chnage' })
      }
    }
    if (type == 'tel') {
      rules[prop] = rules[prop] || []
      rules[prop].push({ pattern: mobile, message: '请填写正确电话号码', trigger: 'blur' })
    }
    if (type == 'ip') {
      rules[prop] = rules[prop] || []
      rules[prop].push({ pattern: Ip, message: '请填写正确IP', trigger: 'blur' })
    }
    if (type == 'mac') {
      rules[prop] = rules[prop] || []
      rules[prop].push({ pattern: mac, message: '请填写正确mac', trigger: 'blur' })
    }
  })
  return rules
}

export { getArrItem, getArrIds, getArrItems, initRules }

