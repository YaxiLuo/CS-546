import postDataFunctions from './posts.js';
import userDataFunctions from './users.js';

export const userData = userDataFunctions;
export const postData = postDataFunctions;
// 一次性import然后export两个function，方便之后引用