$(document).ready(function (){
  editarUsuario(x);
  
});

function editarUsuario(x){
    $.get("hc",{"opc":7,"id":x},function (data) {
        var x = JSON.parse(data);
     
        $("#us").val(x.usuario);
        $("#con").val(x.clave);

    });
 
}

$("#editusuario").load(function (){
    var idu = $("#idu").val();
    var us = $("#us").val();
    var cu = $("#con").val();
    var estu = $("#es").val();
    var idr = $("#idro").val();
    var idp = $("#idpe").val();
    
    $.post("hc",{"id":idu,"usuari":us,"clav":cu,"estad":estu,"idro":idr,"idperson":idp,"opc":8}, function () {
     
    });
   
});

