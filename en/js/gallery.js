var galleryContainer = $('#gallery-container');
console.log(galleryContainer);

galleryContainer.text('');

$( document ).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'js/date.json',
        cache: false,
        dataType: 'json',
        success: function (data) {
            var response = data;
            console.log(response);
            $.each(response, function(index, value) {
                var photo = `
                    <div class="gallery__photo">
                        <a href="${value.url}" data-lightbox="gallery-home">
                            <img src="${value.url}" alt="${value.alt}">
                        </a>
                    </div>
                `;
                galleryContainer.append(photo);
            });
        }
    }); 
});