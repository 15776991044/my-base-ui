import { post } from '@/utils/request'

// 新增子模块
export async function addSubModule(data) {
  const res = await post('/manageapi/devicepart/add', data)
  return res
}

// 编辑子模块
export async function editSubModule(data) {
  const res = await post('/manageapi/devicepart/add', data)
  return res
}

// 删除子模块
export async function removeSubModule(data) {
  const res = await post('/manageapi/devicepart/remove', data)
  return res
}

// 单个获取设备子模块信息
export async function getSubModule(data) {
  const res = await post('/manageapi/devicepart/get', data)
  return res
}

// 获取设备子模块信息
export async function subModuleSearch(data) {
  const res = await post('/manageapi/devicepart/search', data)
  return res
}

// 设备子模块添加
export async function subModuleAddSub(data) {
  const res = await post('/manageapi/devicepart/add_sub', data)
  return res
}

// 设备子模块删除
export async function subModuleRemoveSub(data) {
  const res = await post('/manageapi/devicepart/remove_sub', data)
  return res
}