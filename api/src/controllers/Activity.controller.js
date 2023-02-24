const { Activity, Country } = require('../db');
const {Op} = require('sequelize');

const postActivity = async(req, res, next) => {
    const { name, dificulty, duration, season, countriesName} = req.body
    try {
        console.log(req.body)
        if(name&&dificulty&&duration&&season&&countriesName){
            const activity={
                name,
                dificulty,
                season,
                duration,
            }
            let createdActivity = await Activity.create(activity)
            let infoCountriesName = await Country.findAll({
                where:{
                    name:{
                    [Op.in]:countriesName
                }
            }})
            infoCountriesName?.map(a=>a.addActivity(createdActivity))
            if(createdActivity)res.json({message: "Se creo correctamente la Actividad", data: createdActivity})
            else res.json({message: "Error, no se obtuvieron suficientes datos"})
        }
    } catch (error) {
        next(error)
    }
}
const ActivtyDelete = async (req, res, next)=> {
    
    const {ActivityId} = req.query
    console.log(ActivityId)
    let activityDelete = await Activity.findByPk(ActivityId)
    activityDelete ? await activityDelete.destroy(ActivityId) : res.status(404).json({msg: "No existe ese ID"})
    res.json({msg: "Se borro Correctamente"})
}


module.exports = {
    postActivity,
    ActivtyDelete
}