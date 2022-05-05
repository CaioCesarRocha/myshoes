import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../instances/pg';


export interface ProductsInstance extends Model {
    id: number,
    name: string,
    old_price: number,
    new_price: number,
    free_freight: boolean,
    type: 'SHIRT' | 'PANT'| 'SHOES'
    img_product: string,
}

//INFORMAÇÕES NECESSÁRIS PRO SEQUELIZE "ENTENDER" A TABELA QUE SERÁ TRABALHADA
export const Product = sequelize.define<ProductsInstance>("Product", {
    id:{
        primaryKey: true,
        autoIncrement: true, //para nao precisar ser passado
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    old_price:{
        type: DataTypes.NUMBER,
    },
    new_price:{
        type: DataTypes.NUMBER,
    },
    free_freight:{
        defaultValue: true,
        type: DataTypes.BOOLEAN,
        set(value:boolean){  //value é o valor recebido para o campo freefreight
            this.setDataValue('free_freight', value) 
        }       
    },
    type:{
        type: DataTypes.STRING
    },
    img_product:{
        type: DataTypes.STRING
    }
},{ 
    tableName: 'products',
    timestamps: false, // false para entender que ainda nao tem, e assim criar o timestamps no banco
});


