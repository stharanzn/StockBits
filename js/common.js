const pageDateTime = document.getElementById("headerDateTime");

async function getAPIData(topic){
    const date = new Date();
    const _data = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey={API_KEY}`)
    .then((val)=>{
        return val.json()
    })
    console.log("first here ", _data)
    return _data;
    
}

export function displayData(_id, topic, dataLen, _dataDiv){
    getAPIData(topic).then((completedata)=>{
        let data1="";
        
        for(var i =0; i<dataLen; i++){
            var __dataDiv = _dataDiv;
            var _date = JSON.stringify(completedata.articles[i].publishedAt)
            _date = _date.replace("T", " : ")
            _date = _date.replaceAll('"', " ")
            _date = _date.replace("Z", "")
            
            __dataDiv = __dataDiv.replace("SRC", completedata.articles[i].urlToImage)
            __dataDiv = __dataDiv.replace("TITLE", completedata.articles[i].title)
            __dataDiv = __dataDiv.replace("DATE", _date)
            __dataDiv = __dataDiv.replace("HREF", completedata.articles[i].url)
            __dataDiv = __dataDiv.replace("DESC", completedata.articles[i].description)            

            data1+= __dataDiv
        };
        document.getElementById(_id).innerHTML=data1;

    }).catch((err)=>{
        console.log(err);
    })
}
    


{/* <div class="col-lg-6">
<div class="position-relative mb-3">
    <img class="img-fluid w-100" src='${completedata.articles[i].urlToImage}' alt="News Image">
        <div class="overlay position-relative bg-light">
            <div class="mb-2" style="font-size: 14px;">
                <a href="">Technology</a>
                <span class="px-1">/</span>
                <span>${_date}</span>
            </div>
            <a class="h4" href="${completedata.articles[i].url}">${completedata.articles[i].title}</a>
            <p class="m-0">${completedata.articles[i].description}</p>
        </div>
    
</div>
</div> */}