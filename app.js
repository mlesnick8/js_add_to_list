$( document ).ready(function() {
	

	$('button').on("click", (e) => { 
	let value = $('input').val()
	if (value) {
		$('#ul1').prepend(`<li>${value}</li>`)
		$('input').val('')
	}
	//<li>Apples</li>
	//make a red bar around input field on else
	//make list stay when you refresh--local storage--homework
	})
});