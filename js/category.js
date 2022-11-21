import {displayData} from "./common.js";

// const test = document.getElementById("cat_card");

// function getBreakingNews(){
//     fetch("https://newsapi.org/v2/everything?q=breaking_news&from=2022-10-15&sortBy=publishedAt&language=en&apiKey={API_KEY}").then((data)=>{
//       return data.json();
//     }).then((newsData)=>{
//         // test.innerHTML = newsData[1][0]
//         let data = ""
//         console.log(newsData)
//         newsData.articles.map((values)=>{

//             if(values.author === null ){
//                 values.author = "Unknown";
//             }


//             data +=
//             `
//             <div id="cat_card" class="col-lg-6">
//                             <div class="position-relative mb-3">
//                                 <img class="img-fluid w-100" src="${values.urlToImage}" style="object-fit: cover;">
//                                 <div class="overlay position-relative bg-light">
//                                     <div class="mb-2" style="font-size: 14px;">
//                                         <a href="">Technology</a>
//                                         <span class="px-1">/</span>
//                                         <span>January 01, 2045</span>
//                                     </div>
//                                     <a class="h4" href="">Est stet amet ipsum stet clita rebum duo</a>
//                                     <p class="m-0">${values.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//             `
//         })
//         test.innerHTML = data;
//     }).catch((err)=>{
//         console.log(err)
//     })

// }

// async function getAPIData(topic){
//     const date = new Date();
//     const _data = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey=d8816e862d8c4a569fe083c5668710aa`)
//     .then((val)=>{
//         return val.json()
//     })
//     console.log("first here ", _data)
//     return _data;
    
// }

// getAPIData("technology").then((completedata)=>{
//     let data1="";

//     for(var i =0; i<5; i++){

//         var _date = JSON.stringify(completedata.articles[i].publishedAt)
//         _date = _date.replace("T", " : ")
//         _date = _date.replaceAll('"', " ")
//         _date = _date.replace("Z", "")
        

//         data1+=`
//         <div class="col-lg-6">
//             <div class="position-relative mb-3">
//                 <img class="img-fluid w-100" src='${completedata.articles[i].urlToImage}' alt="News Image">
//                     <div class="overlay position-relative bg-light">
//                         <div class="mb-2" style="font-size: 14px;">
//                             <a href="">Technology</a>
//                             <span class="px-1">/</span>
//                             <span>${_date}</span>
//                         </div>
//                         <a class="h4" href="${completedata.articles[i].url}">${completedata.articles[i].title}</a>
//                         <p class="m-0">${completedata.articles[i].description}</p>
//                     </div>
                
//             </div>
//         </div>
//         `
//     };
//     document.getElementById("id1").innerHTML=data1;

// }).catch((err)=>{
//     console.log(err);
// })






// getBreakingNews()
// const date = new Date();

// fetch(`https://newsapi.org/v2/everything?q=tesla&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey=d8816e862d8c4a569fe083c5668710aa`).then((data)=>{
//     //console.log(data)
//     return data.json();
// }).then((completedata)=>{
//     let data1="";

//     for(var i =0; i<5; i++){
//         data1+=`
//         <div class="col-lg-6">
//             <div class="position-relative mb-3">
//                 <img class="img-fluid w-100" src='${completedata.articles[i].urlToImage}' alt="News Image">
//                     <div class="overlay position-relative bg-light">
//                         <div class="mb-2" style="font-size: 14px;">
//                             <a href="">Technology</a>
//                             <span class="px-1">/</span>
//                             <span>${completedata.articles[i].publishedAt}</span>
//                         </div>
//                         <a class="h4" href="${completedata.articles[i].url}">${completedata.articles[i].title}</a>
//                         <p class="m-0">${completedata.articles[i].description}</p>
//                     </div>
                
//             </div>
//         </div>
//         `
//     };
//     document.getElementById("id1").innerHTML=data1;

// }).catch((err)=>{
//     console.log(err);
// })


var dataDiv = `
<div class="col-lg-6">
    <div class="position-relative mb-3">
        <img class="img-fluid w-100" src='SRC' alt="News Image">
            <div class="overlay position-relative bg-light">
                <div class="mb-2" style="font-size: 14px;">
                    <a href="">Technology</a>
                    <span class="px-1">/</span>
                    <span>DATE</span>
                </div>
                <a class="h4" href="HREF">TITLE</a>
                <p class="m-0">DESC</p>
            </div>
        
    </div>
</div>
`
displayData("id1", "trending", 6, dataDiv)

// ${completedata.articles[i].urlToImage} :: SRC
// ${_date} :: DATE
// ${completedata.articles[i].url} :: HREF
// ${completedata.articles[i].title} :: TITLE
// ${completedata.articles[i].description} :: DESC
