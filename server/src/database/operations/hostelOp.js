const HostelSchema = require("../schema/schemaHostel");

const isValidHostelName = async function(name){
    let existingHostel =await  HostelSchema.findOne({hostelName: name});
    if(existingHostel)
        return true;
    else
        return false;
}

const createHostel = async function(data){
    const hostel = new HostelSchema({
        hostelName: data.hostelName,
        messMenu: data.messMenu,
        warden: data.warden,
        noOfStudents: 0
    })
    let response;
    await hostel.save().then(()=>{
        response = {status:400, data:{message:"Hostel created Sucessfully"}}
    }).catch((err)=>{
        response = {status:200,message:"The following error arose "+err}
    })
    return response;
}

module.exports = {isValidHostelName, createHostel}