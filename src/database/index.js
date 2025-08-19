import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import databaseConfig from '../config/database';

const models = [Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
