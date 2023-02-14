const mongoose = require('mongoose')

const allMembersClientAttendenceRegSchema = mongoose.Schema(
    {
        Sr_No:{
            type: Number,
            required:true
        },
        Client_Name:{
            type:String,
            required:[true,"Please enter a client name"],
        },
        Mobile:{
            type:Number,
            required:[true,"Please enter a services name"]
        },
        Services:{
            type: String,
            required:true
        },
        Package:{
            type: String,
            required:true
        },
        Days:{
            type: String,
            required:true
        },
        StartDate:{
            type: String,
            required:true
        },
        EndDate:{
            type: String,
            required:true
        },
       

    },
    
)

const AllMembersClientAttendenceReg = mongoose.model('AllMembersClientAttendenceReg', allMembersClientAttendenceRegSchema);


module.exports = AllMembersClientAttendenceReg;