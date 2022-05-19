let noGrid = 16;



function createDiv() {  
    let gridDiv2 = document.getElementById("gridDiv");
    
    
    gridDiv2.style.gridTemplateColumns = 'repeat(16,1fr)' ;
    gridDiv2.style.gridTemplateRows = 'repeat(16,1fr)';
    gridDiv2.style.gridTemplateRows.border = '2px solid red';
    gridDiv2.style.gridTemplateColumns.border = '2px solid red';
    
    // gridDiv.style.backgroundColor = "orange";
   // gridDiv.innerHTML = "<div style = 'height:30px; width: 30px; background-color: red; border: 2px solid Black'> hi </div>";
    
      
    for (let i = 0; i < 256; i++){
        let gridDiv = document.createElement("div");
        gridDiv.innerHTML = "<div style = 'background-color: red; width:100%; height:100%; border: 2px solid Black'>  </div>";
        gridDiv2.appendChild(gridDiv);
     
        //Houver over our DIVS
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.innerHTML = "<div style = 'background-color: yellow; width:100%; height:100%; border: 2px solid Black'>  </div>";
        })
    }





}
function handleClick( mythis ) {
    createDiv();
    //Testing our form//
   // let size = mythis.id;
   // alert(size)
    
}
 
