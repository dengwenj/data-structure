export function hashFunc(str: string, max: number) {
  let hashCode = 0

  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i)
  }

  hashCode = hashCode % max

  return hashCode
}
