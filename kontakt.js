document.getElementById('createButton').addEventListener('click', createContact);
function createContact(){
    const name = document.getElementById('nameInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();

if (name ===''|| phone ===''){
    alert('vänligen fyll i både nam och telefonnummer');// visar meddelande om obligatorisk info
    return;
}

const contactList =document.getElementById('Kontaklista');

//skapar ett nytt kontakt när man trycker på "skapa"
const contactItem = document.createElement('li');
contactItem.classList.add('contact-item');

const nameInput =document.createElement('input');// skapar ny element på sidan
nameInput.type='text';
nameInput.value = name;
nameInput.disabled = true; // man kan inte skapa eller ändra ny info så länge den är "true"
 const phoneInput=document.createElement('input');
 phoneInput.type='text';
 phoneInput.value=phone;
 phoneInput.disabled=true;

 const editButton = document.createElement('button');//skapar knappen "ändra"
 editButton.textContent ='Ändra';
 editButton.addEventListener('click',()=>{
    if(editButton.textContent ==='Ändra'){   // förstod inte hela koden
        nameInput.disabled =false;
        phoneInput.disabled=false;
        editButton.textContent ='Spara';
    }else{
        nameInput.disabled =true;
        phoneInput.disabled=true;
        editButton.textContent='Ändra';
    }
 })
 const deleteButton =document.createElement('button')
 deleteButton.textContent='Radera';
 deleteButton.addEventListener('click',()=> {
    contactList.removeChild(contactItem);  //?????????????????????????????????
 })
 //
 contactItem.appendChild(nameInput);
 contactItem.appendChild(phoneInput);
 contactItem.appendChild(editButton);
 contactItem.appendChild(deleteButton);

 contactList.appendChild(contactItem);

 document.getElementById('nameInput').value='';
 document.getElementById('phoneInput').value='';

}