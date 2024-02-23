export class Task{
  public id: number;
  public name: string;
  public autor: string;
  public estate: number;
  public description: string;

  constructor(id: number, name: string, autor: string, estate: number, desc: string){
    this.id = id;
    this.name = name;
    this.autor = autor;
    this.estate = estate;
    this.description = desc;
  }
}
