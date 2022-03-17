const Task =require("../database/models/Task");

const resolvers={
    Query: {
        ping(){
            return("Pong!");
        },
        getAllTasks:async ()=>{
           const tasks=await Task.find();
           return tasks;
        },
        async getTask(parent, args, context, info){
            const {id}=args;
            console.log("Get task whit id: ", id);
            const task= await Task.findById(id);
            return task;
        }
    },
    Mutation:{
        async createTask (parent, args, context, info){
         const {title, description}= args;
         const newTask= new Task({
             title:title,
             description:description
         });  
         await newTask.save(); 
         return newTask;
        },
        async deleteTask(parent, args, context, info ){
            const {id}=args;
            console.log("Delete task whit id: ",id);
            const deleteTask=Task.findByIdAndDelete(id);
            return deleteTask;
        },
        async updateTask(parent, args, context, info){
            const {id, task}=args;
            console.log("Update task whit id: ",id,"\nAnd the task:  ",task);
            const updateTask=Task.findByIdAndUpdate({_id:id},
            {
                $set:task
            },
            {
             new: true   
            }
            );
            return updateTask;
        }
    }
}

module.exports= {resolvers};