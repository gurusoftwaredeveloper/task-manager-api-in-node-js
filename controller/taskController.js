const taskModel = require("../models/taskModel");
const { createCoustomError } = require("../middleware/coustomError")
const asyncWapper = require("../middleware/asyncWapper")

exports.getAllTask = asyncWapper(async(req,res) => {
    const allTask = await taskModel.findAll();
    console.log(allTask)
    
    
    res.status(200).json({ msg: allTask })
    })

exports.getSingleTask = asyncWapper(async (req, res, next) => {
    console.log(req.params)
    const { id } = req.params;
    console.log(id)
    if(!id){
        return next(createCoustomError("Not Found",404))
    }
    const singleTask = await taskModel.findOne({
        where:{
            id:id
        }
    })
    res.status(200).json({msg:singleTask})
})

exports.createTask = asyncWapper(async (req, res, next) => {
    console.log(req.body)
    const { title, description, status } = req.body;
    if (title === '' || description === '') { 
        return next(createCoustomError("Title And Description Not be Empty",404))
    }
    const task = await taskModel.create({
        title: title,
        description: description,
        status: status
    })
    await task.save();
    res.status(201).json({msg : "Task Created SuccessFully"})
})

exports.UpdateTask = asyncWapper(async (req, res, next) => {
    const { id } = req.params;
    if (!id) { 
        return next(createCoustomError("Not Valid Task Id",404))
    }
    const { title, description, status } = req.body;
    console.log(req.body)
        if (title === '' || description === '') { 
            return next(createCoustomError("Title And Description Not be Empty",404))
        }
    const updateTask = await taskModel.update({
        title: title,
        description: description,
        status: status
        },{ where: {
            id:id
            }
        })
    if (!updateTask) { 
        return next(createCoustomError("Not Update Try Agan",404))
    }
    res.status(200).json({msg:"Task Updated"})
})

exports.DeleteTask = asyncWapper(async(req,res,next) => {
    const { id } = req.params;
    if (!id) { 
        return next(createCoustomError("Not Valid Task Id",404))
    }
    const deletetask = await taskModel.destroy({
        where: {
            id:id
        }
    })
    console.log(deletetask)
    res.status(200).json({msg:"Task Deleted"})
}
)
