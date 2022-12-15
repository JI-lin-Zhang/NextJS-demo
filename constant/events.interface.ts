export interface IEventInterface {
    id: string,
    title: string,
    description:string,
    location: string,
    date: string,
    image: string,
    isFeatured: boolean,
}

export interface IDataFilter {
  year: number,
  month: number,
}