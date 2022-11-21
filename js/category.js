import {displayData} from "./common.js";

// ${completedata.articles[i].urlToImage} :: SRC
// ${_date} :: DATE
// ${completedata.articles[i].url} :: HREF
// ${completedata.articles[i].title} :: TITLE
// ${completedata.articles[i].description} :: DESC

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
displayData("id1", "Technology", 6, dataDiv)

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
    <h3 class="m-0">Popular</h3>
</div>
`

displayData("popularNewsSidebar", "popular", 10, popularNews, headerNews)

var moreTrending =`
<div class="col-lg-6">
    <div class="d-flex mb-3">
        <img src="SRC" style="width: 100px; height: 100px; object-fit: cover;">
        <div class="w-100 d-flex flex-column justify-content-center bg-light px-3" style="height: 100px;">
            <div class="mb-1" style="font-size: 13px;">
                <a href="">Trending</a>
                <span class="px-1">/</span>
                <span>DATE</span>
            </div>
            <a class="h6 m-0" href="HREF">TITLE</a>
        </div>
    </div>
</div>
`

displayData("moreTrending", "trending", 10, moreTrending)

