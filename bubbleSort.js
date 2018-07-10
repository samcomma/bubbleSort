function bubbleSort(arr, fn = () => {}) {
	for (var i = 0; i < arr.length; i++) {
		let sorted = true
		for (var j = 0; j < arr.length; j++) {
			if (typeof arr[j] !== 'undefined' && typeof arr[j + 1] !== 'undefined') {
				fn()
				if (arr[j] > arr[j + 1]) {
					sorted = false
					const temp = arr[j]
					arr[j] = arr[j + 1]
					arr[j + 1] = temp
				}
			}
		}
		if (sorted) {
			return arr
		}
	}
	return arr
};


module.exports = bubbleSort;
