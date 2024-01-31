class Pessoa {
    private tipo_de_escamas: string;

    constructor(tipo_de_escamas: string) {
        this.tipo_de_escamas = tipo_de_escamas;
    }

    /**
     * Retorna o tipo de escamas da pessoa
     * 
     * @returns tipo_de_escamas : tipo de escamas da pessoa
     */
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Atribui o parâmetro ao tipo de escamas
     * 
     * @param _tipo_de_escamas : tipo de escamas da pessoa
     */
    public setTipoDeEscamas(_tipo_de_escamas: string): void {
        this.tipo_de_escamas = _tipo_de_escamas;
    }
}

// Exemplo de uso
const pessoa = new Pessoa('Espinhas'); // Tipo de escamas inicial: Espinhas
console.log(pessoa.getTipoDeEscamas()); // Saída: Espinhas

pessoa.setTipoDeEscamas('Suaves'); // Atualizando o tipo de escamas para Suaves
console.log(pessoa.getTipoDeEscamas()); // Saída: Suaves