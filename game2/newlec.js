class Context{
    #enemies;
    constructor(){
        this.#enemies = null;

    }
        set enemies(value){
            this.#enemies=value;
        }
    
        get enemies(){
            return this.#enemies;
        }


}

export default new Context()