var set_upload = function(){

	el = document.querySelector('#uploader');
	$('#uploader').pluploadQueue({
			// General settings
			runtimes : 'html5,browserplus,silverlight,flash,gears',
			url : el.dataset.urlUpload,
			max_file_size : '10mb',
			multipart: true,  
			multipart_params: {  
				'_balder_session' : encodeURIComponent(el.dataset.sessionKey),
				'authenticity_token' : $('meta[name="csrf-token"]').attr('content'),
				'photo[album_id]' : el.dataset.albumId
			 },

			// Resize images on clientside if we can
			//resize : {width : 320, height : 240, quality : 90},

			// Specify what files to browse for
			filters : [
				{title : "Image files", extensions : "jpg,gif,png,bmp,jpeg,tif,tiff"}
			],

			// Flash settings
			flash_swf_url : '/javascripts/plupload/js/plupload.flash.swf',

			// Silverlight settings
			silverlight_xap_url : '/javascripts/plupload/js/plupload.silverlight.xap',
			dragdrop: true,
			
			// Post init events, bound after the internal events
				init : {

					FileUploaded: function(up, file, info) {
						// Called when a file has finished uploading
						res = JSON.parse(info.response);
						var item = $('<li>').appendTo('#thumbs')
						item.attr({
								'class': 'photo__thumb dim',
							"data-id": res.photo.id,
								'draggable': true
								})
						var image = $('<img>').appendTo(item)
						image.css('display','none')
						image.attr('src', res.photo.file.album.url )
						image.fadeIn('slow')
						set_positions()
						$('.sortable').sortable();
					}
				}
		});

		// Client side form validation
		$('form#form_uploader').submit(function(e) {
			var uploader = $('#uploader').pluploadQueue();

			// Validate number of uploaded files
			if (uploader.total.uploaded == 0) {
				// Files in queue upload them first
				if (uploader.files.length > 0) {
					// When all files are uploaded submit form
					uploader.bind('UploadProgress', function() {
						if (uploader.total.uploaded == uploader.files.length)
							$('form#form_uploader').submit();
					});

					uploader.start();
				} else
					alert('You must at least upload one file.');

				e.preventDefault();
			}
		});
}
$(document).ready(set_upload)

