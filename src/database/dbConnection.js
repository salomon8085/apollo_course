const {connect}= require("mongoose");


const connectDB= async() => {
    try {
        //connect("mongodb://localhost/tasksdb_30");
        connect(process.env.MONGO_URI);
        console.log("MongoDB is connect")
    } catch (error) {
        console.error(error);
    }
};

module.exports={connectDB};


