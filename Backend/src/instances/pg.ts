import { Sequelize } from "sequelize"; 
import dotenv from 'dotenv';

import db from './database';

dotenv.config()

//CONECTANDO O SEQUELIZE ORM AO BANCO POSTGRES
export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.password,
    {
        dialect: 'postgres',
        port: parseInt(db.port) //transforma em number para o TS nao reclamar
    }
);