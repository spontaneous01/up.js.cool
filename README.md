# up.js.cool

Node.js 版本要求： ***>= 7.6.0***

## 安装

`config` 目录下的 `*.dev.*` 为配置文件范例，新建对应的 `*.prod.*` 配置文件。

新建 `MySQL` 表：

```sql
CREATE TABLE `data` (
  `user` char(16) NOT NULL DEFAULT '' COMMENT '用户',
  `active` int(3) unsigned NOT NULL COMMENT '活跃时间（秒）',
  `efficiency` decimal(5,2) NOT NULL COMMENT '效率（%）',
  `date` int(10) unsigned NOT NULL COMMENT '数据时间（转时间戳）',
  KEY `whereorder` (`user`,`date`),
  KEY `date` (`date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```

注意将 `Nginx` 的配置文件加入到服务中。

CertBot 签发 SSL 证书教程： <>

```bash
yarn
# 或
npm i 
```

## 运行

* Redis 服务
* MySQL 服务
* Nginx 服务\*

## 命令

本地测试：

```bash
# 启动Web服务
npm run dev:server
# 启动计划任务
npm run dev:crontab
# 启动静态文件存储
npm run dev:cdn
```

## 定时任务

1. 每周一凌晨两点更新 SSL 证书
2. 每天凌晨1点清空30天之前历史数据
3. 每天凌晨0点清除采集计时器
4. 间隔50-70秒（随机）采集每个用户的数据

## TODO List

* 图表优化
* 加入联系方式
* 部署教程

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
