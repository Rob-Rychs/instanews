const ul = document.getElementById('stories'); // Get the list where we will place our authors
const url1 = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'; // Get ID's of 500 stories in an array

//helper functions
 function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

$('button').on('click', function(){
    $('.articles-list').empty();
    $('.main-nav').css({'height':'auto', 'justify-content':'flex-start'});
    $('.articles').css('display', 'flex');
    $('.loader').css('display', 'block');
  fetch(url1) // Call the fetch function passing the url of the API as a parameter
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
   console.log(data); 
    for (i=0;i<48;i++) { // limit the amout of id's here or get all with data.length 
      var storyID = data[i];
      fetch('https://hacker-news.firebaseio.com/v0/item/'+storyID+'.json?print=pretty')
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
          var title = data['title'];
          var storyURL = data['url'];
          // var hnImgPossibilities = ['https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/10/Collective137_hnapi.png', 'https://pp.userapi.com/c413920/v413920235/130a/BfPisax4OI8.jpg', 'https://secure.meetupstatic.com/photos/event/2/4/a/2/global_448149378.jpeg', 'http://daniel.hepper.net/blog/wp-content/hacker_news_hd_logo.jpg', 'http://suruchifialoke.com/img/icon_hn.png', 'https://hn.algolia.com/assets/logo-hn-search.png', 'https://appsftw.com/im/is5.mzstatic.com/image/thumb/Purple1/v4/af/8c/fd/af8cfd9d-822b-3a0a-844a-98c2ad8911d8/source/512x512bb.jpg', 'https://lh3.googleusercontent.com/uZce957ZjTj1L37bbJmdUBHeaWc413cfV5iHznezn10rU1eHpsz8vElMCI-7-vnwdg=w300']
          var hnImg = 'https://lh3.googleusercontent.com/uZce957ZjTj1L37bbJmdUBHeaWc413cfV5iHznezn10rU1eHpsz8vElMCI-7-vnwdg=w300';
          console.log(title);
          console.log(storyURL);
          var storyitem = '<li class="article-item"><a class="article-link" href="'+storyURL+'" target="blank"><div class="article-wrapper" style="background-image:url('+hnImg+')"><div class="article-text"><p>'+title+'</p></div></div></a></li>';

          $('.articles-list').append(storyitem);
          $('.loader').hide();
      });
    }
  })
});