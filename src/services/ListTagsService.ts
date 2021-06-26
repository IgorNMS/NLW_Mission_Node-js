import {getCustomRepository} from "typeorm";
import {TagsRepositories} from "../repositories/TagsRepositories";
import {classToPlain} from "class-transformer";

class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const allTags = await tagsRepositories.find();
        return classToPlain(allTags);
    }
}

export {
    ListTagsService
}