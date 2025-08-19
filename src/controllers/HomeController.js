import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Victor',
      sobrenome: 'Santos',
      email: 'victor@santos.com',
      idade: 42,
      peso: 90,
      altura: 1.9,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
