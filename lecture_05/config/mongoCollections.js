import {dbConnection} from './mongoConnection.js';

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = (collection) => {
  let _col = undefined; //先声明一个field _col

  return async () => {
    if (!_col) { // 如果collection不存在
      const db = await dbConnection(); // 连接MongoDB
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
export const posts = getCollectionFn('posts');
// get a collection named posts, but I think the posts collection has already existed in mongoDB
export const users = getCollectionFn('users');
