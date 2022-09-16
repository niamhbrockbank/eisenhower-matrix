export default function generateKey(pre: string):string {
    const key = 1
    const newKey = `${pre}_${new Date().getTime()}`
    return newKey
  }