(function(){ //設置變數

let aAdd=document.querySelectorAll(".add");
let aDown=document.querySelectorAll(".down");
let aNum=document.querySelectorAll(".num");
let aPrice=document.querySelectorAll(".price");
let oTotalNum=document.querySelector(".total-num");
let oTotalPrice=document.querySelector(".total-price");

let len = aNum.length; //4


const data= [
    {jc:100,number:0},
    {jc:110,number:0},
    {jc:120,number:0},
    {jc:130,number:0},

]

for(let i=0;i < len;i++){

    aDown[i].onclick =function(){

        if(data[i].number>0)
    {
        data[i].number--;
        // console.log(data);
        aNum[i].innerHTML = data[i].number;
        aPrice[i].innerHTML = data[i].number * data[i].jc;
        oTotalNum.innerHTML =getTotal().totalNum;
        oTotalPrice.innerHTML =getTotal().totalPrice;
    }   
       
    
    };

    aAdd[i].onclick =function() {
        data[i].number++;
        // console.log(data);
        aNum[i].innerHTML = data[i].number;
        aPrice[i].innerHTML = data[i].number * data[i].jc;
        oTotalNum.innerHTML =getTotal().totalNum;
        oTotalPrice.innerHTML =getTotal().totalPrice;
    };
}

function getTotal() {
    let n =0; // 總數
    let p =0; // 總價

    for(let i =0; i<len;i++) {
    n+=data[i].number;

      p+=data[i].number * data[i].jc;
    }

    return{
      totalNum :n,
      totalPrice :p

    };
  }
})();