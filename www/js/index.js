$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
       
        
        /*captura de valores*/     
		var fra = document.getElementById("Frasetxt").value;		
        var lug = document.getElementById("Lugartxt").value;
        var anio = document.getElementById("Aniotxt").value;
     
        var key = window.localStorage.length;
		key = key +1;
		
		var object = { Frase :fra,Lugar : lug, Anio: anio};

	localStorage.setItem(key, JSON.stringify(object));
              
        
       
        /*Limpiando los campos o inputs*/
		 document.getElementById("Frasetxt").value = "";
        document.getElementById("Lugartxt").value = "";
        document.getElementById("Aniotxt").value = "";
       
        
     
    });   
});





//$('#historia').live("pageshow", function (event) {
 //document.addEventListener("deviceready", onDeviceReady, false);
 
 //$(document).delegate("#historia", "pageshow", function() {
//$(document).on('pageshow', '#historia', function(event) {
	
		$(document).ready(function(){    
   $('#boton-cargar').click(function(){  
  
  //Cantidad de frases en Lugares Visitados
  Frases = window.localStorage.length;
  $("#Frases").html("<strong Style>" + Frases + "</strong> Frases en Lugares Visitados ");
   
  // Empty the list of recorded tracks
  $("#Lista").empty();
   
  // Iterate over all of the recorded tracks, populating the list
  for(i=0; i<Frases; i++){
	  
	  var key =  localStorage.key(i);
	  
	  var  Det= localStorage.getItem(key);

	  var detalle = JSON.parse(Det);
	  
    
	$("#Lista").append("<li>Frase :" + detalle.Frase + "</li>");
	$("#Lista").append("<li>Lugar:" + detalle.Lugar + "</li>");
	$("#Lista").append("<li>Año:" + detalle.Anio + "</li><hr></br>");
  }
   
  // Tell jQueryMobile to refresh the list
  $("#Lista").listview('refresh');
 
});});


	   
	   	$(document).ready(function(){    
   $('#boton-borrar').click(function(){
	   window.localStorage. clear() ;
	   $("#Lista").listview('refresh');
  });});
	   
	   
	   
	   
	   
 