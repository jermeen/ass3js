var bookName=document.getElementById('bookName');
var bookUrl=document.getElementById('bookUrl');
var tableContent=document.getElementById('tableContent');
var allBook=[];
if(localStorage.getItem('bookdata')!=null){
    allBook=JSON.parse(localStorage.getItem('bookdata'))
    displayList();
}

function addbook(){
    if(bookName.value!=""&&bookUrl.value!=""){
        var book={
            name:bookName.value,
            web:bookUrl.value,
            }
            allBook.push(book);
            localStorage.setItem('bookdata', JSON.stringify(allBook));
            
            clearform();
            displayList();
           
    }
   
    

}
function clearform(){
    bookName.value=null;
    bookUrl.value=null;
}
function displayList(){
    var cartona=''
    for(var i=0;i<allBook.length;i++){
        cartona+=` 
        <tr>
        <td >${i+1}</td>
        <td>${allBook[i].name}</td>
        <td><button class="btn-visit px-2"><i class="fa-solid fa-eye pe-2"></i>visit</button></td>
        <td><button class=" btn-delete px-2 " onClick="deletBook(${i})"><i class="fa-solid fa-trash pe-2" ></i>Delete</button></td>
        </tr>
        `
    }
    tableContent.innerHTML=cartona
}

function deletBook(index){
    allBook.splice(index,1)
    localStorage.setItem('bookdata', JSON.stringify(allBook));
    
    displayList();
}