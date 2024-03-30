import { createSlice } from "@reduxjs/toolkit";
// import { defaultThemesByVersion } from "react-native-paper/lib/typescript/core/theming";
let lastid=0;

const slice =createSlice({
    name:"Tasks",
        initialState:[],

        reducers:{
            
            addTasks:(state,action)=>{
                state.push({
                    id:++lastid,
                    ProjectName:action.payload.ProjectName,
                    Task:action.payload.Task,
                    Completed:action.payload.Completed,
                })
                console.log(state);
            },
            removeTasks:(state,action)=>{
                // console.log(action.payload.id)
                return state.filter((task)=>task.id!=action.payload.id);
            },
            UpdateTasks:(state,action)=>{
                // console.log(action.payload.id)
                const index=state.findIndex((task)=>task.id==action.payload);
                // console.log(index)
                 state[index].Completed=true;
                 return;
            }
        }
})

export const {addTasks,removeTasks,UpdateTasks}=slice.actions;
export default slice.reducer;
