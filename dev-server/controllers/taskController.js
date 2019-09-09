const validator = require('node-input-validator');
import User from '../model/user'
import Task from '../model/task'
import moment from 'moment';

export function index(req,res) {
    Task.find({},(error,tasks)=>{
        if(error){
            return res.status(500).json();
        }
        return res.status(200).json({tasks:tasks});
    });

}

export function create(req, res) {
    let id = 10;
    User.findOne({_id: id}, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        let task = new Task(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        task.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}