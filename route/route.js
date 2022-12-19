import express from 'express';
import {allTeams, getOneTeam, updateTeam, deleteTeam} from "../controller/controller.js";

const ballRouter = express.Router()

ballRouter.get('/football',allTeams);

ballRouter.get('/football/:id',getOneTeam);

ballRouter.patch('/football/:id',updateTeam);

ballRouter.delete('/football/:id',deleteTeam);

export default ballRouter;