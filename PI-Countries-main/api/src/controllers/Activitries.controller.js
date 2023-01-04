const { Activity, Country } = require('../db');
const {Op} = require('sequelize');

const postActivity = async(req, res, next) => {
    const { name, dificulty, duration, season, countriesName} = req.body
    try {
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

module.exports = {
    postActivity
}