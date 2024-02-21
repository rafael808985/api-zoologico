import { globalAgent } from "http";
import { Animal } from "./Animal";
import { DatabaseModel } from "./Databasemodel";

const database = new DatabaseModel().pool;

/**
 * Representa um mamífero no zoológico, que é uma subclasse de Animal.
 */
export class Mamifero extends Animal {
    /**
     * A raça do mamífero.
     */
    private raca: string;

    /**
     * Cria uma nova instância de Mamifero.
     *
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     * @param _raca A raça do mamífero.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _raca: string) {
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    /**
     * Obtém A raça do mamífero.
     *
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Define A raça do mamífero.
     *
     * @param _raca A raça a ser atribuído ao mamífero.
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }

    static async listarMamiferos() {
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  mamifero;`);
            queryReturn.rows.forEach(mamifero => {
                listaDeMamiferos.push(mamifero);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeMamiferos);

            return listaDeMamiferos;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarMamifero(Mamifero: Mamifero): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${Mamifero.getNome().toUpperCase()}', ${Mamifero.getIdade()}, '${Mamifero.getGenero().toUpperCase()}', '${Mamifero.getRaca().toUpperCase()}');
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