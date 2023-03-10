/*
 * @Description:
 * @Date: 2021-09-02 15:01:54
 * @LastEditTime: 2021-10-26 14:39:16
 */
import { post } from '@/utils/request'

// 字典字段获取 -- 选项(待补充)
export async function getDictInfo(data) {
  data.is_active = true
  data.sort = 'asc'
  const res = await post('/dictionaryapi/get_dict_info', data)
  return res
}
