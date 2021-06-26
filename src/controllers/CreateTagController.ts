import {Request, Response} from "express";
import {CreateTagServices} from "../services/CreateTagServices";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const {name} = request.body;
        const createTagServicec = new CreateTagServices();
        const tag = await createTagServicec.execute(name);
        return response.json(tag)
    }
}

export {
    CreateTagController
}