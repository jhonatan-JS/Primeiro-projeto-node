import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UserController from '../controllers/UsersControlle';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticade from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

userRouter.post('/', userController.create);

userRouter.patch(
    '/avatar',
    ensureAuthenticade,
    upload.single('avatar'),
    userAvatarController.update,
);

export default userRouter;
