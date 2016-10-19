// Grid Illumination
let checkIllumination = function (N, lamps, queries) {
  let result = []
  queries.forEach(function (query) {
    let i = query[0]
    let j = query[1]
    let flag = false

    for (let k = 0; k < lamps.length; k++) {
      let ii = lamps[k][0]
      let jj = lamps[k][1]

      // turn off
      if (ii >= i - 1 && ii <= i + 1 && jj >= j - 1 && jj <= j + 1) {
        continue
      }

      if (ii === i || jj === j || (ii - i === jj - j) || (ii + jj === i + j)) {
        flag = true
        break
      }
    }

    flag ? result.push('LIGHT') : result.push('DARK')
  })

  return result
}

console.log(checkIllumination(8, [[4, 3], [4, 4]], [[3, 4], [7, 6]]))
