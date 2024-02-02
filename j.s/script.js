let clientname = document.querySelector("#client-name")
let typeprodact = document.querySelector("#type-prodact")
let userprodact = document.querySelector("#user-prodact")
let colorprodact = document.querySelector("#color-prodact")


let pcn = document.querySelector("#pcn")
let ptp = document.querySelector("#ptp")
let pup = document.querySelector("#pup")
let pcp = document.querySelector("#pcp")
data = [
    {id:1 , clientname:"ahmed", typeprodact:"chess", userprodact:"adidise", colorprodact:"red"},
    {id:2 , clientname:"mohamed", typeprodact:"juice", userprodact:"nike", colorprodact:"blue"},
    {id:3 , clientname:"ali" ,typeprodact:"animal", userprodact:"breago", colorprodact:"black"},
    {id:4 , clientname:"tahane" ,typeprodact:"fruits", userprodact:"elshabh", colorprodact:"green"}
]

function drew(item){

    pcn.innerHTML =""+"";
    ptp.innerHTML ="";
    pup.innerHTML ="";
    pcp.innerHTML ="";

    item.forEach((item) => {
        pcn.innerHTML +=  `<p onclick =deleteitem(${item.id}) >${item.clientname}</p>` ;
        ptp.innerHTML +=  `<p onclick =deleteitem(${item.id}) >${item.typeprodact}</p>` ;
        pup.innerHTML +=  `<p onclick =deleteitem(${item.id}) >${item.userprodact}</p>` ;
        pcp.innerHTML +=  `<p onclick =deleteitem(${item.id}) >${item.colorprodact}</p>` ;
    });
   
}


window.onload = function(){
    drew(data)
}

let productBtn = document.querySelector("#productBtn")

productBtn.addEventListener("click" ,added)

function added(){

if(clientname.value==""||typeprodact.value==""||userprodact.value==""||colorprodact.value==""){alert("plase fill data")};

    var lastid =data.length? data[data.length-1].id :0;
    data.push({id:++lastid ,clientname:clientname.value, typeprodact:typeprodact.value, userprodact:userprodact.value, colorprodact:colorprodact.value});
    
    let lastitem = data[data.length-1]

    pcn.innerHTML +=  `<p onclick = deleteitem(${lastitem.id})>${lastitem.clientname}</p>` ;
    ptp.innerHTML +=  `<p onclick = deleteitem(${lastitem.id})>${lastitem.typeprodact}</p>` ;
    pup.innerHTML +=  `<p onclick = deleteitem(${lastitem.id})>${lastitem.userprodact}</p>` ;
    pcp.innerHTML +=  `<p onclick = deleteitem(${lastitem.id})>${lastitem.colorprodact}</p>` ;

    // console.log(lastitem.id)
    clientname.value="";
    typeprodact.value="";
    userprodact.value="";
    colorprodact.value=""

}

function deleteitem(id){
    let index = data.map((id)=>{
        return id.id
    }).indexOf(id)

    data.splice(index,1)
    drew(data)
}
