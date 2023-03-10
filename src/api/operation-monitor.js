import { get, publicPath } from '@/utils/request'

// 设备运营监测列表
export async function operationMonitorSearch(data) {
  const res = await get(`${publicPath}/json/operation-monitor/search.json`)
  return res
}

// 维修记录
export async function maintenanceRecordsSearch(data) {
  const res = await get(`${publicPath}/json/operation-monitor/maintenance-records.json`)
  return res
}

// 迁移记录
export async function migrationRecordsSearch(data) {
  const res = await get(`${publicPath}/json/operation-monitor/migration-records.json`)
  return res
}

// 选项集合
export async function selectOptsSearch(data) {
  const res = await get(`${publicPath}/json/operation-monitor/select-opts.json`)
  return res
}

// 设备流水监测列表
export async function flowSearch(data) {
  const res = await get(`${publicPath}/json/operation-monitor/flow-search.json`)
  return res
}

