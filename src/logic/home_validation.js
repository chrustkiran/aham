export default class HomeValidation{
    loadFunction = () => {
        setTimeout(function() { //Start the timer
            document.getElementById('preloader-active').style.display = 'none';
            document.getElementsByTagName('body')[0].style.overflow = 'visible'
        }.bind(this), 500)
    }
}