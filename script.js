let arr = [{
    id: 1,
    name: 'john',
    age: 18,
    profession: 'developer'
},
    {
        id: 2,
        name: 'jack',
        age: 20,
        profession: 'developer'
    },
    {
        id: 3,
        name: 'karen',
        age: 19,
        profession: 'admin'
    },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  for(let employee of arr) {
    if (employee.profession == "developer") {
      console.log(employee)
    }
  }
    //Write your code here , just console.log
}

function addData() {
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr)
        //Write your code here, just console.log
    }

    function removeAdmin() {
        //Write your code here, just console.log
        for(let i in arr) {
          if (arr[i].profession == "admin") {
           arr.splice(i, 1)
            break;
          }
        }
        console.log(arr)
    }

    function concatenateArray() {
        //Write your code here, just console.log
        const obj = [
          {
    id: 1,
    name: 'john',
    age: 18,
    profession: 'developer'
},
    {
        id: 2,
        name: 'jack',
        age: 20,
        profession: 'developer'
    }
        ];
        
        // we can use spread oprater
        // but that will change oringinal Referenced array, and create new one
        // that is why we can push one by one
        obj.forEach(e => arr.push(e))
    }

    // Here is an example of how functions work,
    // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
    // If I have a function called consoleArr(), that can directly access arr like this to console it.

    function consoleArr() {
        console.log('Consoling Array Variable', arr);
        // Over here I can directly access the variable.
    }