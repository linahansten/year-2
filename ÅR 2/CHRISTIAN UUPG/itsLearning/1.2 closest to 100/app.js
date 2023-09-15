test_array1 = [1, 55, 89, 44, 42, 87, 23, 29, 8]
test_array2 = [38, 49, 5, 6, 99, 2, 72, 11, 78]

function find_near_100() {
    //sortera array och välj första eller sista
    test_array1.sort(function (a, b) { return a - b })
    test_array2.sort(function (a, b) { return a - b })

    const found1 = test_array1.findLast((element) => element <= 100)
    const found2 = test_array2.findLast((element) => element <= 100)

    console.log(found1, found2)
}

console.log(find_near_100(test_array1, test_array2))

//Output: 89, 99