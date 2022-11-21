const pageDateTime = document.getElementById("headerDateTime");



async function getAPIData(topic){
    const date = new Date();
    const _data = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey={API_KEY}`)
    .then((val)=>{
        return val.json()
    })

    return _data;
    
}

export function displayData(_id, topic, dataLen, _dataDiv, customHeader=null){
    
    getAPIData(topic).then((completedata)=>{
        let data1="";
        if(customHeader!==null){
            data1+=customHeader
        }
        
        for(var i =0; i<dataLen; i++){
            var __dataDiv = _dataDiv;
            var _date = JSON.stringify(completedata.articles[i].publishedAt)
            _date = _date.replace("T", " : ")
            _date = _date.replaceAll('"', " ")
            _date = _date.replace("Z", "")
            
            var _title = JSON.stringify(completedata.articles[i].title);
            _title = _title.slice(0, 90); 
            _title = _title.replaceAll('"', "")             

            __dataDiv = __dataDiv.replace("SRC", completedata.articles[i].urlToImage)
            __dataDiv = __dataDiv.replace("TITLE", _title)
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
    
var popularNews = `
<div class="d-flex mb-3">
    <img src="SRC" style="width: 100px; height: 100px; object-fit: cover;">
    <div class="w-100 d-flex flex-column justify-content-center bg-light px-3" style="height: 100px;">
        <div class="mb-1" style="font-size: 13px;">
            <a href="">Technology</a>
            <span class="px-1">/</span>
            <span>DATE</span>
        </div>
        <a class="h6 m-0" href="HREF">TITLE</a>
    </div>
</div>
`

var headerNews = `
<div class="bg-light py-2 px-4 mb-3">
    <h3 class="m-0">Trending</h3>
</div>
`

displayData("popularNewsSidebar", "Trending", 10, popularNews, headerNews)


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