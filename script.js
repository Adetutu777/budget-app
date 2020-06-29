


//btn One DOM Manipulation
const btnOne = document.getElementById('mysubmitbtn-one'),
 budgetDisplay = document.getElementById('budgetDisplay'),
 hideBudget = document.getElementById('hide-budget'),
 myBudget=document.getElementById('myBudget'), 
 todoDescription = document.getElementById('todoDescription'),
 myAmountSpent = document.getElementById('myAmountSpent'),
  totalUserSpent = document.getElementById('spent-section'),
  amountLeft = document.getElementById('amt-left-section'),
  inputResponse = document.getElementById('resp-noti');
	

//btn Two DOM Manipualtion
const btnTwo = document.getElementById('mysubmitbtn-two'), 
 myList=document.getElementById('myList');
 let itemSection = document.getElementById('item-section');

let error = false
let addToList = [];

let budgetUI =()=>{
   budgetDisplay.style.display = 'inline-block';
   hideBudget.style.display = 'block';
   checkclass.style.display='block';
   mybalance.style.display='block';
   budgetDisplay.innerHTML=myBudget.value;
	
}

let sum = 0 ;
let totalSpent=()=>

{

	for(let i= 0; i < addToList.length; i++) 
		{  
	sum += parseInt(addToList[i].AmtVal);      	
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
	totalSpent();
	totalSpentUI();
	amountLeftUI();
	}

}
 
 let reloadFunc = () => location.reload();


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
			<span>All fields are requirred to proceed </span>
      </div>`
		)

		inputResponse.innerHTML = myRes;
	}



//event listeners
btnOne.addEventListener('click', budgetUI) 
btnTwo.addEventListener('click', UpdateUI)

