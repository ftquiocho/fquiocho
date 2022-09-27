$(function() {
    $('.lazy').Lazy({
        effect: 'fadeIn',
        onError(element) {
            console.log('Error Log :> ', element.data('src'))
        }
    })
})
