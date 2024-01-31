class Ave extends Animal {
    private envergadura: number;
    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
      * Retorna a envergadura da pessoa
      *
      * @returns envergadura : envergadura da pessoa
      */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Atribui o parâmetro à envergadura
     *
     * @param _envergadura : envergadura da pessoa
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}