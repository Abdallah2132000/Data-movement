var productContainer=document.querySelector("#productContainer")
var productinput=document.querySelector("#productinput")
var productBtn=document.querySelector("#productBtn")

data = [
{id:1 ,name:"amed",desc: "sdfhkl;kjhghjkhdf"},
{id:2 ,name:"ali" ,desc: "sdfhkl;kjhghjkhdf"},
{id:3 ,name:"mahm" ,desc: "sdfhkl;kjhghjkhdf"},
{id:4 ,name:"asdf" ,desc: "sdfhkl;kjhghjkhdf"}
]

function drew(item){ 

    productContainer.innerHTML="";

    item.forEach((ele)=>{
        productContainer.innerHTML += `<div onclick = deleteitem(${ele.id})> ${ele.name}  </div>` ;
        // console.log(ele.id)

    })
    } ;``

    window.onload=function(){

        drew(data)
    };


    // 0............................

    productBtn.addEventListener ("click" ,additem) ; 
    


    function additem (){

        if(productinput.value=="") {alert("please enter your name")};

        var lastid =data.length? data[data.length-1].id :0;
        
        

        data.push({id: ++lastid , name : productinput.value ,desc : ";lkjdffghkl"})
        var additem =data[data.length-1]
        
        productContainer.innerHTML += `<div onclick = deleteitem(${additem.id}) > ${additem.name}  </div>` ;
        console.log(additem.id)

        productinput.value="";

    }
    
function deleteitem (id){
    
     var index = data.map(function(id){
        return id.id
     }).indexOf(id);

     if(index!==-1){
     data.splice(index,1);
     drew(data);
    };
    //  console.log(index)

    // data.splice(id-1,1)
    // console.log(data)
    // var index = data.map()
    // data.plice(id,1);
    

}
