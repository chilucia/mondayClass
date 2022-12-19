import data from '../model/model.js';

export const allTeams = async (req,res) => {
    try{
        const teams = await data.findAll()
res.status(200).json({
    data:teams
})
    }catch(e){
        console.log(e.message)
    }
};


export const getOneTeam = async(req,res) => {
    try{
        const id = req.params.id;
        const team = await data.findAll({where: {id:id}})
        res.status(200).json({
                data:team
            })
    }catch(error){
        console.log(error.message)
    }
};

export const updateTeam = async(req,res) => {
    try{
        const id = req.params.id;
        const footballer = await data.update(req.body,{where: {id:id}})
        if (req.body.numberOfPlayers >=22 && req.body.numberOfPlayers <=25 ){
        console.log('footballer updated successfully')
        res.status(200).json({
            data:footballer
        })
        }else{
        res.status(404).json({
            message:"error updating player"
        })
        }
        
        }catch(error){
            console.log(error.message)
        }
        }
    
    


export const deleteTeam= async(req,res) => {
    try{
        const id = req.params.id;
        const baller = await data.destroy({where: {id:id}})
        res.status(200).json({
            message: `baller with ${id} has been deleted`
        })
    }catch(error){
        console.log(error.message)
    }
};
