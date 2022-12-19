import sequelize from "sequelize";
import db from '../config/config.js';
const {DataTypes} = sequelize;
const data = db.define("footBaller",{
nameOfTeam: {
    type: DataTypes.STRING
},
homeKitColor: {
    type: DataTypes.STRING
},
awayKitColor: {
    type: DataTypes.STRING
},
numberOfPlayers: {
    type: DataTypes.INTEGER
},
playerFirstName: {
    type: DataTypes.STRING
},
playerLastName: {
    type: DataTypes.STRING
},
playerAge: {
    type: DataTypes.INTEGER
},
playerCountry: {
    type: DataTypes.STRING
},
playerJerseyNumber: {
    type: DataTypes.INTEGER
},
playerSigningFee: {
    type: DataTypes.DOUBLE
},
clubOwnerName: {
    type: DataTypes.STRING
}
},{
    freezeTableName: true
});

export default data;