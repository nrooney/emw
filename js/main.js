Zepto(function($){
  	
  	console.log('Ready to Zepto!');
  	var count = 0;
  	
  	$.getJSON('/emw/emw-talks.json', function(data){
  		console.log(data);
  		
  		var now = new Date();
  		var timeNow = now;
  		
  		if(timeNow.getMinutes() < 10){
			timeNow = "" + timeNow.getHours() + ':0' + timeNow.getMinutes();
		}
		else{
			timeNow = "" + timeNow.getHours() + ":" +  timeNow.getMinutes();
		}
  		
  		$('#time').append(timeNow);
  		
  		$.each(data, function(i, val) {
  			
  			if(i = "stages"){
  				for(var k in val){
				
					for(var l in val[k].events){
					
						count++;
				
						var desc = val[k].events[l].description;
						var speaker = val[k].events[l].speaker;
						var start = val[k].events[l].start;
						var end = val[k].events[l].end;
						start = new Date(start);
						end = new Date(end);
						var onNow = false;
						
						if(now >= start && now <= end){
							onNow = true;
							if(count == 1 || count == 4 || count == 5 || count == 15 || count == 18 || count == 20 || count == 21 || count == 22 || count == 23 || count == 28){
								$('#nothing').css('display','none');
							}
						}
						
						if(start.getMinutes() < 10){
							start = start.getHours() + ':0' + start.getMinutes()
						}
						else{
							start = start.getHours() + ':' + start.getMinutes()
						}
						var title = val[k].events[l].title;
						var type = val[k].events[l].type;
						$('#talks').append('<div class="toggle now' + onNow + '" id="event' + count + '"></div>');
						$('#event' + count).append('<h1>' + title + '</h1>');
						if(speaker != null) {
							$('#event' + count).append('<h2>' + speaker + '</h2>');
						}
						$('#event' + count).append('<p>' + start + '</p>');
						$('#event' + count).append('<p>' + desc + '</p>');
					
					}
				}
			}
		}); 
	});
	
	$(document).on('click', 'div', function(e) { 
		console.log('clicked'); 
		
	})
})