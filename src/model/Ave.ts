import { globalAgent } from "http";
import { Animal } from "./Animal";
import { DatabaseModel } from "./Databasemodel";

const database = new DatabaseModel().pool;

/**
 * Representa um ave no zoológico, que é uma subclasse de Animal.
 */
export class Ave extends Animal {
    /**
     * A envergadura da ave.
     */
    private envergadura: number;

    /**
     * Cria uma nova instância de ave.
     *
     * @param _nome O nome do ave.
     * @param _idade A idade do ave.
     * @param _genero O gênero do ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _envergadura: number) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
     * Obtém A envergadura da ave.
     *
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Define A envergadura da ave.
     *
     * @param _envergadura A envergadura a ser atribuído ao ave.
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }

    static async listarAves() {
        const listaDeAves: Array<Ave> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  ave;`);
            queryReturn.rows.forEach(ave => {
                listaDeAves.push(ave);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeAves);

            return listaDeAves;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarAve(Ave: Ave): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
                VALUES
                ('${Ave.getNome().toUpperCase()}', ${Ave.getIdade()}, '${Ave.getGenero().toUpperCase()}', ${Ave.getEnvergadura()});
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return insertResult;
        } catch(error) {
            return error;
        }
    }
}