const URL = "https://jsonplaceholder.typicode.com/users";


//when load server
window.onload = function (){
    fetch(URL, {
            method: 'POST',
            body: JSON.parse(createNote),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(note => {
            this.createElementItem(note)
        })
        .catch(err => console.log(err))

        let btn = $(".btn")
        btn.addEventListener('click', function(){
            createNote();
        })
}
// create a list
function createNote(){
     let title = $("#title").value;
     let textarea = $("#textarea").value;

     let note = {
         title ,
         textarea
     }

     $("#title").value = ""
     $("#textarea").value = ""
}



function createElementItem(note){
    const parentElement = $(".items");
    let jumbotronDiv = document.createElement("div");
    jumbotronDiv.classList = ["jumbotron text-white"];
    let h1 = document.createElement("h1");
    h1.classList = ["display-5"]
    h1.innerText = note.title;
    let p = document.createElement("p")
    p.innerText = note.textarea;
    jumbotronDiv.appendChild(h1);
    jumbotronDiv.appendChild(p)
    parentElement.appendChild(jumbotronDiv);
}


//create function querySelector
function $(selector){
    return document.querySelector(selector);
}

//auto increase height


textarea.addEventListener('keydown', autoIncrease);

function autoIncrease() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

