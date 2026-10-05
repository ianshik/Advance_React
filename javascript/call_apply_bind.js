const user = {
    name : "anshik" ,
    age : 20 ,
    school : "pioneer"
};

function xyz  (arg1,arg2) {
    console.log(this.name, "check",arg1,arg2);
}

xyz.call(user,user.age,user.school);  //arg 1=20 , arg2 =pioneer passed & (this = user) 

xyz.apply(user,[user.school,user.age]);

const newfxn =xyz.bind(user);

newfxn(user.school,user.name);
