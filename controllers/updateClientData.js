const Client = require('../models/client')

const updateClientData = async(req,res)=>{
    try {

        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(400).json({
                success:false,
                message:"Please provide data to update"
            })
        }

        const updatedClient = await Client.findByIdAndUpdate(
            req.params.id,
            req.body
          
        )

        if(!updatedClient){
            return res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Update successful"
           
        })

    } catch(err){
        return res.status(500).json({
            success:false,
            message:"Invalid ID"
        })
    }
}

module.exports = {updateClientData}