let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")
let input4=document.getElementById("input4")
let button1=document.getElementById("button1")
let button2=document.getElementById("button2")
let showInput=document.getElementById("show-input")

button1.addEventListener("click",function(e) {
    e.preventDefault() 
    if(input1.value=="" || input2.value=="" || input3.value=="" || input4.value==""){
        alert("Plz fill up all the box")
    }else {
        let tr=document.createElement("tr")
        showInput.appendChild(tr)
        tr.style.display="flex"
        tr.style.flexDirection="row"
        
        
        const th1=document.createElement("th")
        th1.innerHTML=input1.value
        tr.appendChild(th1)
        input1.value=""
        th1.style.border="1px solid black"
      
        

        const th2=document.createElement("th")
        th2.innerHTML=input2.value
        tr.appendChild(th2)
        input2.value=""
        th2.style.border="1px solid black"
        
        
       

        const th3=document.createElement("th")
        th3.innerHTML=input3.value
        tr.appendChild(th3)
        input3.value=""
        th3.style.border="1px solid black"
        
        

        const th4=document.createElement("th")
        th4.innerHTML=input4.value
        tr.appendChild(th4)
        input4.value=""
        th4.style.border="1px solid black"
        
        
    }
})


button2.addEventListener("click",function(e) {
    e.preventDefault() 
    if(input1.value=="" || input2.value=="" || input3.value=="" || input4.value==""){
        alert("Plz fill up all the box")
    }else {
        let tr=document.createElement("tr")
        showInput.appendChild(tr)
        tr.style.display="flex"
        tr.style.flexDirection="row"
        
       
        
        
        const td1=document.createElement("td")
        td1.innerHTML=input1.value
        tr.appendChild(td1)
        input1.value=""
        td1.style.border="1px solid black"
        
        
        

        const td2=document.createElement("td")
        td2.innerHTML=input2.value
        tr.appendChild(td2)
        input2.value=""
        td2.style.border="1px solid black"
        
        
       

        const td3=document.createElement("td")
        td3.innerHTML=input3.value
        tr.appendChild(td3)
        input3.value=""
        td3.style.border="1px solid black"
        
        

        const td4=document.createElement("td")
        td4.innerHTML=input4.value
        tr.appendChild(td4)
        input4.value=""
        td4.style.border="1px solid black"
        
    }
})



