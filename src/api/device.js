import { post } from '@/utils/request'
import { isExist } from '@/utils/validate'
/**
 * 触发器列表
 *
 */
// 获取触发器列表
export async function searchDevice(data) {
  data.status = isExist(data.status) ? data.status : undefined
  const res = await post('/manageapi/device/search', data)
  const res1 = {
    code: 0,
    data: {
      result_list: [{ id: 2, name: 1, url: '222222222222222', status: 1 }]
    }
  }
  return res
}
// 添加触发器
export async function addDevice(data) {
  const res = await post('/manageapi/device/add', data)
  return res
}
// 修改触发器
export async function editDevice(data) {
  const res = await post('/manageapi/device/edit', data)
  return res
}
// 删除触发器
export async function deleteDevice(data) {
  const res = await post('/manageapi/device/remove', data)
  return res
}

// 删除触发器
export async function DeviceGetByIds(data) {
  const res = await post('/manageapi/device/get_by_ids', data)
  return res
}
