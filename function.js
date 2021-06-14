
let url = "https://tt905-2021-progweb.herokuapp.com/curiosidades"

async function callFetchWithPost(tipo, detalhe){
    const options ={
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'tipo' : tipo,
            'detalhe': detalhe
            
        })
    }
     await fetch (url,options);
}
    async function callFetchWithPut(id, tipo2,detalhe2){
        const options = {
            method : 'PUT',
            mode: 'cors',
            headers: {
                'Accept' : 'application/json',
                'content-type' : 'application/json'            
            }, 
            body :JSON.stringify({
                banco_dados:{
                    'tipo': tipo2,
                    'detalhe': detalhe2
                }
            })
        }
        await fetch(`${url}/${id}`, options);
//         .then (async (res)=>{
//             if (res.status >= 200 && res.status <= 300)
//             console.log('deu bom')
//             else
//             console.log('deu ruim')
//     })
//         .catch(e => console.log(e.message))
 }
 async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
     await fetch(`${url}/${id}`, options);
        //   .then (async (res)=>{
        //             if (res.status >= 200 && res.status <= 300)
        //             console.log('deu bom')
        //             else
        //             console.log('deu ruim')
        //     })
        //         .catch(e => console.log(e.message))
}
function submitPost(){
    console.log("entrei na função");

    const form = document.forms['postForm'];    
    const tipo = form["tipo"].value;
    const detalhe = form["detalhe"].value;
    callFetchWithPost(tipo,detalhe);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const tipo2 = form["tipo2"].value;
    const detalhe2 = form["detalhe2"].value;
    callFetchWithPut(id, tipo2,detalhe2);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id2 = form["id2"].value;  
    callFetchWithDelete(id2);
    return false; // Evitar o reload da tela.}
}