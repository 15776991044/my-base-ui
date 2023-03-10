import { post } from '@/utils/request'

// 新增模块类型
export async function addModule(data) {
  const res = await post('/manageapi/devicetype/add', data)
  return res
}

// 编辑模块类型
export async function editModule(data) {
  const res = await post('/manageapi/devicetype/edit', data)
  return res
}

// 删除模块类型
export async function removeModule(data) {
  const res = await post('/manageapi/devicetype/remove', data)
  return res
}

// 单个获取模块类型信息
export async function getModuleInfo(data) {
  const res = await post('/manageapi/devicetype/get', data)
  return res
}

// 获取模块信息列表
export async function moduleSearch(data) {
  const res = await post('/manageapi/devicetype/search', data)
  return res
}

// 获取模块信息列表
export async function addIp(data) {
  const res = await post('/manageapi/devicetype/add_ip', data)
  return res
}

// 获取模块信息列表
export async function removeIp(data) {
  const res = await post('/manageapi/devicetype/remove_ip', data)
  return res
}
