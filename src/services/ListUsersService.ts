import {getCustomRepository} from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";
import {classToPlain} from "class-transformer";

class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const allUsers = usersRepositories.find();
        return classToPlain(allUsers);
    }
}

export {
    ListUsersService
}