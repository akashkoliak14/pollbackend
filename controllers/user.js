const express = require("express");
const userModel = require("../models/user")

exports.createuser = async(req,res)=>{
    try{
        const newUser = new userModel(req.body)
        res.status(201).json(await newUser.save())
    }catch(err){
        res.status(500).json({error:err})
    }
}
exports.getAlluserinfo = async (req,res) => {
    try{
        const user = await userModel.find()
    res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}
exports.getuserinfo = async(req, res)=>{
    try{
        const user = await userModel.find({_id: req.params.userId})
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}