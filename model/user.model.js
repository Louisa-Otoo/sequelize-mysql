import { DataTypes } from "sequelize";
// const sequelize = new Sequelize('mysql');
import sequelize from "../config/db.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'other']
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: "Nungua"
    },
    literate: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: true   
})

// this user is the variable and not the model
// await User.sync({ force: true });
await User.sync();
console.log('The table for the user model was just (re)created!')

export default User;