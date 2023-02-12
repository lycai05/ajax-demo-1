// get JSON
let getJSON = document.getElementById("getJSON");
getJSON.addEventListener("click", ()=>{
    let req = new XMLHttpRequest();
    req.open('GET', '/data.json');
    req.onreadystatechange = ()=>{
        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response)
        } else {
            console.log('Cannot load json file')
        }
    }
    req.send();
})

// get HTML
let getHTML = document.getElementById("getHTML");
getHTML.addEventListener("click", ()=>{
    let req = new XMLHttpRequest();
    req.open('GET', '/insert.html');
    req.onreadystatechange = ()=>{
        if (req.readyState === 4 && req.status === 200) {
            console.log('load html file')
            let parent = document.getElementById('target');
            let ele = document.createElement('div');
            ele.innerHTML = req.response;
            parent.appendChild(ele);
        } else {
            console.log('Cannot load json file')
        }
    }
    req.send();
})

// get CSS
let getCSS = document.getElementById("getCSS");
getCSS.addEventListener("click", ()=>{
    let req = new XMLHttpRequest();
    req.open('GET', '/style.css');
    req.onreadystatechange = ()=>{
        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response)
            let style = document.createElement('style');
            style.innerHTML = req.response;
            document.head.appendChild(style);
        } else {
            console.log('Cannot load json file')
        }
    }
    req.send();
})