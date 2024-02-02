import { Animal } from "./Animal";

export class Habitat{
   
    private nome_habitat: string;
    private lista_animais: Array<Animal>;

    constructor( _nome_habitat: string, _lista_animais: Array<Animal>){
        this.nome_habitat = _nome_habitat
        this.lista_animais = _lista_animais
    }
    /**
     * Retorna o nome do habitat
     *
     * @returns nome_habitat : nome do habitat
     */
    public getNomeHabitat(): string {
        return this.nome_habitat;
    }

    /**
     * Atribui o parâmetro ao atributo nome_habitat
     *
     * @param _nome_habitat : nome do habitat
     */
    public setNomeHabitat(_nome_habitat: string): void {
        this.nome_habitat = _nome_habitat;
    }

    /**
     * Retorna a lista de animais do habitat
     *
     * @returns lista_animal : lista de animais do habitat
     */
    public getListaAnimal(): Array<Animal> {
        return this.lista_animais;
    }

    /**
     * Atribui o parâmetro à lista de animais do habitat
     *
     * @param _lista_animal : lista de animais do habitat
     */
    public setListaAnimal(_lista_animal: Array<Animal>): void {
        this.lista_animais = _lista_animal;
    }
}