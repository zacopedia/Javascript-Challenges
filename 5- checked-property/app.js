
const btn = document.querySelector(".btn")
const checkBox = document.querySelector(".checkbox")
const visa = document.querySelector(".visa")
const masterCard = document.querySelector(".master-card")
const paypal = document.querySelector(".paypal")
let msg = document.querySelector(".msg-display")
let payment = document.querySelector("#payment")

// user click to submit his payment 
btn.addEventListener("click", () => {
      hundleSubscription ()
      hundlePayment ()
})

// hundle subscription status
function hundleSubscription () {
            // display result
            msg.textContent = checkBox.checked?
            "Thank You For The Subscription":
            msg.textContent = "You Didn't Subscribe"
}

// handle selected payment method
function hundlePayment () {
      if (visa.checked) {
            // display result
            payment.textContent = "Your payment With Visa Added Succesfuly"
      } else if (masterCard.checked) {
            payment.textContent = "Your payment With Master Card Added Succesfuly"
      } else if (paypal.checked) {
            payment.textContent = "Your payment With Paypal Added Succesfuly"
      } else {
            // must check one of the payment 
            payment.textContent = "Must Add Payment Method"
      }
}

