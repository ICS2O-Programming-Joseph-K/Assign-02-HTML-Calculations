function enterClicked () {
  // this function gets user's view amount, calculates then displays it back to user

  // get first name from text field
  let views = document.getElementById("your-total-views").value
  
	// variable for RPM
  let lowRpm = 1.04
  
  // variable for thousand
  let thousand = 1000
  
  // calculate views to dollar then display
  let total = views * lowRpm / thousand
  document.getElementById('user-info').innerHTML = "Your total money earned is " + numUSD.format(total); + " USD"
}

// convert total number to US currency (SkillForge)
let numUSD = new Intl.NumberFormat("en-US",{
  style:"currency",
  currency: "USD"
})
