const { Router } = require("express");
const CalendarDAO = require('../daos/calendars');
const router = Router();

router.get("/", async (req, res, next) => {
  try {
      const calendars = await CalendarDAO.getAllCalendars();
      res.json(calendars);
    } catch(e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const calendar = await CalendarDAO.getById(req.params.id);
    if (calendar ) {
      res.json(calendar);
    } else {
      res.sendStatus(404);
    }
  } catch(e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const calendar = await CalendarDAO.getById(req.params.id);
    if (calendar) {
      res.sendStatus(200);
      return await CalendarDAO.deleteById(req.params.id);
    } else {
      res.sendStatus(404);
    }
  } catch(e) {
    next(e);
  }
});

router.put("/:id", async(req,res,next) => {
  try{
    const calendar = await CalendarDAO.getById(req.params.id);
    calendarName = req.body.name;
    if(calendar){
      updateCalendar = await CalendarDAO.updateById(req.params.id, req.body.name);
      if(updateCalendar.body !=null && updateCalendar.body.name !=="{}"){res.json(updateCalendar);}
      else{return res.sendStatus(400)}
      next();
    } else if(req.body.name ==null ){
      return res.sendStatus(400);
    } else return res.sendStatus(404);
  } catch (e) {

router.post("/", async (req,res,next) => {
  //POST /calendars - creates a calendar using the JSON in the request body
  try{

  } catch(e) {
    next(e);
  }
});

router.put("/:id", async (req,res,next) => {
//PUT /calendars/:id - updates calendar with the provided id to have the data in the request body
  try{

  } catch(e) {

    next(e);
  }
});

router.post("/", async (req, res, next)=>{
  try{
    const calendarName = req.body.name;
    if(calendarName){
      res.sendStatus(200);
      return await CalendarDAO.create(req.body);
    } else{
      return res.sendStatus(400).send("Name is Missing");
    }
  } catch(e) {

  }
});

module.exports = router;

router.delete("/:id", async (req,res,next) => {
//DELETE /calendars/:id - deletes a calendar with the provided id
  try{

  } catch(e) {
    next(e);
  }
});

router.get("/", async (req,res,next) => {
//GET /calendars - returns an array of all calendars
  try{

  } catch(e) {
    next(e);
  }
});

module.exports = router;
