import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controllers/UsersControlle';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticade from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.multer);

userRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    userController.create,
);

userRouter.patch(
    '/avatar',
    ensureAuthenticade,
    upload.single('avatar'),
    userAvatarController.update,
);

export default userRouter;
