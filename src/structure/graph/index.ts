import Dictionay from './dict'
import Queue from 'structure/queue'

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

  bfs(initV: string, handler: (v: string) => void) {
    const colors = this.initializeColor()

    const queue = new Queue()

    queue.addQueue(initV)

    while (!queue.isEmpty()) {
      const v = queue.removeQueue()

      const vList = this.edges.get(v)!
      colors[v] = 'gray'

      for (let i = 0; i < vList.length; i++) {
        const e = vList[i]
        if (colors[e as any] === 'white') {
          queue.addQueue(e)
        }
      }

      handler(v)
      colors[v] = 'black'
    }
  }
}
