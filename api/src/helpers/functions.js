// const bubbleSort = ary => ary.length ? ary.map(ary => ary.map((v, i) => (ary[i] > ary[i + 1]) ? [ary[i+1], ary[i] ] = [ary[i], ary[i+1]] : null )) ? ary : null : null
const bubbleSort = arr => arr.map(ary => arr.map((v, i) => (arr[i] > arr[i + 1]) ? [arr[i+1], arr[i] ] = [arr[i], arr[i+1]] : null )) ? arr : null

module.exports = {
  bubbleSort
}