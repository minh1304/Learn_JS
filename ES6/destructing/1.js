//Arr matching 
    // var list =[1 , 2, 3];
    // var [a,b,c] = list;
    // [a,c] = [c,a]
    // console.log(a);
    // console.log(b);
    // console.log(c);
// Matching object 
    var getobj =() =>{
        return {        name: "Võ Tuấn Minh",
        age: 21,
        id: 19521858,};

    };

    var {name,age,id} = getobj();
    console.log(name);