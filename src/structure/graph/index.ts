import Dictionay from './dict'

export default class Graph {
  vertexes: unknown[]
  edges: Dictionay

  constructor() {
    this.vertexes = []
    this.edges = new Dictionay()
  }
}