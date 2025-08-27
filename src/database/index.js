import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import databaseConfig from '../config/database';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
