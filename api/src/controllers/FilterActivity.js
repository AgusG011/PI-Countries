const Router = require("express")
const {Country_Activity} = require("../db")

const FilterActivity = Router()

FilterActivity.get("/", async (req, res, next) => {
    let CountriesActivities = await Country_Activity.findAll()
    res.send(CountriesActivities)
})

module.exports = FilterActivity