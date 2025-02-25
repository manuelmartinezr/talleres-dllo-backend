// Para este Taller no están permitidas
// Math.max
// Math.min
// Some
// Every
// Includes
// Sort
// Reduce
// Find
// FindIndex
// Filter
function findMax(nums){
    let max = nums[0]
    for (let num of nums){
        max = num > max ? num : max
    }
    return max
}
function includes(nums, wanted){
    if (!nums?.length) return false
    for (let num of nums){
        if (num === wanted) return true
    }
    return false
}
function sum(nums){
    let sum = 0
    for (let num of nums) sum += num
    return sum
}
function missingNumbers(nums){
    const min = findMin(nums)
    const max = findMax(nums)
    const missing_nums = []
    for (let i=min; i<= max; i++){
        if (!includes(nums, i)) missing_nums.push(i)
    }
    return missing_nums
}
function findMin(nums){
    let min = nums[0]
    for (let num of nums){
        min = num < min ? num : min
    }
    return min
}