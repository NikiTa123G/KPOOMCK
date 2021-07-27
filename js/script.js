//===================---//nav_burger//---======================//

let navBurger = document.querySelector('.nav-burger');
let navigation = document.querySelector('.navigation');
let body = document.querySelector('body');
// let body = document.querySelector('body');

navBurger.addEventListener("click", function() {
	navBurger.classList.toggle('active');
	navigation.classList.toggle('menu-active');
	body.classList.toggle('lock');
});

//=====================---//nav_burger//---========================//

let footerBtns = document.querySelectorAll('.footer_titele');

for (let i = 0; i < footerBtns.length; i++) {
	const btn = footerBtns[i];
	btn.addEventListener("click", function(e){
		btn.classList.toggle('active');
		e.preventDefault();
	});
}

const nav = document.querySelector('.navigation');
const windowHeight = window.innerHeight;


window.addEventListener("resize", function(){
	setScrollMenu();
	if (800 < window.innerWidth) {
		console.log('remove');
		navBurger.classList.remove('active');
		navigation.classList.remove('menu-active');
		body.classList.remove('lock');
	}
});

let wrapMenu = document.querySelector('.wrap_menu');
let innerMenu = document.querySelector('.inner_menu');
function setScrollMenu(){
	
	console.log(wrapMenu.offsetHeight, window.innerHeight);
	if ((wrapMenu.offsetHeight) <= innerMenu.offsetHeight) {
		console.log('add');
		wrapMenu.classList.add('scroll');
	}else{
		console.log('remove');
		wrapMenu.classList.remove('scroll');
	}
	
}

let dropList = document.querySelectorAll('.drop_btn');
let lockTimer = 300;

for (let i = 0; i < dropList.length; i++) {
	const dropItem = dropList[i];
	console.log(dropItem);
	dropItem.addEventListener("click", function(e){
		if(window.innerWidth < 800) {
			setTimeout(setScrollMenu(), lockTimer);
			dropItem.classList.toggle('active_drop');
			e.preventDefault();

			// if (wrapMenu.offsetHeight < window.innerHeight) {
			// 	console.log('add');
			// 	wrapMenu.classList.add('scroll');
			// }else{
			// 	console.log('remove');
			// 	wrapMenu.classList.remove('scroll');
			// }
		}
	});
}

nav.style.height = nav.offsetHeight + "px";
// console.log(header.innerHeight);
window.onscroll = () => {
	const navWrap = document.querySelector('.wrap_nav');
	const scrollY = window.scrollY;
	const header = document.querySelector('.inner_header');
	const heightHeader = header.offsetHeight;

	if (scrollY>heightHeader) {
		nav.classList.add('fixed');
		navWrap.style.height = nav.offsetHeight + "px";
	}else{
		nav.classList.remove('fixed');
	}
}

// //======================---//popup//---==========================//

// const popapLinkcs = document.querySelectorAll('.popap-linck');
// const body = document.querySelector('body');
// const lockPading = document.querySelector(".lock-pading");
// const nav = document.querySelector('.navigation');

// let unlock = true;

// const timeout = 800;

// if (popapLinkcs.length > 0) {
// 	for (let i = 0; i < popapLinkcs.length; i++) {
// 		const popapLinck = popapLinkcs[i];
// 		popapLinck.addEventListener("click", function(e) {
// 			const popapName = popapLinck.getAttribute('href').replace('#', '');
// 			const curentPopap = document.getElementById(popapName);
// 			popapOpen(curentPopap);
// 			e.preventDefault();
// 		});
// 	}
// }

// const popapCloseIcon = document.querySelectorAll('.cloce-popap');

// if (popapCloseIcon.length > 0) {
// 	for (let i = 0; i < popapCloseIcon.length; i++) {
// 		const el =popapCloseIcon[i];
// 		el.addEventListener('click', function(e) {
// 			popapClose(el.closest('.popap'));
// 			e.preventDefault();
// 		});
// 	}
// }

// const plan = document.querySelector('.plan');

// function popapOpen(curentPopap) {
// 	if (curentPopap && unlock) {
// 		const popapActive = document.querySelector('.popap.open');
		
// 		if (popapActive) {
// 			popapClose(popapActive, false);
// 		}else {
// 			bodyLock();
// 		}
// 		curentPopap.classList.add('open');
// 		nav.classList.add('up-nav');
// 		curentPopap.addEventListener("click", function(e) {
// 			if (!e.target.closest('.popap-content')) {
// 				popapClose(e.target.closest('.popap'));
// 			}
// 		});
// 	}
// }

// function popapClose (popapActive, doUnlock = true) {
// 	if (unlock) {
// 		popapActive.classList.remove('open');
// 		nav.classList.remove('up-nav');
// 		if (doUnlock) {
// 			bodyUnLock();
// 		}
// 	}
// }

// function bodyLock() {
// 	const lockPadingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 	if (lockPading) {
// 		for (let i = 0; i < lockPading.length; i++) {
// 			const el = lockPading[i];
// 			el.style.padingRight = lockPadingValue;
// 		}
// 	}
// 	body.classList.add('lock');

// 	unlock = false;
// 	setTimeout(function() {
// 		unlock = true;
// 	}, timeout);
// }

// function bodyUnLock() {
// 	setTimeout(function() {
// 		if (lockPading) {
// 			for (let i = 0; i < lockPading.length; i++) {
// 				const el = lockPading[i];
// 				el.style.padingRight = '0px';
// 			}
// 		}
// 		body.style.padingRight = '0px';
// 		body.classList.remove('lock');
// 	}, timeout);

// 	unlock = false;
// 	setTimeout(function() {
// 		unlock = true;
// 	}, timeout);
// }

// document.addEventListener('keydown', function (e) {
// 	if (e.which === 27) {
// 		const popapActive = document.querySelector('.popap.open');
// 		popapClose(popapActive);
// 	}
// });

//======================---//popup//---==========================//
