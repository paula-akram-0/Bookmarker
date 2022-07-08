var BookmarkNameInput= document.getElementById('BookmarkNameInput');
var WebsiteUrlInput = document.getElementById('WebsiteUrlInput');

var bookmarklist;

var https="https://" ;

if (localStorage.list != null){
    bookmarklist=JSON.parse(localStorage.list)
    displaybookmark()
}else{
    var bookmarklist=[]
}
function addbookmark(){


    if(validName() && validurl()){
    var bookmark={
        name:BookmarkNameInput.value,
        link:WebsiteUrlInput.value
    }
    bookmarklist.push(bookmark)
    localStorage.setItem("list",JSON.stringify(bookmarklist))
    displaybookmark()
}
clearinput()
}




function displaybookmark(){
    
    var pop =""
    for(var i =0;i< bookmarklist.length ; i++){
        if(bookmarklist[i].link.includes('https://')){
                  pop += `            <h2 class="text-uppercase text-danger">`+bookmarklist[i].name+`</h2>
            <a class="btn btn-primary m-2 " id="nwlink" target="_blank"  href="`+bookmarklist[i].link+`">visit</a>
            <button class="btn btn-outline-danger m-2" onclick="deletebookmark(`+i+`)">delete</button>`
        }else{
            pop += `            <h2 class="text-uppercase text-danger">`+bookmarklist[i].name+`</h2>
            <a class="btn btn-success m-2 " id="nwlink" target="_blank"  href="`+https+``+bookmarklist[i].link+`">visit</a>
            <button class="btn btn-outline-danger m-2" onclick="deletebookmark(`+i+`)">delete</button>`
        }
        
      

      
    }

    document.getElementById("showbookmark").innerHTML=pop
}





function deletebookmark(i){
    bookmarklist.splice(i,1)
    localStorage.setItem("list",JSON.stringify(bookmarklist))
    displaybookmark()
}

function clearinput(){
    BookmarkNameInput.value=""
    WebsiteUrlInput.value=""
}


function validName(){
    var regex = /([^\s])/
 var testvalid =false
    if(regex.test(BookmarkNameInput.value) ==true){
        document.getElementById("alertName").style.display= "none";
        testvalid =true
    }else{
        document.getElementById("alertName").style.display= "block"
        testvalid =false
    }
    return  testvalid 
}
function validurl(){
    var regex = /([^\s])/
 var testvalid =false
    if(regex.test(WebsiteUrlInput.value) ==true){
        document.getElementById("alerturl").style.display= "none";
        testvalid =true
    }else{
        document.getElementById("alerturl").style.display= "block"
        testvalid =false
    }
    return  testvalid 
}
