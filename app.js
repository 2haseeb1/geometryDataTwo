
let counter = 0;
document.getElementById("btn-triangle").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("triangle-title");
    console.log(shapeName.toLowerCase());
   
    const triangleBaseValue = getInputFieldValueById("input-triangle-b");
    
    console.log(triangleBaseValue);
   
 
    const triangleHeightValue = getInputFieldValueById("input-triangle-h");
    
   console.log(triangleHeightValue)
    
    const result = triangleHeightValue * triangleBaseValue * 0.5;
    
    showData(shapeName,result) 

})

function showData(shapeName,result) {
    // now showing the results in table
    const tableValue = document.getElementById("table-value")
    console.log(tableValue)
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${counter}</th>
    <td class="capitalize">${shapeName}</td>
    <td>${result.toFixed(2)}<span class="lowercase"> cm</span><span class="align-super text-xm">2</span></td>
    <td>
    <div class=" mr-5"><button class="bg-blue-500 mr-[5px] py-3 rounded text-white mr-5 block px-[20px]">Convert to <span class="lowercase">m</span><span class="text-super">2</span></button></div></td>
    
    
    `
    tableValue.appendChild(tr);
}

document.getElementById("btn-rectangle").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("rectangle-title");
    console.log(shapeName.toLowerCase());
   alert(shapeName)
    const rectagleWidthValue = getInputFieldValueById("input-rectangle-w");
    console.log(rectagleWidthValue);
    alert(rectagleWidthValue);
    const rectangleLengthValue = getInputFieldValueById("input-rectangle-l");
     console.log(rectangleLengthValue)
    
    alert(rectangleLengthValue);
   
    // now calculating rectangle area
    const result = rectagleWidthValue * rectangleLengthValue;
    
    showData(shapeName,result) 

})
document.getElementById("btn-parallelogram").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("parallelogram-title");
    console.log(shapeName.toLowerCase());
   alert(shapeName)
    const parallelogramBaseValue = getInputFieldValueById("input-parallelogram-b");
    console.log(parallelogramBaseValue);
    alert(parallelogramBaseValue);
    const parallelogramheightValue = getInputFieldValueById("input-parallelogram-h");
     console.log(parallelogramheightValue)
    
    alert(parallelogramheightValue);
   
    // now calculating parallelogram area
    const result = parallelogramBaseValue * parallelogramheightValue*0.5;
    
    showData(shapeName,result) 

})
document.getElementById("btn-rhombus").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("rhombus-title");
    console.log(shapeName.toLowerCase());
   alert(shapeName)
    const inputRhombusD_1Value = getInputFieldValueById("input-rhombus-d1");
    console.log(inputRhombusD_1Value);
    alert(inputRhombusD_1Value);
    const inputRhombusD_2Value = getInputFieldValueById("input-rhombus-d2");
     console.log(inputRhombusD_2Value)
    
    alert(inputRhombusD_2Value);
   
    // now calculating rhombus area
    const result = inputRhombusD_1Value * inputRhombusD_2Value*0.5;
    
    showData(shapeName,result) 

})
document.getElementById("btn-pentagon").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("pentagon-title");
    console.log(shapeName.toLowerCase());
   alert(shapeName)
    const inputPentagon_PValue = getInputFieldValueById("input-pentagon-p");
    console.log(inputPentagon_PValue);
    alert(inputPentagon_PValue);
    const inputPentagon_BValue = getInputFieldValueById("input-pentagon-b");
     console.log(inputPentagon_BValue)
    
    alert(inputPentagon_BValue);
   
    // now calculating rhombus area
    const result = inputPentagon_PValue* inputPentagon_BValue*0.5;
    
    showData(shapeName,result) 

})
document.getElementById("btn-ellipse").addEventListener('click', function () {
    counter += 1;
    const shapeName = getTextElementValueById("ellipse-title");
    console.log(shapeName.toLowerCase());
   alert(shapeName)
    const inputEllipse_AValue = getInputFieldValueById("input-ellipse-a");
    console.log(inputEllipse_AValue);
    alert(inputEllipse_AValue);
    const inputEllipse_BValue = getInputFieldValueById("input-ellipse-b");
     console.log(inputEllipse_BValue)
    
    alert(inputEllipse_BValue);
   
    // now calculating rhombus area
    const result = inputEllipse_AValue* inputEllipse_BValue*3.14;
    
    showData(shapeName,result) 

})

// create a redirectBlog() function to move another page 
function redirectBlog() {
    window.location.href="/newpage.html"
}