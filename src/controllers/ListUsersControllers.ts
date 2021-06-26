import {Request, Response} from "express";
import {ListUsersService} from "../services/ListUsersService";

class ListUsersControllers {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUsersService();
        const users = await listUserService.execute();
        return response.json(users);
    }
}

export {
    ListUsersControllers
}