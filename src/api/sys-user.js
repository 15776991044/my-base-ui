/*
 * @Description:用户管理
 * @Date: 2021-12-13 10:47:42
 * @LastEditTime: 2021-12-16 19:20:38
 */

import { post } from '@/utils/request'
// 用户管理 --  列表
export async function getUserList(data) {
  const res = await post('/systemapi/get_user_list', data)
  return res
}

// 用户管理 --  添加
export async function addUser(data) {
  const res = await post('/systemapi/add_user', data)
  return res
}

// 用户管理 --  删除
export async function deleteUser(data) {
  const res = await post('/systemapi/delete_user', data)
  return res
}

// 用户管理 --  编辑
export async function editUser(data) {
  const res = await post('/systemapi/edit_user', data)
  return res
}

// 用户管理 --  启停
export async function modifyUserStatus(data) {
  const res = await post('/systemapi/modify_user_status', data)
  // const res = await post('/systemapi/modify_department_status', data )
  return res
}

// 用户管理 --  修改密码
export async function modifyPassword(data) {
  const res = await post('/systemapi/modify_password', data)
  return res
}

// 用户管理 --  重置密码
export async function resetPassword(data) {
  const res = await post('/systemapi/reset_password', data)
  return res
}

