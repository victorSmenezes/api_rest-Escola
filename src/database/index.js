import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import databaseConfig from '../config/database';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
