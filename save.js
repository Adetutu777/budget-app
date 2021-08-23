




//btn One DOM Manipulation
const btnOne = document.getElementById('mysubmitbtn-one'),
 budgetDisplay = document.getElementById('budgetDisplay'),
 hideBudget = document.getElementById('hide-budget'),
 myBudget=document.getElementById('myBudget'), 
 todoDescription = document.getElementById('todoDescription'),
 myAmountSpent = document.getElementById('myAmountSpent'),
  totalUserSpent = document.getElementById('spent-section'),
  amountLeft = document.getElementById('amt-left-section'),
  enterBudget = document.getElementById('enter-budget'),
  homepageResponse = document.getElementById('home-noti'),
  inputResponse = document.getElementById('resp-noti');
	

//btn Two DOM Manipualation
const btnTwo = document.getElementById('mysubmitbtn-two'), 
 myList=document.getElementById('myList');
 let itemSection = document.getElementById('item-section');

let error = false
let addToList = [];

let budgetUI = () => {
  
   enterBudget.style.display = 'none';
   budgetDisplay.style.display = 'inline-block';
   hideBudget.style.display = 'block';
   checkclass.style.display='block';
   mybalance.style.display='block';
  budgetDisplay.innerHTML = myBudget.value;
  
  if (error === true) {
    homeUIErr()
  }
	
}


let UpdateUI =()=>{
  AddItems();
	todoDescription.value ='';
	myAmountSpent.value ='';
	if (error===true){
		responseUIErr()
	} else{
  itemUI();
	totalSpentUI();
	amountLeftUI();
	}

}
 
 let reloadFunc = () => location.reload();

let val = [] ;
 function AddItems() {
   let TxtVal = todoDescription.value;
   let AmtVal = myAmountSpent.value;
     if(AmtVal.length >0 && TxtVal.length > 0) { 
			 error = false;
    addToList.push({
    AmtVal,
    TxtVal,
    });  
  responseUI();
	let numVal = parseInt(AmtVal) 
	val.push(numVal)
	sum = val.reduce((t, a) => t + a);
    } else{
			error = true;
		  responseUIErr();
		}
    }



let itemUI = () => {
  const res = [];
  addToList.forEach((curr, idx) => {
    res.push(
      `<div class='res-div'>

      <div>
      ${curr.TxtVal} 
      </div>

      <div>
      <span class='items-amt'>
      ${curr.AmtVal}
      </span>
      </div>

      </div>`
    );
  });

itemSection.innerHTML = res.join('');
};




	let totalSpentUI =()=>{

		resu = (

		  `<div class='res-div res-div-2 total-spent-section'>
      <div>
      Total Spent
      </div>

      <div>
      <span class='total-spent-amt'>
      ${sum}
      </span>
      </div>
      </div>`
		)
	totalUserSpent.innerHTML = resu;

	}

	let amountLeftUI =()=>{
	let budVal = myBudget.value
	 let newBudVal = parseInt(budVal);
		result = (

		  `<div class='res-div res-div-2 amt-left-section'>
      <div>
      Amount Left
      </div>

      <div>
      <span class='total-spent-amt'>
      ${newBudVal - sum}
      </span>
      </div>
      </div>`
		)
	amountLeft.innerHTML = result;
	}

let responseUI =()=>{

	myRes = (
		  `<div class='response'>
			<span>Info Successfully Added </span>
      </div>`
		)

		inputResponse.innerHTML = myRes;
	}
let responseUIErr =()=>{

	myRes = (
		  `<div class='response error'>
			<span>All fields are required to proceed </span>
      </div>`
		)

		inputResponse.innerHTML = myRes;
}
  


// testing
let homeUIErr = () => {
  
  homeRep = (
    `<div class='response error'>
			<span>Enter value before proceeding </span>
      </div>`
  )

  homepageResponse.innerHTML =homeRep;
}





//event listeners
btnOne.addEventListener('click', budgetUI) 
btnTwo.addEventListener('click', UpdateUI)

