import { Animal } from "./Animal";

export class Atracao{
   
    private nome_zoologico: string;
    private lista_animais: Array<Animal>;

    constructor( _nome_zoologico: string, _lista_animais: Array<Animal>){
        this.nome_zoologico = _nome_zoologico
        this.lista_animais = _lista_animais
    }
    /**
     * Retorna o nome do zoologico
     *
     * @returns nome_zoologico : nome do zoologico
     */
    public getNomezoologico(): string {
        return this.nome_zoologico;
    }

    /**
     * Atribui o parâmetro ao atributo nome_zoologico
     *
     * @param _nome_zoologico : nome do zoologico
     */
    public setNomezoologico(_nome_zoologico: string): void {
        this.nome_zoologico = _nome_zoologico;
    }

    /**
     * Retorna a lista de animais do zoologico
     *
     * @returns lista_animal : lista de animais do zoologico
     */
    public getListaAnimal(): Array<Animal> {
        return this.lista_animais;
    }

    /**
     * Atribui o parâmetro à lista de animais do zoologico
     *
     * @param _lista_animal : lista de animais do zoologico
     */
    public setListaAnimal(_lista_animal: Array<Animal>): void {
        this.lista_animais = _lista_animal;
    }
}