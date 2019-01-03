import {Observable} from "rxjs";

var observable = Observable.create((observer:any)=>{
    try{
        observer.next('Hey');
        observer.next('Hello')
        setInterval(()=>{
            observer.next('whats up')
        },2000)
    }catch(err){
        observer.error(err)
    }
});

var observer = observable.subscribe(
    (x:any)=>addItem(x),
    (error:any)=>addItem(error),
    ()=>addItem('Completed')
);

setTimeout(()=>{
    observer.unsubscribe();
},6001)

function addItem(val:any){
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}