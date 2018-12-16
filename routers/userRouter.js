import express from 'express';
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.sen("Users"));
userRouter.get(routes.userDetail, (req, res) => res.sen("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.sen("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) => res.sen("Change Password"));

export default userRouter;