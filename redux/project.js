import { createSlice } from "@reduxjs/toolkit";
// import { defaultThemesByVersion } from "react-native-paper/lib/typescript/core/theming";
let lastid=0;

const slice =createSlice({
    name:"Projects",
        initialState:[],

        reducers:{
            
            addProject:(state,action)=>{
                state.push({
                    id:++lastid,
                    Project:action.payload.Project,
                    DueDate:action.payload.DueDate,
                    Tags:action.payload.Tags,
                    Descrip:action.payload.Descrip,
                    Completed:action.payload.Completed,

                })
                console.log(state);
            },
            removeProject:(state,action)=>{
                // console.log(action.payload.id)
                return state.filter((task)=>task.id!=action.payload.id);
            },
            UpdateProject:(state,action)=>{
                // console.log(action.payload.id)
                const index=state.findIndex((task)=>task.id==action.payload);
                // console.log(index)
                 state[index].Completed=true;
                 return;
            }
        }
})

export const {addProject,removeProject,getCompleted,UpdateProject}=slice.actions;
export default slice.reducer;
