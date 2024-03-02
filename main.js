$(document).ready(
    function(){
        $('#botao').click(
            function(){
                var Adcionar = $('input[name=ListarTarefas]').val();
                 $('ol').append('<li>' + Adcionar + '</li>');
            });
       
       $("input[name=ListarTarefas]").keyup(function(event){
          if(event.keyCode == 13){
            $("#botao").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
    }
);