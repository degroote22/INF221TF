import HistoryManager from "../singletons/HistoryManager";

export const Home = "/";
export const MinhasReacoes = "/mreacoes";
export const MinhaConta = "/minhaconta";
export const MinhasAvaliacoes = "/mavaliacoes";
export const AvaliarDisciplina = "/avaliardisciplina";
export const Logoff = "/logoff";
export const Login = "/login";
export const LoginGo = () => {
  return {
    pathname: "/login",
    state: { from: HistoryManager.getRoute() }
  };
};
export const Listar = "/listar/:type(facil|util|recomendado)";
export const ListarFacil = "/listar/facil";
export const ListarUtil = "/listar/util";
export const ListarRecomendado = "/listar/recomendado";
export const Usuario = "/usuario/:id";
export const UsuarioGo = (id: string) => "/usuario/" + id;
export const Disciplina = "/disciplina/:id";
export const DisciplinaGo = (id: string) => "/disciplina/" + id;
