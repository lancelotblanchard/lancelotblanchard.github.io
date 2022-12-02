/* eslint-disable no-useless-constructor */

export default class Project {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly subtitle: string,
    public readonly types: string[],
    public readonly date: string,
    public readonly imgUrl: string,
    public readonly content: string,
    public readonly href?: [string, string],
    public readonly themes?: string[],
  ) {
  }
}
