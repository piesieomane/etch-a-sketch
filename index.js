let noGrid = 16;
let gridDiv2 = document.getElementById("gridDiv");
const input = document.createElement("input");
input.setAttribute("id", "gridsize");

document.body.appendChild(input);

const label = document.createElement("label");
label.setAttribute("for", "gridsize");
label.innerHTML = "Gridsize: ";

let gridSizeText = document.getElementById("gridsize");
//gridSizeText.setAttribute("value", );
//let value = gridSizeText.value;
//console.log(value);
gridSizeText.setAttribute("placeholder", "Input gridsize here...");
document.body.insertBefore(label, gridSizeText);






function createDiv(size) {  
   // let gridDiv2 = document.getElementById("gridDiv");
    if (size < 40) {
        
     gridDiv2.style.gridTemplateColumns = `repeat(${size} ,1fr)` ;
    gridDiv2.style.gridTemplateRows = `repeat(${size} ,1fr)`;
    gridDiv2.style.gridTemplateRows.border = '2px solid red';
    gridDiv2.style.gridTemplateColumns.border = '2px solid red';
    
    // gridDiv.style.backgroundColor = "orange";
   // gridDiv.innerHTML = "<div style = 'height:30px; width: 30px; background-color: red; border: 2px solid Black'> hi </div>";
    
      
        for (let i = 0; i < Math.pow(size, 2); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.innerHTML = "<div style = 'background-color: red; width:100%; height:100%; border: 1px solid Black'>  </div>";
            gridDiv2.appendChild(gridDiv);
            gridDiv.setAttribute("class", "divgrid");
     
            //Houver over our DIVS
            gridDiv.addEventListener('mouseover', () => {
                gridDiv.innerHTML = "<div style = 'background-color: yellow; width:100%; height:100%; border: 1px solid Black'>  </div>";
            })
        }
    }
    else {
        alert("sorry, put a number 2 and 50");
    }

}
function handleClick(mythis) {
    let checking = document.getElementsByClassName('divgrid');
    if (checking.length>0) {
        let p = document.getElementById('gridDiv');
            // .querySelectorAll('.divgrid');   
        p.innerHTML = "";
        // alert('im home')
        if (checking.length == 0) {
            console.log("we are done");
            let size1 = document.getElementById('size').value;
            createDiv(size1);
        }        
    }
    else {
        let size1 = document.getElementById('size').value;
    createDiv(size1);
    console.log(size); 
    }
}





