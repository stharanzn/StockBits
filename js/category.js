const test = document.getElementById("cat_card");

function getBreakingNews(){
    fetch("https://newsapi.org/v2/everything?q=breaking_news&from=2022-10-15&sortBy=publishedAt&language=en&apiKey={API_KEY}").then((data)=>{
      return data.json();
    }).then((newsData)=>{
        // test.innerHTML = newsData[1][0]
        let data = ""
        console.log(newsData)
        newsData.articles.map((values)=>{

            if(values.author === null ){
                values.author = "Unknown";
            }


            data +=
            `
            <div id="cat_card" class="col-lg-6">
                            <div class="position-relative mb-3">
                                <img class="img-fluid w-100" src="${values.urlToImage}" style="object-fit: cover;">
                                <div class="overlay position-relative bg-light">
                                    <div class="mb-2" style="font-size: 14px;">
                                        <a href="">Technology</a>
                                        <span class="px-1">/</span>
                                        <span>January 01, 2045</span>
                                    </div>
                                    <a class="h4" href="">Est stet amet ipsum stet clita rebum duo</a>
                                    <p class="m-0">${values.description}</p>
                                </div>
                            </div>
                        </div>
            `
        })
        test.innerHTML = data;
    }).catch((err)=>{
        console.log(err)
    })

}

// getBreakingNews()
const date = new Date();

fetch(`https://newsapi.org/v2/everything?q=tesla&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey={API_KEY}`).then((data)=>{
    //console.log(data)
    return data.json();
}).then((completedata)=>{
    let data1="";
    console.log(completedata.articles)



    for(var i =0; i<5; i++){
        data1+=`
        <div class="col-lg-6">
            <div class="position-relative mb-3">
                <img class="img-fluid w-100" src='${completedata.articles[i].urlToImage}' alt="News Image">
                    <div class="overlay position-relative bg-light">
                        <div class="mb-2" style="font-size: 14px;">
                            <a href="">Technology</a>
                            <span class="px-1">/</span>
                            <span>${completedata.articles[i].publishedAt}</span>
                        </div>
                        <a class="h4" href="">${completedata.articles[i].title}</a>
                        <p class="m-0">${completedata.articles[i].description}</p>
                    </div>
                
            </div>
        </div>
        `
    };
    document.getElementById("id1").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})
