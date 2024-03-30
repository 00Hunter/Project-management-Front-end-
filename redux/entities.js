import project from "./project";
import task from './tasks/tasks'

import { combineReducers } from "redux";

export default combineReducers({
    Task:task,
    Project:project
})
