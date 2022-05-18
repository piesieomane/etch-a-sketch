let noGrid = 16;



function createDiv() {
    var gridDiv = document.createElement("div");
    var gridDiv2 = document.getElementById("gridDiv");
    
    for (let i = 0; i < noGrid; i++) {
        gridDiv.innerHTML = "<div style = 'height:30px; width: 30px; background-color: red; border: 2px solid Black'> hi </div>";
        gridDiv2.appendChild(gridDiv);
        console.log("i");
    }
}
function handleClick( mythis ) {
    createDiv();
    let size = mythis.id;
    alert(size)
    
}
 
