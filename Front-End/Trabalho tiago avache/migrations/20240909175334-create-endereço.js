

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos',{
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
  });
},
down: async (queryInterface, Sequelize) =>{
  await queryInterface.dropTable('enderecos');
}
};
    