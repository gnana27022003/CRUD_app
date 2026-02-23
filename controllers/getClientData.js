const Client = require('../models/client')
const getClientData = async(req,res)=>{
    try{
            const clients = await Client.find(req.query)
            if(clients.length===0){
                return res.status(404).json({
                    "message":"No clients found with status"
                })
            }
            return res.status(200).json({
                "success":true,
                clients
            })
        
        }catch(error){
        console.log(error)
        return res.status(500).json({
            "success":false,
            "message":"Internal server error"
        })
    }

}


module.exports = {getClientData}
