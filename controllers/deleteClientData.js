const Client = require('../models/client')
const deleteClientData = async(req,res)=>{
    try{
        const client = await Client.findByIdAndDelete(req.params.id);
        if(!client){
            return res.status(404).json({
                "success":false,
                "message":"Failed to delete no client found"
            })
        }
        return res.status(200).json({
            "success":true,
            "message":"client deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            "success":false,
            "message":"invalid ID"
        })
    }
}

module.exports = {deleteClientData}