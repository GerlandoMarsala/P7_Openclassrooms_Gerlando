import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Create";

exports.create = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.insertUser(request.body, connection)
                .then(result => {
                    result ? results.sendStatus(200) : results.sendStatus(400);
                })
        })

}
