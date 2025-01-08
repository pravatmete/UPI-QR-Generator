var qrcode = new QRCode("qrcode");
let inputData = document.getElementById("input-data");
let inputAmount = document.getElementById("input-amount");
// upi://pay?pa=mete@nsdl&am=77&cu=INR


function func(){
  function makeCode () { 

        let inputDataValue = inputData.value;
        let inputAmountValue = inputAmount.value;
        let data = "upi://pay?pa=";
        let result = data.concat(inputDataValue);
        let payAmmount = "&am=";
        let addAmmount = result.concat(payAmmount);
        let finalResult = addAmmount.concat(inputAmountValue);

    //   var elText = document.getElementById("text");
      
      if (inputDataValue.length==0 && inputAmountValue.length==0) {
        alert("invalid input")
          
        inputData.focus();
        return;
      }else if(inputAmountValue>100000){
        alert("Amount should be less than 100000");
        return;
      }
      
    //   qrcode.makeCode(elText.value);



    qrcode.makeCode(finalResult)
    }
    makeCode();
    

}

// $("#text").
// on("blur", function () {
//   makeCode();
// }).
// on("keydown", function (e) {
//   if (e.keyCode == 13) {
//     makeCode();
//   }
// }); 


