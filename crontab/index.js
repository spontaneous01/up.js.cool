const later = require('later');
const {users} = require('../config');
const {random} = require('../lib');
const {lastClear} = require('../model/data');
const crab = require('./crab');

users.forEach(async (x) => {
  // 每分钟抓取用户数据
  await crab(x);
  later.setInterval(async () => {
    await crab(x);
  }, later.parse.recur().every(random(50, 70)).second());
  // 每天获取统计数据
});

// 每天 0:00 清除计时器
later.setInterval(lastClear, later.parse.cron('0 0 */1 * * ?'));

// 每月 1 号 1:00 清除上一个月的数据
// later.setInterval(lastClear, later.parse.cron('0 1 1 * * ?'));
