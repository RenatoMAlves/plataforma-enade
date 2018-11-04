import { environment } from '../../environments/environment';

export const API = environment.API;

export class Endpoinst {
    
    public static getResult = () => {
        return `${API}/resultados`;
    }

    public static getEstados = () => {
        return `${API}/estados`;
    }

    public static getAreas = () => {
        return `${API}/areas`;
    }

    public static getCursos = () => {
        return `${API}/cursos`;
    }
    
    public static getResultByCurso = (id_curso) => {
        return `${API}/resultados/${id_curso}`;
    }

    public static getResultByEstado = (sigla) => {
        return `${API}/resultados/${sigla}`;
    }

    public static getResultByAnoCurso = (ano, id_curso) => {
        return `${API}/resultados/${ano}/${id_curso}`;
    }

    public static getResultByAnoCursoAndArea = (ano, id_curso, id_area) => {
        return `${API}/resultados/${ano}/${id_curso}/${id_area}`;
    }
}