function btn_move(el, mouseLeft, mouseTop)
{
	var leftRnd = (Math.random() - 0.5) * 20;
	var topRnd = (Math.random() - 0.5) * 20;
	var btnLeft = mouseLeft + (leftRnd>0?100:-100)+leftRnd;
	var btnTop = mouseTop + (topRnd>0?30:-30)+topRnd;

	btnLeft = btnLeft<100?
			(btnLeft+window.innerWidth-200):
			(btnLeft>window.innerWidth-100?
				btnLeft-window.innerWidth+200:
				btnLeft);

	btnTop = btnTop<100?
			(btnTop+window.innerHeight-200):
			(btnTop>window.innerHeight-100?
				btnTop-window.innerHeight+200:
				btnTop);

	el.style.position = "fixed";
	el.style.left = btnLeft + 'px';
	el.style.top = btnTop + 'px';
	el.style.color = 'yellow';
	el.value = 'Google';

}

function over_btn(e)
{
	// alert('over_btn was executed.')
	if(!e)
	{
		e = window.event;
	}

	btn_move(this, e.clientX, e.clientY);
}

document.getElementById('su').onmouseover = over_btn;