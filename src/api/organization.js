import { post } from '@/utils/request'
import { isExist } from '@/utils/validate'
/**
 * 触发器列表
 *
 */
// 获取触发器列表
export async function searchOrganization(data) {
  data.status = isExist(data.status) ? data.status : undefined
  const res = await post('/manageapi/organization/search', data)
  const res1 = {
    code: 0,
    data: {
      result_list: [{ id: 2, name: 1, url: '222222222222222', status: 1 }]
    }
  }
  return res
}
// 添加触发器
export async function addOrganization(data) {
  const res = await post('/manageapi/organization/add', data)
  return res
}
// 修改触发器
export async function editOrganization(data) {
  const res = await post('/manageapi/organization/edit', data)
  return res
}
// 删除触发器
export async function deleteOrganization(data) {
  const res = await post('/manageapi/organization/remove', data)
  return res
}

// 删除触发器
export async function OrganizationGetByIds(data) {
  const res = await post('/manageapi/organization/get_by_ids', data)
  return res
}
