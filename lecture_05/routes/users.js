import {Router} from 'express';
const router = Router();
import {userData} from '../data/index.js';
import validation from '../data/validation.js';

router
  .route('/:id') //定义了一个新的路由，其中的 :id 是一个路由参数，表示该部分的值可以变化。
  .get(async (req, res) => {
    try {
      req.params.id = validation.checkId(req.params.id);
      const user = await userData.getUserById(req.params.id);
      res.json(user);
    } catch (e) {
      res.status(404).json(e);
    }
  })
  .post(async (req, res) => {
    res.send(`POST request to http://localhost:3000/users/${req.params.id}`);
  })
  .delete(async (req, res) => {
    res.send(`DELETE request to http://localhost:3000/users/${req.params.id}`);
  });

router
  .route('/') //使用 router 对象（来自 Express）定义了一个新的路由，其路径为 '/'。这通常代表一个应用或服务的根路径。
  .get(async (req, res) => {
    try {
      const userList = await userData.getAllUsers();
      res.json(userList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  })
  .post(async (req, res) => {
    // Not implemented
    res.send('POST request to http://localhost:3000/users');
  })
  .delete(async (req, res) => {
    // Not implemented
    res.send('DELETE request to http://localhost:3000/users');
  });

export default router;
