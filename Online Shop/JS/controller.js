/*
This Controller is Acting as a Middle Layer B/W
View(HTML) and Model(JS)
MVC - model view controller
*/
window.addEventListener("load",init);

function init(){
document.getElementById("add").addEventListener("click",addNewTask);
document.getElementById("search").addEventListener("search",searchTask);
}

function searchTask(){
    var id=itemNo;
    var price=document.getElementById("price").value;
    var itemName=document.getElementById("itemname").value;
    var itemURL=document.getElementById("url").value;
    var subarray=itemOperations.searchItem(price);
    printTask(subarray);
}

function printTask(itemlist){
    var table=document.getElementById("itemlist");
    table.innerHTML="";
    itemlist.forEach(function(itemobject){
        var row=table.insertRow
    })
    //document.getElementById("itemlist").innerHTML="";
}
var itemNo = 1;
function addNewTask(){
    var table = document.getElementById("itemlist");
    var itemName = document.getElementById("itemname").value;
    var price = document.getElementById("price").value;
    var url = document.getElementById("url").value;
    var row = table.insertRow();
    var itemObject = new Item(itemNo,itemName,price,url);
    itemOperations.addItemInArray(itemObject);
    row.insertCell(0).innerHTML=itemNo;
    row.insertCell(1).innerHTML=itemName;
    row.insertCell(2).innerHTML = price;
    row.insertCell(3).innerHTML = url;
    var img=document
    itemNo++;
    clearField();
}

function clearField(){
document.getElementById("itemno").innerHTML = itemNo;
var fields = document.getElementsByClassName("clearfields"); 
Array.prototype.forEach.call(fields,function(field){
    field.value="";
});
document.getElementById("itemname").focus();    
}