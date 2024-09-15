import Tasks from "../models/ToDoListModel.js";

export const getTasks = async (req, res) => {
    try {
        const response = await Tasks.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTasksById = async (req, res) => {
    try {
        const response = await Tasks.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTasks = async (req, res) => {
    try {
        await Tasks.create(req.body);
        res.status(201).json({ msg: "Tasks Berhasil Ditambah!" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTasks = async (req, res) => {
    try {
        await Tasks.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Data Tasks Berhasil Diubah!" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTasks = async (req, res) => {
    try {
        await Tasks.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Data Tasks Berhasil Dihapus!" });
    } catch (error) {
        console.log(error.message);
    }
}