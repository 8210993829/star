let search = document.querySelector('#serach-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');




search.onclick = () =>{
    searchbox.classList.toggle('active');
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
  }



  $(document).ready(function(){
    var owl = $('#partenerrr');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{

            0:{

                items:1
            },
            375:{

                items:2
            },
            600:{

                items:3
            },
            960:{

                items:3
            },
            1200:{

                items:4
            }
        }
    });
  });










































// let search = document.querySelector('#serach-bar');
// let searchbox =document.querySelector('.search-box');

// search.onclick = () =>{
//     searchbox.classList.toggle('active');
// }