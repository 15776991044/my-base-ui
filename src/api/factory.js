import { post } from '@/utils/request'
import { isExist } from '@/utils/validate'
/**
 * 触发器列表
 *
 */
// 获取触发器列表
export async function searchFactory(data) {
  data.status = isExist(data.status) ? data.status : undefined
  const res = await post('/manageapi/factory/search', data)
  const res1 = {
    code: 0,
    data: {
      result_list: [{ id: 2, name: 1, url: '222222222222222', status: 1 }]
    }
  }
  return res
}
// 添加触发器
export async function addFactory(data) {
  const res = await post('/manageapi/factory/add', data)
  return res
}
// 修改触发器
export async function editFactory(data) {
  const res = await post('/manageapi/factory/edit', data)
  return res
}
// 删除触发器
export async function deleteFactory(data) {
  const res = await post('/manageapi/factory/remove', data)
  return res
}
