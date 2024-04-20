// fill in javascript code here
let form = document.querySelector("form");
let data = [];
let info = localStorage.getItem("data")
if(info){
    saveddata = localStorage.getItem("data")
    data.push(saveddata)
    showdata()
    console.log("hi")
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    let name = form.name.value;
    let employeeID = form.employeeID.value;
    let department = form.department.value;
    let exp = form.exp.value;
    let email = form.email.value;
    let mbl = form.mbl.value;

    let obj = {
        name,
        employeeID,
        department,
        exp,
        email,
        mbl
    };

    // console.log(data);
    data.push(obj)
    localStorage.setItem("data",JSON.stringify(data));
    
    showdata()
})





function showdata(){
    let getdata  = JSON.parse(localStorage.getItem('data'));
    let tbody = document.querySelector("table>tbody");
    tbody.innerHTML = ""
    getdata.forEach( element => {
        
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");

        var btn = document.createElement("button");
        
        

        btn.innerText = "delete"

        tbody.append(tr)
        tr.append(td)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        tr.append(td6)
        tr.append(td7)

        td.append(element.name)
        td1.append(element.employeeID)
        td2.append(element.department)
        td3.append(element.exp)
        td4.append(element.email)
        td5.append(element.mbl)
        td7.append(btn)

        let expval = td6.value
        if(element.exp > 5){
            expval = "Senior"
        }else if(element.exp<=5 || element.exp>2){
            expval = "Junior"
        }
        else{
            expval = "Fresher"
        }

        td6.append(expval)
       
    })
    

    btn.addEventListener("click" , function(){
        const row = this.parentNode.parentNode;
    // Remove the row from the table
        row.parentNode.removeChild(row);
        console.log(row.innerHTML)
    })
}


form.reset()

// console.log(inde)    



    // event.preventDefault();
    // let name = document.querySelector("form>#name").value;
    // let tbody = document.querySelector("table>tbody");
    // let tr = document.createElement("tr");
    // let td = document.createElement("td");
    // tbody.append(tr)
    // tr.append(td)
    // td.append(name)


    