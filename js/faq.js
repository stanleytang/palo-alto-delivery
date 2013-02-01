genFAQ();

function genFAQ() {
  var faqData = genFAQData();
  
  var questionsHTML = "<h3>Questions</h3><ol>";  
  for (var i = 0; i < faqData.length; i++) {
    var anFaqData = faqData[i];
    
    questionsHTML += '<li><a href="#question' + i + '">' + anFaqData.question + 
      '</a></li>';
  }
  questionsHTML += '</ol><hr class="soften" /><h3>Answers</h3>';
  $("#faq").append(questionsHTML);
  var answersHTML = "";
  for (var i = 0; i < faqData.length; i++) {
    var anFaqData = faqData[i];
    
    answersHTML += '<a name="question' + i + '"></a>' +
      '<p class="faq-question">Q: ' + anFaqData.question + '</p>' +
      '<p class="faq-answer">' + anFaqData.answer + '</p>' +
      '<p class="faq-back-to-top"><a href="#top">Back to top</a></p>';
  }
  
  $("#faq").append(answersHTML);
}

function genFAQData() {
  var faqData = new Array();
  
  var faq = {
    "question": "When are your delivery hours?",
    "answer": "We deliver dinner daily from 5pm - 8pm. You may submit your order " + 
      "online to us ahead of time."};
  faqData.push(faq);
  
  var faq = {
    "question": "Which locations are you able to deliver to?",
    "answer": "We currently only deliver to the following areas: Menlo Park, Palo " +
      "Alto, Atherton, Stanford. We will be expanding to more cities in the Bay " + 
      "Area soon."};
  faqData.push(faq);
  
  var faq = {
    "question": "Do I have to call the restaurant to make the order?",
    "answer": "No you don't! Just let us know what you want and we will make " + 
      "the order with the restaurant on your behalf."};
  faqData.push(faq);
  
  var faq = {
    "question": "Who does the food delivery?",
    "answer": "We have a team of experienced drivers who will deliver the food " +
      "right to your doorstep."};
  faqData.push(faq);
  
  var faq = {
    "question": "Can I make one delivery order from separate restaurants?",
    "answer": "Yes you may. However, we will charge $6 per delivery per restaurant. " + 
      "So if you make a single food delivery order with us, but with items from both " + 
      "Cafe 220 and Oren's Hummus, you will get charged $12."};
  faqData.push(faq);
  
  var faq = {
    "question": "How do I pay?",
    "answer": "Pay with your credit card upon delivery. Our drivers are equipped " + 
      "with mobile credit card readers."};
  faqData.push(faq);
  
  return faqData;
}