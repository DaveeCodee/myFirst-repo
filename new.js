/*
var johnMass = 40;
var johnHeight = 6.2;

var markMass = 60;
var markHeight = 8.2;

var jBMI = johnMass / (johnHeight * johnHeight);

var MBMI = markMass / (markHeight * markHeight);
console.log(jBMI, MBMI)
var isMarkHigh = MBMI > jBMI;

console.log('is mark\'s BMI higher than john?' + isMarkHigh);

var johnTeamPTS1 = 89;
var johnTeamPTS2 = 120;
var johnTeamPTS3 = 403;

var maryTeamPTS1 = 97;
var maryTeamPTS2 = 134;
var maryTeamPTS3 = 108;

var mikeTeamPTS1 = 116;
var mikeTeamPTS2 = 94;
var mikeTeamPTS3 = 123;
var maryAverage = (maryTeamPTS1+maryTeamPTS2+maryTeamPTS3) / 3;
var johnAverage = (johnTeamPTS1+johnTeamPTS2+johnTeamPTS3) / 3;
var mikeAverage = (mikeTeamPTS1+mikeTeamPTS2+mikeTeamPTS3) / 3;

if(johnAverage > mikeAverage){
    console.log('John\'s team has the highest average with:'+ johnAverage);
}
else if(mikeAverage > johnAverage){
    console.log('Mike\'s team has the highest average with:'+ mikeAverage);
}
else if(johnAverage === mikeAverage){
    console.log('Both team have the same average with:'+ johnAverage)
}

function tipCalculator(bill){
   var percentage;

   if(bill < 50){
   percentage = .5;
   }
   else if(bill >= 50 && bill < 200){
    percentage = .15;
   }
   else{
    percentage = .1;
   }
   return percentage * bill;
}
console.log(tipCalculator(120))

var bill = [124, 48, 268];
var tips =[tipCalculator(bill[0]),
           tipCalculator(bill[1]),
          tipCalculator(bill[2])];

console.log(tips)

var finalPaid = [tips[0] + bill[0], 
tips[1] + bill[1], tips[2] + bill[2]]

console.log(finalPaid);

var Mark = {
    fullnameM: 'Mark Smith',
    height: 8.2,
    mass: 50,
    calBMIMark:function(){
        this.BMIM = this.mass / (this.height * this.height)
    }
}

var John = {
    fullnameJ: 'John Carter',
    height: 9.3,
    mass: 64,
    calBMIJohn:function(){
        this.BMIJ = this.mass / (this.height * this.height);
    }
};
John.calBMIJohn();
Mark.calBMIMark();
console.log(Mark)
console.log(John)

if(John.calBMIJohn > Mark.calBMIMark){
    console.log(John.fullnameJ + ' has the highest BMI!!!');
}
else if(Mark.calBMIMark > John.calBMIJohn){
    console.log(Mark.fullnameM + ' has the highest BMI');
}

var davee = ['joseph' , 'precious' , true , 2002 , 'student']
for(var i = 0; i < davee.length; i++){
    console.log(i)
}
for(let i = 1; i <= 10; i++){
    if(i % 2 != 0) console.log(i);
}*/

let david = {
    fullname: "Ehikioya Daavid",
    bills: [124, 48, 268, 180,42],
    calctips: function(){
        this.tips = [];
        this.finalvalues = [];

        for(var i = 0; i < this.bills.length; i++)
        {
            var percent;
            var bill = this.bills[i];

            if(bill < 50)
            {
                percent = .2;
            }
            else if(bill >= 50 && bill <= 200)
            {
                percent = .15;
            }
            else{
                percent = .1;
            }
            this.tips[i] = bill * percent;
            this.finalvalues[i] = bill + bill * percent;
        }
    }
}
david.calctips();
console.log(david);

let mark = {
    fullname: "Mark Miller",
    bills: [77, 375, 110, 45],
    calctips: function(){
        this.tips = [];
        this.finalvalues = [];

        for(var i = 0; i < this.bills.length; i++)
        {
            var percent;
            var bill = this.bills[i];

            if(bill < 50)
            {
                percent = .2;
            }
            else if(bill >= 50 && bill <= 200)
            {
                percent = .15;
            }
            else{
                percent = .1;
            }
            this.tips[i] = bill * percent;
            this.finalvalues[i] = bill + bill * percent;
        }
    }
    
}
function calc(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++)
    {
        sum += tips[i];
    }
    return sum / tips.length;
}

david.calctips();
mark.calctips();

david.avarageTip = calc(david.tips);
mark.avarageTip = calc(david.tips);
for(var i = 0; i < 0; i--)
{
}
console.log(i);
console.log(david,mark);
function myFunction(name="dave",age=23){
    console.log(name,age)
}
myFunction()