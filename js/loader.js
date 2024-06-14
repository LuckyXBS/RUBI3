const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
			 document.title = 'RUBI - загрузка'
             loader.style.opacity = "0";
			 $('body').addClass('disabled');
             setTimeout(function(){
               loader.style.display = "none";
			   $('body').removeClass('disabled');
			   document.title = 'RUBI'
             }, 500);
           },2500);
         }