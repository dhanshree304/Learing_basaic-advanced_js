const accessKey = "UJ4ykbP1Vo6keHBSThAv-EIzUtzpuiFu7mwySoW8yEg";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");



let page = 1;
async function searchImage( keyword) {

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const res = await fetch(url);
  const data = await res.json();

  const results = data.results;

  results.map((result)=>{
    const image =document.createElement("img");
    image.src=result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href =result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);


  })

  showMoreBtn.style.display="block";

  //console.log(data);
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   

searchImage(searchBox.value);
 })
 showMoreBtn.addEventListener("click",()=>{
    page++
    searchImage();
 })
