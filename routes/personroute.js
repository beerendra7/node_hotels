const express = require('express');
const router = express.Router();
const person = require('./../models/person')
router.get('/', async (req, res) => {
    try {
        const data = await person.find()
        console.log('fetched data ');
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })

    }


})
router.post('/', async (req, res) => {
    try {
        const data = req.body // assumin the req.body contain the person data
        const newperson = new person(data)
        // save new perso to database
        const response = await newperson.save()
        console.log('data saved ');
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })


    }
})
router.get('/:worktype',async(req,res)=>{
    try {
        const worktype=req.params.worktype;
        if(worktype=='chef'|| worktype=='waiter'||worktype=='manager'){
            const data = await person.find({work:worktype})
            console.log('respond fetched ');
            res.status(200).json(data)
        }else{
            res.status(404).json({error:"not found "})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:" internal server error"})
        
        
    }
})
router.put('/:id', async(req,res)=>{
   try {
    const personid = req.params.id;//extract the peron id from the url parameter
    const updatepersondata = req.body //update data for person
    // asuming you have person data 
    const response = await person.findByIdAndUpdate(personid,updatepersondata,{
        new:true, // reteun the update document
        runValidators:true, // run mongoose validation
    })
    if(!response){
        return res.status(404).json({error:'person not found'})
    }
    console.log('data updated');
    res.status(200).json(response)
    
   } catch (error) {
    console.log(error);
        res.status(500).json({error:" internal server error"})
    
   } 


})
router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
    const respond = await person.findByIdAndDelete(id);
    console.log('deleted id ');
    res.status(200).json(respond)
      if(!respond){
        return res.status(404).json({error:'person not found'})
      }
        
    } catch (error) {
         console.log(error);
        res.status(500).json({error:" internal server error"})
        
    }
    



})
module.exports = router;