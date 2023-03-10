import { post } from '@/utils/request'

// 新增设备型号
export async function addEquipModel(data) {
  const res = await post('/manageapi/devicemodel/add', data)
  return res
}
// 编辑设备型号
export async function editEquipModel(data) {
  const res = await post('/manageapi/devicemodel/edit', data)
  return res
}
// 删除设备型号
export async function removeEquipModel(data) {
  const res = await post('/manageapi/devicemodel/remove', data)
  return res
}
// 单个获取设备型号信息
export async function getEquipModel(data) {
  const res = await post('/manageapi/devicemodel/get', data)
  return res
}
// 获取设备型号信息
export async function equipModelSearch(data) {
  const res = await post('/manageapi/devicemodel/search', data)
  return res
}