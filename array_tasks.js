var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		 arr.splice(index, 0, itemToAdd);
		 return arr;
	},

	square: function (arr) {
		var newArr = [];
		arr.forEach(function(num) {
			newArr.push(num * num);
		})
		return arr = newArr;
	},

	sum: function (arr) {
		 return sum = arr.reduce(function(a, b){
			return a + b;
		},0)
	},

	findDuplicates: function (arr) {
		var result = [];

		arr.forEach(function(number, index){
			if(arr.indexOf(number, index + 1) > -1){
				if(result.indexOf(number) === -1){
					result.push(number);
				}
			}
		});
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var clone = [];
		arr.forEach(function(num){
			if(valueToRemove !== num){
				clone.push(num);
			}
		})
		return arr = clone;
	},

	findIndexesOf: function (arr, itemToFind) {
		var index = [];
		for (var i = 0; i < arr.length; i++) {
			if( arr[i] === itemToFind){
				index.push(i)
			}
		}
		return index
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNum = arr.filter(function (num) {
			return num % 2 === 0;
		});
		var squareNum = this.square(evenNum)
			return this.sum(squareNum)
	}

}

module.exports = arrayTasks
