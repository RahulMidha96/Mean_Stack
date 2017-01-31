/* This JS has only logic stuff */


//function constructor
function Item(itemno,name,price,url){
    this.itemNo = itemno;
    this.name = name;
    this.price = price;
    this.url = url;
}

//object{key:value,key:value........}
//this is an object
var itemOperations={
    itemList:[],  //member of object
    addItemInArray:function(itemObject){
        this.itemList.push(itemObject);
    }
    searchItem:function(price){
    return this.itemList.filter(function(itemObject){
    price=parseInt(price);
    
})
  //  var subarray = this.itemList.filter(function(itemObject){
    return itemObject.price>=parseInt(price);
});
// return subarray;
}
};