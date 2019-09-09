import User from '../model/user'
import Task from '../model/task'

export function index(req, res) {

    return res.status(200).json({"message": 'user controller'});
}


