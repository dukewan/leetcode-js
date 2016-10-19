// Grid Illumination
// better performance
let checkIllumination = function (N, lamps, queries) {
  let X = new Map(),
    Y = new Map(),
    XAY = new Map(),
    XMY = new Map(),
    LAM = new Map(),
    result = []

  for (let i = 0; i < lamps.length; i++) {
    let lamp = lamps[i],
      x = lamp[0],
      y = lamp[1],
      xay = x + y,
      xmy = x - y

      X.has(x) ? X.set(x, X.get(x) + 1) : X.set(x, 1)
      Y.has(y) ? Y.set(y, Y.get(y) + 1) : Y.set(y, 1)
      XAY.has(xay) ? XAY.set(xay, XAY.get(xay) + 1) : XAY.set(xay, 1)
      XMY.has(xmy) ? XMY.set(xmy, XMY.get(xmy) + 1) : XMY.set(xmy, 1)

      if (LAM.has(x)) {
        let arr = LAM.get(x)
        arr.push(y)
        LAM.set(x, arr)
      } else {
        LAM.set(x, [y])
      }
  }
  
  for (let k = 0; k < queries.length; k++) {
    let query = queries[k],
      x = query[0],
      y = query[1]

    // turn off
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i > 0 && i <= N && j > 0 && j <= N) {
          if (LAM.has(i)) {
            let arr = LAM.get(i)
            if (arr.indexOf(j) != -1) { // this cordinate has a lamp
              X.set(i, X.get(i) - 1)
              Y.set(j, Y.get(j) - 1)
              XAY.set(i + j, XAY.get(i + j) - 1)
              XMY.set(i - j, XMY.get(i - j) - 1)
            }
          }
        }
      }
    }

    // check
    if (X.get(x) > 0 || Y.get(y) > 0 || XAY.get(x + y) > 0 || XMY.get(x - y) > 0) {
      result.push('LIGHT')
    } else {
      result.push('DARK')
    }

    // turn on
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i > 0 && i <= N && j > 0 && j <= N) {
          if (LAM.has(i)) {
            let arr = LAM.get(i)
            if (arr.indexOf(j) != -1) {
              X.set(i, X.get(i) + 1)
              Y.set(j, Y.get(j) + 1)
              XAY.set(i + j, XAY.get(i + j) + 1)
              XMY.set(i - j, XMY.get(i - j) + 1)
            }
          }
        }
      }
    }
  }
  
  return result
}

console.log(checkIllumination(8, [[4, 3], [4, 4]], [[3, 4], [7, 6]]))
console.log(checkIllumination(8, [[1, 6], [5, 6], [7, 3], [3, 2]], [[4, 4], [6, 6], [8, 1], [3, 2], [2, 3]]))