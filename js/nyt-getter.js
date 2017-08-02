$( () =>{

  $('#category').on('change', function(event){
    event.preventDefault();
    $('.articles-list').empty();
    $('.main-nav').css({'height':'auto', 'justify-content':'flex-start'});
    $('.logo_image').addClass('resized');
    $('.articles').css('display', 'flex');
    $('.loader').css('display', 'block');
    
    // Get user input from select field
    let input = $('#category').val();

    // build our geturl
    let geturl = `https://api.nytimes.com/svc/topstories/v2/${input}.json?api-key=54d43868054141fc8972cfb3facb34c3`
    $.ajax({
      url: geturl,
      method: 'GET',
    }).done(data => {
       function hasImage(entry){
         return entry.multimedia.length
       }
       let newArray = data.results.filter(hasImage)
       newArray.splice(12);

       $.each(newArray, (key, value) => {
        let imgurl = value.multimedia[4].url;
        let txt = value['abstract'];
        let link = value.url;
        let listitem = `<li class="article-item"><a class="article-link" href="${link}" target="blank"><div class="article-wrapper fade-in-on-load" style="background-image:url(${imgurl})"><div class="article-text"><p>${txt}</p></div></div></a></li>`;
        
        $('.articles-list').append(listitem);
        $('.loader').hide();
        
      });
    }).fail(()=>{
       $('.articles-list').append('<li> Sorry there was an error </li>')  
    });
  });
});