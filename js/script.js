'use strict'
let editButton = document.getElementsByClassName('edit-button');
let deleteButton = document.getElementsByClassName('delete-button');
let btAdd = document.getElementsByClassName('btn-add')[0];
let cancelButton = document.getElementsByClassName('cancel')[0];
let btnAccept = document.getElementsByClassName('btn-accept')[0];
let list = document.getElementsByClassName('list')[0];
let containerInsert = document.getElementsByClassName('container-insert')[0];
let inputInsert = document.getElementsByClassName('input-decoration');
let player= document.getElementById('player');
let tBody = document.getElementById('tabla-jugadores');
let indice = null;
let opcionElegida= -1;
function Edit(e){
    hideInputs(containerInsert);
    inputInsert[0].value = e.target.parentNode.parentNode.childNodes[0].innerHTML;
    inputInsert[1].value= e.target.parentNode.parentNode.childNodes[1].innerHTML;
    inputInsert[2].value =e.target.parentNode.parentNode.childNodes[2].innerHTML;
    inputInsert[3].value =e.target.parentNode.parentNode.childNodes[3].innerHTML;
    inputInsert[4].value =e.target.parentNode.parentNode.childNodes[4].innerHTML;
    console.log(e.target.parentNode.parentNode.childNodes);
   indice = e.target.parentNode.parentNode;
   opcionElegida= 1;

}
for ( let i=0; i<editButton.length; i++){
    editButton[i].addEventListener('click', function(e){
        Edit(e);
    });
}
cancelButton.addEventListener('click', function(){
    containerInsert.classList.toggle('dis-none')
    clearTable();
});
btAdd.addEventListener('click', function(){
    containerInsert.classList.toggle('dis-none')
    opcionElegida =2;
    
});

function hideInputs(containerInsert){
    containerInsert.classList.toggle('dis-none')
}

for (let index = 0; index < deleteButton.length; index++) {
 deleteButton[index].addEventListener('click', function (e){
    
        e.target.parentNode.parentNode.remove(); 
   }); 
}


btnAccept.addEventListener('click', function(e){                           
   
    if (opcionElegida == 1){   
        indice.childNodes[0].innerHTML=inputInsert[0].value;
        indice.childNodes[1].innerHTML=inputInsert[1].value;
        indice.childNodes[2].innerHTML=inputInsert[2].value;
        indice.childNodes[3].innerHTML=inputInsert[3].value;
        indice.childNodes[4].innerHTML=inputInsert[4].value; 
    
    }else if(opcionElegida==2){
    
            let tr = document.createElement("tr");
            let td1 = document.createElement("th");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");

            td1.innerText = inputInsert[0].value;
            td2.innerText = inputInsert[1].value;
            td3.innerText = inputInsert[2].value;
            td4.innerText = inputInsert[3].value;
            td5.innerText = inputInsert[4].value;

             let botonEliminar = document.createElement('button');
            

            botonEliminar.type = 'button';
            botonEliminar.innerHTML = "Delete";
            botonEliminar.classList.add('delete-button');
            botonEliminar.classList.add('btn');
            botonEliminar.classList.add('btn-outline-danger');
            botonEliminar.addEventListener('click', function (e){
    
                e.target.parentNode.parentNode.remove(); 
                
            });
            

            let botonModif = document.createElement('button');
            
            botonModif.type = 'button';
            botonModif.innerHTML = "Edit";
            botonModif.classList.add('edit-button');
            botonModif.classList.add('btn');
            botonModif.classList.add('btn-outline-primary');
            
            botonModif.addEventListener("click", function (e) { Edit(e) });

            td6.appendChild(botonModif);
            td7.appendChild(botonEliminar); 
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            
            
            tBody.appendChild(tr);
        } 
        clearTable();       
});

    
function clearClass(fila){
   if(fila){  
    fila.classList.remove('dis-none');
}
  };
  player.addEventListener('change', (e)=>{
    e.target.value;
    for (let index = 0; index < tBody.childNodes.length; index++){
        if (tBody.childNodes[index].childNodes.length > 0){
            clearClass(tBody.childNodes[index]); 
            if (tBody.childNodes[index].childNodes[1].innerHTML.toLowerCase() != e.target.value && e.target.value!='all-players'){
                tBody.childNodes[index].classList.add('dis-none');
            }else if (e.target.value == 'all-players'){
            tBody.childNodes[index].classList.remove('dis-none');
        }
        }
    };
  });
  
  function clearTable(){
    for(let i=0; i<inputInsert.length; i++){
        
            inputInsert[i].value ='';
        
    }
}