import fs from 'fs'

export const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
