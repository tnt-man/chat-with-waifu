const container = document.querySelector('.container');
let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=${limit}$_page=${pageCount}');
  const data = await response.json();
  // console.log(data[0].url) //
  data.map((curElm, index)=> {
    const htmlData = '
    <div class="posts">
      <p class="post-id">${postCount++}</p>
      <img class="profile" src=${curElm.url} alt="">
      <h2 class="caption">${curElm.title}</h2>
    </div>
    ';
    container.insertAdjacementHTML('beforeend', htmlData);
  })


}

getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  },300)
}

window.addEventListener('scroll',() =>{
  const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

  if(scrollTop + clientHeight >= scrollHeight){
    console.log('It is bottom of the page')
    show.Data();
  }
})
