textarea.addEventListener('keydown', autoIncrease);

function autoIncrease() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}
// start here

window.onload = function(){

    let btn = $("#btn")
    let allTask = $("#allTask")
    btn.addEventListener("click",function(){
        let textareaText = $("#textarea").value;
        if(!textareaText){
            alert("Please Write Something!")
        }else{
            createTaskItem(allTask,textareaText)
            $("#textarea").value = ""
        }
        
    })
}
    // Create Col-md-6 div and include div with jumbotron in p tag
    function createTaskItem( parent,textareaText) {

        let singleTask = document.createElement("div");
        let jumbotronDiv = document.createElement("div");
        let inJumbotonDiv = document.createElement("div");
        let span = document.createElement("span")
        let p = document.createElement("p");
        let h3 = document.createElement("h3")

        h3.classList = ["my-2"]
        h3.innerText = "Task: "
        span.innerHTML = '<i class="fas fa-times"></i>';

        let spanStyle = {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
            marginTop: '10px'
        }
        Object.assign(span.style, spanStyle)
        inJumbotonDiv.classList = ["d-flex justify-content-between my-2"]

        inJumbotonDiv.appendChild(h3)
        inJumbotonDiv.appendChild(span)
        jumbotronDiv.appendChild(inJumbotonDiv)
         
        span.addEventListener("click", function(){
            let confirmValue = confirm("Are You Sure want to delete");
            if(confirmValue){
                singleTask.remove()
            }
        })

        p.innerText = textareaText;
        p.style.textAlign = "justify"
        jumbotronDiv.classList = ["jumbotron text-white"]
        singleTask.className = "col-md-6";
        
        

      
        jumbotronDiv.appendChild(p)
        singleTask.appendChild(jumbotronDiv);

        let taskController = createTaskController(jumbotronDiv)
        singleTask.appendChild(taskController)
        parent.appendChild(singleTask)
      
    }

function createTaskController(parent){
    let controlPanel = document.createElement("div");
    controlPanel.className = "";


    return controlPanel;
}

    // Query Selector function
    function $(selector) {
        return document.querySelector(selector);
    }

