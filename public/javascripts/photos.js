var ready, set_positions;
set_positions = function(){
	// loop through and give each task a data-pos
	// attribute that holds its position in the DOM
	$('.photo__thumb').each(function(i){
		$(this).attr("data-pos",i+1);
	});
}
ready = function(){
	// call set_positions function
	set_positions();
	$('.sortable').sortable({
	    handle: '.dragdrop__handler'
	});

	// after the order changes
	$('.sortable').sortable().bind('sortupdate', function(e, ui) {
		// array to store new order
		updated_order = []
		// set the updated positions
		set_positions();
		// populate the updated_order array with the new photos positions
		$('.photo__thumb').each(function(i){
			updated_order.push({ id: $(this).data("id"), position: i+1 });
		});

		$.ajaxSetup({
		  headers: {
			    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			  }
		});
		// send the updated order via ajax
		$.ajax({
			type: "PUT",
			url: '/photos/sort',
			data: { order: updated_order }
		});
	})

	$(document).on('click', '.delete__photo', function(){
		var el = $(this).closest('.photo__thumb')
		var photo_id = el.data('id')
		$.ajaxSetup({
		  headers: {
			    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			  }
		});
	$.ajax({
			type: 'DELETE',
			url: `/photos/${photo_id}`,
			success: function(){
				el.fadeOut(400, function(){
					$(this).remove()
				})
			}
		})
	})
}
$(document).ready(ready);
