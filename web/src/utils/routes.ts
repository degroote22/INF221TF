import HistoryManager from "../singletons/HistoryManager";

export const Home = "/";
export const MinhasReacoes = "/mreacoes";
export const MinhaConta = "/minhaconta";
export const MinhasAvaliacoes = "/mavaliacoes";
export const AvaliarDisciplina = "/avaliardisciplina/:id";
export const AvaliarDisciplinaGo = (id: string) =>
  AvaliarDisciplinaNoParam + "/" + id;
export const AvaliarDisciplinaNoParam = "/avaliardisciplina";
export const Logoff = "/logoff";
export const Cadastro = "/cadastro";
export const CadastroGo = () => Cadastro;
// export const CadastroGo = () => {
//   return {
//     pathname: Cadastro,
//     state: { from: HistoryManager.getRoute() }
//   };
// };
export const Login = "/login";
export const LoginGo = () => {
  return {
    pathname: Login,
    state: { from: HistoryManager.getRoute() }
  };
};
// export const Listar = "/listar/:type(facil|util|recomendado)";
// export const ListarFacil = "/listar/facil";
// export const ListarUtil = "/listar/util";
// export const ListarRecomendado = "/listar/recomendado";
export const Usuario = "/usuario/:id";
export const UsuarioGo = (id: string) => "/usuario/" + id;
export const Disciplina = "/disciplina/:id";
export const DisciplinaGo = (id: string) => "/disciplina/" + id;
