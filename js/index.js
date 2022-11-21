import { displayData } from "./common";

var businessHeader=`
<div class="bg-light py-2 px-4 mb-3">
    <h3 class="m-0">Business</h3>
</div>
`

var businessNews=`
<div class="position-relative">
    <img class="img-fluid w-100" src="SRC" style="object-fit: cover;">
    <div class="overlay position-relative bg-light">
        <div class="mb-2" style="font-size: 13px;">
            <a href="">Business</a>
            <span class="px-1">/</span>
            <span>DATE</span>
        </div>
        <a class="h4 m-0" href="HREF">TITLE</a>
    </div>
</div>
`

displayData("businessNews", "Business", 4, businessNews, businessHeader)

console.log("calling display")