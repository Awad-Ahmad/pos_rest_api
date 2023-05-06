const sequelize =require("../../config/database")
const Sequelize=require("sequelize")

const ProductUnit=sequelize.define("productUnit",{
    unitId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    unitName:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=ProductUnit