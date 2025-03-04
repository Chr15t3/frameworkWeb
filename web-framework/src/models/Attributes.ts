export class Attributes<T> {
  constructor(private data: T) {}

  //Keyof garante que o propName só possa ser uma dessas chaves.
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T): void {
    //Diz: "pegue os dados do update e substitua as propriedades nesses dados this.data"
    Object.assign(this.data, update)
  }
  getAll(): T {
    return this.data
  }
}
