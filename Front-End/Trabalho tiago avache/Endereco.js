const { Model, DataTypes } = require('sequelize');

class Endereco extends Model(), Endereco.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        Sequelize,
        modelName: 'Endereco',
        tabelName: 'enderecos', //define o nome da tabela no banco de dados
    }), module.exports, Endereco {
}
