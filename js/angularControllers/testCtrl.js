//console.log("Test test");

libraryApp.controller('testCtrl', function($scope) {
	var testList = this;
    var list = testList.list = [
    	{
    		name: "Terry" , age: 12
    	},
    	{
    		name: "Crews" , age: 34
    	},
    	{
    		name: "Victor", age: 1000
    	}
    ];

    testList.addPerson = function() {
		testList.list.push({name: testList.name, age: testList.age});
		testList.name = "";
		testList.age = 0;
    }

});