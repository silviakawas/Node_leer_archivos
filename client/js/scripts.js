
const buttonElement = document.getElementById('button');

const fetchData = async() =>{
    try{
        const response = await fetch('http://localhost:8000/api/users');
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error('Error al obtener los datos:', err);
    }
    
};


buttonElement.addEventListener('click', fetchData);

