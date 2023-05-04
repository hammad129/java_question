function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left - 1

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  ;[arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]

  return i + 1
}
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right)
    quicksort(arr, left, pivotIndex - 1)
    quicksort(arr, pivotIndex + 1, right)
  }
}
function removedup(arr) {
  let i = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      for (let j = i; j < arr.length; j++) {
        arr[j] = arr[j + 1]
      }
    }
  }
}
const arr = [3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12]
const n = arr.length
quicksort(arr, 0, n - 1)
removedup(arr)
console.log(arr)
