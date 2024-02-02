import { Animal } from "./Animal";

export class Mamifero extends Animal{
    private raca: string;
    constructor( _nome: string, _idade: number, _genero: string, _raca: string){
        super(_nome, _idade, _genero);
        this.raca = _raca
    }

    /**
     * Retorna a raça do animal
     *
     * @returns raca : raça do animal
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Atribui o parâmetro ao atributo animal
     *
     * @param _raca : raça do animal
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
}