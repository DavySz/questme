export interface FindOneByEmail<R> {
  findOne: (path: string, email: string) => Promise<R>;
}
