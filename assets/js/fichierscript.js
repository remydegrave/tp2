$(document).ready(function(){
    $(".form-group").on("input",".note",function(){
        var totalSum = 0;
        
        var value = $(this).val();
    if ((value !== '') && (value.indexOf('.') === -1)) {
        $(this).val(Math.max(Math.min(value, 20), 0));
    }
        
    $(".form-group .note").each(function(){
            var inputVal = $(this).val();
            if($.isNumeric(inputVal)){
                totalSum += parseFloat(inputVal)/5;
            }
          
            
        });
        $("#result").val(totalSum);
        
        if (totalSum >= 0 && totalSum < 10) {
          $('#comment').val('En dessous de la moyenne');
        }
        else if (totalSum >= 10 && totalSum < 13) {
          $('#comment').val('Moyen');
        }
        else if (totalSum >= 13 && totalSum < 16) {
          $('#comment').val('Bien');
        }
        else if (totalSum >= 16 && totalSum < 20) {
          $('#comment').val('Très Bien');
        }
        else if (totalSum = 20) {
          $('#comment').val('Excellent');
        }
        else $('#comment').val('Erreur');

       })

    });
