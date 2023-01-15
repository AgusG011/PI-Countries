const Router = require("express")
const {Activity} = require("../db")

const ActivtyDelete = Router()

ActivtyDelete.delete("/", async (req, res, next)=> {
    const {ActivityId} = req.query
    let activityDelete = await Activity.findByPk(ActivityId)
    activityDelete ? activityDelete.destroy(ActivityId) : res.status(404).json({msg: "No existe ese ID"})
    res.json({msg: "Se borro Correctamente"})
})

module.exports = ActivtyDelete