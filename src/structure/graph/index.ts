import Dictionay from './dict'

export default class Graph {
  vertexes: string[] // 点
  edges: Dictionay // 边

  constructor() {
    this.vertexes = []
    this.edges = new Dictionay()
  }

  addVertex(v: string) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }

  addEdge(v1: string, v2: string) {
    this.edges.get(v1)?.push(v2)
    this.edges.get(v2)?.push(v1)
  }

  initializeColor() {
    const colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i] as any] = 'white'
    }
    return colors
  }
}
