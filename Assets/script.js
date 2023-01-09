$(document).ready(() => {

var saveButton = $('.saveBtn');
var allContainer = $('.grabAll');

//Save button that set Local Storage to the ID of the button with the text input 
saveButton.on('click', button1);
function button1(){
  localStorage.setItem($(this).parent().attr('id'),$(this).parent().children('textarea').val());
};


//When page refreshes, this will retrieve the localstorage and display it on the page according to ID
function setAll(){
  for(i=0; i<allContainer.children().length; i++){
    allContainer.children().eq(i).children().eq(1).text(localStorage.getItem(allContainer.children().eq(i).attr('id')))
  }
}


// Display the Day on the top of the page
function currentDay(){
  var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd, MMMM D'));

}

//This function goes through the length of all the ID time and compares the static time to the current time.
//if current time is pass the static time it will change the static time row to grey and if its present red and future green.
function setColor(){
for(x=0; x<allContainer.children().length; x++){
  if(allContainer.children().eq(x).attr('id') === dayjs().format('HH')){
    allContainer.children().eq(x).attr('class','row time-block present');

  }else if(allContainer.children().eq(x).attr('id') < dayjs().format('HH')){
    allContainer.children().eq(x).attr('class','row time-block past');

  }else if(allContainer.children().eq(x).attr('id') > dayjs().format('HH')){
    allContainer.children().eq(x).attr('class','row time-block future');
    console.log(allContainer.children().eq(x).attr('id'));
    console.log(dayjs().format('HH'));
  }
}
}



setAll();
currentDay();
setColor();
});