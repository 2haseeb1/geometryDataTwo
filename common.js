console.log('common js')
 document.getElementById("btn-triangle").addEventListener('click', function () {
     const valueB = getInputFieldValueById("input-triangle-b")
     const valueH = getInputFieldValueById("input-triangle-b")
  
})
 document.getElementById("btn-rectangle").addEventListener('click', function () {
     const valueW = getInputFieldValueById("input-rectangle-w")
     const valueL = getInputFieldValueById("input-rectangle-l")
      
         
    
 
     

    
    
})

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValueString = textElement.innerText;
    return textElementValueString;
}