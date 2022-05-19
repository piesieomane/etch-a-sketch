let noGrid = 16;



function createDiv() {  
    var gridDiv2 = document.getElementById("gridDiv");
    var gridDiv = document.createElement("div");
    
    gridDiv2.style.gridTemplateColumns = 'repeat(16,1fr)' ;
    gridDiv2.style.gridTemplateRows = 'repeat(16,1fr)';
    gridDiv2.style.gridTemplateRows.border = '2px solid red';
    gridDiv2.style.gridTemplateColumns.border = '2px solid red'
    
    gridDiv2.style.border = "2px solid red";
    
    //gridDiv.innerHTML = "<div style = 'height:30px; width: 30px; background-color: red; border: 2px solid Black'> hi </div>";
       // gridDiv2.appendChild(gridDiv);
      //  console.log("i");

}
function handleClick( mythis ) {
    createDiv();
    let size = mythis.id;
    alert(size)
    
}
 
