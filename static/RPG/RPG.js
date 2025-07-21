
const list = ["pistols", "revolver", "desert eagle","beretta","1911 handguns","uzi handgun"];

function valid_input(){
  var input = document.getElementById("search").value.trim(); 
  var item=input.toLowerCase();
  var check=false;
  if (input == "") {
    alert("Search bar is empty. Please try again.");
  }
  else if(input.includes("@") || input.includes("#")||(input.includes("$"))){
    window.location.href="/forbidden";
  }
  else{
    for (let index = 0; index < item.length; index++) {
       if(item==list[index]){
        check=true;
       } 
    }
    if(check){
            alert("Success! The product you searched for has been found.");

    }
    else{

      alert("this product not found");
    }
  }
}
function total() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const totalPrice = checkboxes.length * 850; 
  document.getElementById("total").innerHTML = 'Total price: ' + totalPrice + "$";

}

