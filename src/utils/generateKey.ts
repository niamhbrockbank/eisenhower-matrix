export default function generateKey(pre: string):string {
    const newKey = `${pre}_${new Date().getTime()}`
    console.log(newKey)
    return newKey
  }