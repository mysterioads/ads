let navBarCheckBox = document.querySelector(".navigation__checkbox");
let dashboardMenuClick = document.querySelector(".dashboardClick");
let homeMenuClick = document.querySelector(".homeMenuClick");
let withdrawalMenuClick = document.querySelector(".withdrawalMenuClick");
let perksMenuClick = document.querySelector(".perksMenuClick");
let faqMenuClick = document.querySelector(".faqMenuClick");
let dashboardContainer = document.querySelector(".dashboardContainer");
let requestAdsContainer = document.querySelector(".requestAd");
let withdrawalContainer = document.querySelector(".withdrawalContainer");
let perksContainer = document.querySelector(".perksContainer");
let faqContainer = document.querySelector(".container");
dashboardMenuClick.addEventListener("click",dashboardMenuclicked);
homeMenuClick.addEventListener("click",homeMenuClicked);
withdrawalMenuClick.addEventListener("click",withdrawalMenuClicked);
perksMenuClick.addEventListener("click",perksMenuClicked);
faqMenuClick.addEventListener("click",faqMenuClicked);
function dashboardMenuclicked(){
    navBarCheckBox.click()
    requestAdsContainer.style.display = "none"
    withdrawalContainer.style.display = "none"
    dashboardContainer.style.display = "grid"
    perksContainer.style.display = "none"
    faqContainer.style.display = "none"
}
function homeMenuClicked(){
    navBarCheckBox.click()
    requestAdsContainer.style.display = "flex"
    withdrawalContainer.style.display = "none"
    dashboardContainer.style.display = "none"
    perksContainer.style.display = "none"
    faqContainer.style.display = "none"
}
function withdrawalMenuClicked(){
    navBarCheckBox.click()
    withdrawalContainer.style.display = "flex"
    requestAdsContainer.style.display = "none"
    dashboardContainer.style.display = "none"
    perksContainer.style.display = "none"
    faqContainer.style.display = "none"
}
function perksMenuClicked(){
    navBarCheckBox.click()
    perksContainer.style.display = "flex"
    withdrawalContainer.style.display = "none"
    requestAdsContainer.style.display = "none"
    dashboardContainer.style.display = "none"
    faqContainer.style.display = "none"
}
function faqMenuClicked(){
    navBarCheckBox.click()
    perksContainer.style.display = "none"
    withdrawalContainer.style.display = "none"
    requestAdsContainer.style.display = "none"
    dashboardContainer.style.display = "none"
    faqContainer.style.display = "block"
}
// faq script starts here
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));
// faq script ends here
// request ad functionality starts here
let requestadbutton = document.querySelector(".requestAdsButton")
let randomNumberHolder = document.querySelector(".randomNumberHolder")
let openAdButton = document.querySelector(".openAdButton")
let infoBtn = document.querySelectorAll(".infoBtn")
let closedAd = document.querySelectorAll(".closedAd")
let adDisplayContainer = document.querySelector(".adsDisplayContainer")
let informationContainer = document.querySelector(".informationContainer")
let infoContainer = document.querySelector(".infoContainer")
let backBtn = document.querySelector(".backBtn")
let adClosedMessage2= document.querySelector(".adClosedMessage2")
let adServedMessage = document.querySelector(".adServedMessage")
let oneMinute = document.querySelector(".oneMinute")
let dollarEarnings = document.querySelector(".dollarEarnings")
let bitcoinEarnings = document.querySelector(".bitcoinEarnings")
let sendFeedbackContainer = document.querySelector(".sendFeedbackContainer")
let sendFeedbackBtn = document.querySelector(".sendFeedbackBtn")

let pageViews = document.querySelector(".pageViews")
let PageRpmSpan = document.querySelector(".PageRpmSpan")
let impressions = document.querySelector(".impressions")
let yourClicks = document.querySelector(".yourClicks")
let costPerClick = document.querySelector(".costPerClick")

requestadbutton.addEventListener("click",requestadbuttonClicked)
openAdButton.addEventListener("click",adOpened)
backBtn.addEventListener("click",backBtnClicked)
sendFeedbackBtn.addEventListener("click",sendFeedbackBtnClicked)
for(let i = 0; i<closedAd.length;i++){
  closedAd[i].addEventListener("click",closedAdClicked)
}
for(let i = 0 ; i<infoBtn.length;i++){
  infoBtn[i].addEventListener("click",infoBtnClicked)
}
let num = Number(localStorage.getItem("numberValue"))
dollarEarnings.textContent = localStorage.getItem("numberValue")
// console.log(localStorage.getItem("earnings"))
function randomNumberGenerator(){
  let randomNumber = Math.floor(Math.random() * 3) + 1
  randomNumberHolder.textContent = randomNumber
}
function requestadbuttonClicked(){
  randomNumberGenerator()
  console.log(randomNumberHolder.textContent)
  adDisplayContainer.style.display = "flex"
  informationContainer.style.display = "none"
  if(randomNumberHolder.textContent == 1){
    adDisplayContainer.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg')"
  }
  else if(randomNumberHolder.textContent ==2){
    adDisplayContainer.style.backgroundImage = "url('https://www.socialmediaexaminer.com/wp-content/uploads/2017/06/facebook-business-page-beginner-guide-how-to-600.png')"
  }
  else if(randomNumberHolder.textContent == 3){
    adDisplayContainer.style.backgroundImage = "url('https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/2f0d053c940e4c05e9043c14ecfa0d1d0499e095')"
  }
  adServedMessage.style.display = "flex"
  infoContainer.style.display = "none"
  sendFeedbackContainer.style.display = "none"
}
let clickValue = Number(localStorage.getItem("clickValue"))
yourClicks.textContent = localStorage.getItem("clickValue")
function myClickValue(){
     clickValue+= 1
     yourClicks.textContent = localStorage.getItem("clickValue")
     localStorage.setItem("clickValue",clickValue)
}
console.log(localStorage.getItem("clickValue"))
function adOpened(){
  myClickValue()
  requestadbutton.disabled = true
  if(randomNumberHolder.textContent == 1){
    window.open("https://www.amazon.com/stores/page/8C843987-4C54-424A-9B9C-8DEAB681CC49", "_blank")
  }
  else if(randomNumberHolder.textContent == 2){
    window.open("https://web.facebook.com/pages?_rdc=1&_rdr", "_blank")
  }
  else if(randomNumberHolder.textContent == 3){
    window.open("https://www.nissan-global.com/EN/", "_blank")
  }
  setTimeout(increaseEarnings,60000)
  setInterval(updateCountdown,1000)
   console.log("not reloaded!")
   oneMinute.style.display = "flex"
   adDisplayContainer.style.display = "none"
 }
//  function increasingEarnings(){
//   let myvalue = Math.floor(Math.random() * (150 - 75 + 1) + 75)
//   let dividedValue = (myvalue / 100).toFixed(2)
//   return dividedValue
//  }
// localStorage.clear()
 function increaseEarnings(){
  // let myEarnings = increasingEarnings()
  
  let myvalue = Math.floor(Math.random() * (150 - 75 + 1) + 75)
  let dividedValue = (myvalue / 100).toFixed(2)
  location.reload()
  num += +dividedValue
  dollarEarnings.textContent = localStorage.getItem("numberValue")
  localStorage.setItem("numberValue",num)
 }
 function afterOneMinute(){
  oneMinute.style.display = "none"
 }
bitcoinEarnings.textContent = (dollarEarnings.textContent / 20000).toFixed(8)
function infoBtnClicked(){
  adDisplayContainer.style.display = "none"
  informationContainer.style.display = "none"
  infoContainer.style.display = "flex"
  adServedMessage.style.display = "none"
}
function closedAdClicked(){
  adClosedMessage2.style.display = "flex"
  sendFeedbackContainer.style.display = "none"
  setTimeout(futureMessage,2000)
  setTimeout(requestadbuttonClicked,4000)
  setTimeout(futureMessage2,4000)
}
function futureMessage(){
  adClosedMessage2.textContent = "Ad closed by Google"
}
function futureMessage2(){
  adClosedMessage2.textContent = ""
}
function sendFeedbackBtnClicked(){
  sendFeedbackContainer.style.display = "flex"
  infoContainer.style.display = "none"
}
function backBtnClicked(){
  sendFeedbackContainer.style.display = "none"
  adDisplayContainer.style.display = "flex"
  infoContainer.style.display = "none"
  adServedMessage.style.display = "flex"
}
// countdown code starts here
let startingMinutes = 1
let time = startingMinutes * 60
let countdownEl = document.getElementById("countdown")
function updateCountdown(){
  let minutes = Math.floor(time/60);
  let seconds = time % 60
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl.textContent = minutes + ":" + seconds;
  time--
}


pageViews.textContent = (yourClicks.textContent) * 2
PageRpmSpan.textContent = ((dollarEarnings.textContent / pageViews.textContent) * 1000).toFixed(0)
impressions.textContent = pageViews.textContent * 4
costPerClick.textContent = (dollarEarnings.textContent/ yourClicks.textContent).toFixed(2)






// TIME UPDATE CODE STARTS HERE
let pullCurrentDate = new Date()
let dayOfTheMonth = pullCurrentDate.getDate()
let hours = pullCurrentDate.getHours()

let membersCount = document.querySelector(".membersCount")

let websitePerformance = document.querySelector(".websitePerformance")
let websitePerformance2 = document.querySelector(".websitePerformance2")
let websitePerformance3 = document.querySelector(".websitePerformance3")
let websitePerformance4 = document.querySelector(".websitePerformance4")
let websitePerformance5 = document.querySelector(".websitePerformance5")
let websitePerformance6 = document.querySelector(".websitePerformance6")
let websitePerformance7 = document.querySelector(".websitePerformance7")
let websitePerformance8 = document.querySelector(".websitePerformance8")

let logbookContainer = document.getElementById("logbookContainer")
let logbookContainer2 = document.getElementById("logbookContainer2")
let logbookContainer3 = document.getElementById("logbookContainer3")
let logbookContainer4 = document.getElementById("logbookContainer4")
let logbookContainer5 = document.getElementById("logbookContainer5")
let logbookContainer6 = document.getElementById("logbookContainer6")
let logbookContainer7 = document.getElementById("logbookContainer7")
let logbookContainer8 = document.getElementById("logbookContainer8")

function day1Hour0(){
  websitePerformance.style.display = "flex"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3003
  logbookContainer.style.display = "flex"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}
function day1Hour6(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "flex"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3109
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "flex"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}
function day1Hour12(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "flex"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3220
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "flex"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}
function day1Hour18(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "flex"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3343
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "flex"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}

function day2Hour0(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "flex"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3490
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "flex"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}
function day2Hour6(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "flex"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3723
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "flex"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
}
function day2Hour12(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "flex"
  websitePerformance8.style.display = "none"
  membersCount.textContent = 3883
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "flex"
  logbookContainer4.style.display = "none"
}
function day2Hour18(){
  websitePerformance.style.display = "none"
  websitePerformance2.style.display = "none"
  websitePerformance3.style.display = "none"
  websitePerformance4.style.display = "none"
  websitePerformance5.style.display = "none"
  websitePerformance6.style.display = "none"
  websitePerformance7.style.display = "none"
  websitePerformance8.style.display = "flex"
  membersCount.textContent = 3947
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "none"
  logbookContainer.style.display = "none"
  logbookContainer2.style.display = "none"
  logbookContainer3.style.display = "none"
  logbookContainer4.style.display = "flex"
}

function displayStats(){
    if(dayOfTheMonth % 2 == 0 && hours >= 18){
      day1Hour18()
    }
    else if(dayOfTheMonth % 2 == 0 && hours >= 12){
      day1Hour12()
    }
    else if(dayOfTheMonth % 2 == 0 && hours >= 6){
      day1Hour6()
    }
    else if(dayOfTheMonth % 2 == 0 && hours >= 0){
      day1Hour0()
    }
    else if(dayOfTheMonth % 2 !== 0 && hours >= 18){
      day2Hour18()
    }
    else if(dayOfTheMonth % 2 !== 0 && hours >= 12){
      day2Hour12()
    }
    else if(dayOfTheMonth % 2 !== 0 && hours >= 6){
      day2Hour6()
    }
    else if(dayOfTheMonth % 2 !== 0 && hours >= 0){
      day2Hour0()
    }
}
displayStats()

// withdrawal code starts here
let availableWithdrawal = document.querySelector(".availableWithdrawal")
let withdrawalFee = document.querySelector(".withdrawalFee")
let withdrawBtn = document.querySelector(".withdrawBtn")
let errorMsg = document.querySelector(".errorMsg")
let successMsg = document.querySelector(".successMsg")
availableWithdrawal.textContent = bitcoinEarnings.textContent
withdrawalFee.textContent = (availableWithdrawal.textContent / 33).toFixed(8)

withdrawBtn.addEventListener("click",withdrawButton)
function withdrawButton(){
  if(dollarEarnings.textContent < 100){
    errorMsg.textContent = "minimum withdrawal is $100,please try again later when you've earned above $100"
  }
  else{
    successMsg.textContent = "withdrawal successful!,your coins should arrive in about 10 minutes!"
    localStorage.clear("numberValue")
    dollarEarnings.textContent = 0.00
    bitcoinEarnings.textContent = 0.00000000
  }
}