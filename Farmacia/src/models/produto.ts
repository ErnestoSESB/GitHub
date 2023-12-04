export class produto{
    private _nome: string
    private _id: string
    private _preco: string

    constructor(nome:string, id:string, preco:string){
        this._id = id
        this._nome = nome
        this._preco = preco
    }
    public get preco(): string {
        return this._preco
    }
    public set preco(Preco: string) {
        this._preco = Preco
    }
    public get id(): string {
        return this._id
    }
    public set id(ID: string) {
        this._id = ID
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(NOME: string) {
        this._nome = NOME
    }
}
