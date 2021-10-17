var cars = [
    {
        'make': 'audi',
        'model': 'r8',
        'year': '2012'
    }, {
        'make': 'audi',
        'model': 'rs5',
        'year': '2013'
    }, {
        'make': 'ford',
        'model': 'mustang',
        'year': '2012'
    }, {
        'make': 'ford',
        'model': 'fusion',
        'year': '2015'
    }, {
        'make': 'kia',
        'model': 'optima',
        'year': '2012'
    },
];


var cars = {
    'audi': [
        {
            'model': 'r8',
            'year': '2012'
        }, {
            'model': 'rs5',
            'year': '2013'
        },
    ],

    'ford': [
        {
            'model': 'mustang',
            'year': '2012'
        }, {
            'model': 'fusion',
            'year': '2015'
        }
    ],

    'kia': [
        {
            'model': 'optima',
            'year': '2012'
        }
    ]
}


/**Original Map */
const arr = [1,2,3,4,5,6,7,8,9]

let newArray = arr.map(function(element){
    return element = element*2;
})

console.log(newArray)

/**My Map */
Array.prototype.myMap = function(callback){
    let index=0;
    let newArray = [];
    for(let element of this){
        newArray.push(callback(element,index,this))
        index++;
    }
    return newArray;
}

let myMapNewArray = arr.myMap(function(element,index,a){
    console.log("index is " + index + " and array is " + a)
    return element=element*2;
})
console.log(myMapNewArray);

/**Original Filter */

const array = [2,4,6,8,9,65,443,234,1,34,3]

let filteredArray = array.filter(function(element,index,arr){
    return element%2==0;
})
console.log(filteredArray)

/**My Filter */

Array.prototype.myFilter = function(func){
    let newFilteredArray=[];
    this.forEach((element,index)=>{
        if(func(element,index,this)){
            newFilteredArray.push(element)
        }
    })
    return newFilteredArray;
}

let myFilteredArray = array.myFilter(function(element,index,a){
    return element%2==0;
})

console.log(myFilteredArray);

/**Actual Reduce Method */
const declaredArray = [1,2,3,4,5,6,7,8,9,10];

let reducedValue = declaredArray.reduce(function(curr,acc){
    acc+=curr;
    return acc;
},0)

console.log(reducedValue)

/**My reduced method */

Array.prototype.myreduce = function(func,total){
    if(this.length<1)
        return 0;
    if(!total){
        if(typeof this[0]==="string")
            total='';
        else if(typeof this[0]==="number")
            total=0;
    }
    this.forEach((element)=>{
        total =+ func(element,total)
    })
    return total;
}

let totalSum = declaredArray.myreduce((curr,total)=>{
    total+=curr;
    return total;
})

console.log(totalSum)