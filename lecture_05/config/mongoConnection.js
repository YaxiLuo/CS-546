import {MongoClient} from 'mongodb'; // 连接MongoDB的客户端。
import {mongoConfig} from './settings.js'; // 它可能包含数据库连接的配置信息，例如服务器的URL和数据库名称。

let _connection = undefined; // 用来存储数据库连接
let _db = undefined; //数据库实例

const dbConnection = async () => {
  if (!_connection) { //检查是否已经存在一个数据库连接
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    // 用MongoClient连接到在mongoConfig指定的服务器，
    _db = _connection.db(mongoConfig.database);
    // 获得数据库实例
  }

  return _db;// 返回数据库实例
};

const closeConnection = async () => {
  await _connection.close(); // 关闭现有的数据库连接
};

export {dbConnection, closeConnection};

