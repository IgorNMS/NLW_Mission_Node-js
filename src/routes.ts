import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlewares/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated";
import {ListUserSenderComplimentsController} from "./controllers/ListUserSenderComplimentsController";
import {ListUserReceiverComplimentsController} from "./controllers/ListUserReceiverComplimentsController";
import {ListTagsController} from "./controllers/ListTagsController";
import {ListUsersControllers} from "./controllers/ListUsersControllers";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersControllers();

router.post("/createUsers", createUserController.handle);
router.post("/createTags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, complimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/Users", ensureAuthenticated, listUsersController.handle);

export {
    router
}