const btns = document.querySelectorAll('.share-btn');
const footer = document.querySelector('.footer');
const user = document.querySelector('.user');

btns.forEach(function(btn){
	btn.addEventListener('click', function(){
		footer.classList.toggle('hide');
		if(window.innerWidth < 769){
			user.classList.toggle('hide');
		}
		if(window.innerWidth >= 769){
			user.classList.remove('hide');
		}
	})	
})
