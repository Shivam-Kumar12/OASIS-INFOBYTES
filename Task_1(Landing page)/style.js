(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            window.alert("You cant submit! Fill the fields");
          }else{
            window.alert("Success!");
            
          }
          form.classList.add('was-validated');
          
        }, false);
      });
    }, false);
  })();
  
  document.getElementById('sub_btn').addEventListener('mouseover', over);
  document.getElementById('sub_btn').addEventListener('mouseout', notover);
  document.getElementById('src_btn').addEventListener('mouseover', over2);
  document.getElementById('src_btn').addEventListener('mouseout', notover2); 
  function over(){
    document.getElementById('sub_btn').style.background='rgb(40,167,69)';
  }
  function notover(){
    document.getElementById('sub_btn').style.background='rgb(0,123,255)';
  }
  function over2(){
    document.getElementById('src_btn').style.background='rgb(40,167,69)';
  }
  function notover2(){
    document.getElementById('src_btn').style.background='rgb(0,123,255)';
  }
  
  
  $(document).ready(function(){
    
    $('.fa-google-plus-g').hover(function(){
    $('.fa-google-plus-g').animate({'font-size': '60px'}, function(){ $('.fa-google-plus-g').animate({'font-size': '40px'}  );
    });});
    $('.fa-instagram').hover(function(){
    $('.fa-instagram').animate({'font-size': '60px'} ); }, function(){ $('.fa-instagram').animate({'font-size': '40px'} ); 
    });
       $('.fa-facebook-f').hover(function(){
    $('.fa-facebook-f').animate({'font-size': '60px'} ); }, function(){ $('.fa-facebook-f').animate({'font-size': '40px'} ); });   
   $('.fa-twitter').hover(function(){
    $('.fa-twitter').animate({'font-size': '60px'} ); }, function(){ $('.fa-twitter').animate({'font-size': '40px'} ); });
      $('.icons').hover(function(){
    $('.icons').animate({'font-size': '60px'} ); }, function(){ $('.icons').animate({'font-size': '40px'} ); });
    
    
     
    $("#sub_btn").click(function(){
      $("#sub_btn").slideUp(1000);
      $("#sub_btn").slideDown(1000);
    });
    $("#src_btn").click(function(){
      $("#src_btn").slideUp(1000);
      $("#src_btn").slideDown(1000);
    });
    
     $("#show1").click(function(){
       if($("#show1").text()=='Show skills'){
       $("#show1").text("Hide skills");
       }else{
          $("#show1").text("Show skills");
       }
      $("#div1").fadeToggle(); 
    });
    $("#show2").click(function(){
       if($("#show2").text()=='Show skills'){
       $("#show2").text("Hide skills");
       }else{
          $("#show2").text("Show skills");
       }
      $("#div2").fadeToggle(); 
    });
    $("#show3").click(function(){
       if($("#show3").text()=='Show skills'){
       $("#show3").text("Hide skills");
       }else{
          $("#show3").text("Show skills");
       }
      $("#div3").fadeToggle(); 
    });
    
    $("#card1").hover(function(){
    $("#card1").css({ 'border-radius':'50px',
    'box-shadow': '5px 10px 18px #888888', 'padding': '8%'});
  }, function(){
       $("#card1").css({ 'border-radius':'0px',
    'box-shadow': '0px 0px 0px #FFF', 'padding': '5%'});
    });
    $("#card2").hover(function(){
    $("#card2").css({ 'border-radius':'50px',
    'box-shadow': '5px 10px 18px #888888', 'padding': '8%'});
  }, function(){
       $("#card2").css({ 'border-radius':'0px',
    'box-shadow': '0px 0px 0px #FFF', 'padding': '5%'});
    });
    $("#card3").hover(function(){
    $("#card3").css({ 'border-radius':'50px',
    'box-shadow': '5px 10px 18px #888888', 'padding': '8%'});
  }, function(){
       $("#card3").css({ 'border-radius':'0px',
    'box-shadow': '0px 0px 0px #FFF', 'padding': '5%'});
    });
    
  });