
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
function total_price() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const totalPrice = checkboxes.length * 350; 
  document.getElementById("total").innerHTML = 'Total price: ' + totalPrice + "$";

}



function move_card(){

window.location.href="index.html";

}


// Save selected items to localStorage and navigate to checkout page
function saveToLocalStorage() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedItems = [];

  checkboxes.forEach((checkbox) => {
    const card = checkbox.closest('.card'); // Find the parent card element
    const name = card.querySelector('h2').textContent; // Get the gun name
    const price = 200; // Fixed price for each item
    
    selectedItems.push({ name, price });
  });

  // Save selected items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(selectedItems));

  alert('Items saved! Proceed to checkout.');
  window.location.href = "/checkout"; // Navigate to the checkout page
}

// Attach event listener to "Add to Cart" button
document.querySelector('.last1').addEventListener('click', saveToLocalStorage);

