const checkbox = document.querySelector(".checkbox")
const visa = document.querySelector(".visa")
const masterCard = document.querySelector(".master-card")
const paypal = document.querySelector(".paypal")
const btn = document.querySelector(".btn")
const msgDisplay = document.querySelector(".msg-display")
const payment = document.getElementById("payment")


btn.addEventListener('click', () => {
      
      handleSubscription ()
      handlaPayment ()

     
 })

 function handleSubscription () {
      msgDisplay.textContent = checkbox.checked ? `you are subscribed`
                                                : ` you didnt subscibe`
 }

 function handlaPayment () {
      if (visa.checked) {
            payment.textContent = `you are paying with visa card`
      }

      else if (masterCard.checked) {
            payment.textContent = `you are paying with master card`
      }

      else if (paypal.checked) {
             payment.textContent = `you are paying with paypal`
      }

      else {
            payment.textContent = `you must select paymnet method` 
      }
 }