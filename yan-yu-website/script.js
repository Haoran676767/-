const spots=[...document.querySelectorAll('.spot')];
spots.forEach(spot=>spot.addEventListener('click',event=>{event.stopPropagation();const active=spot.classList.contains('active');spots.forEach(s=>s.classList.remove('active'));if(!active)spot.classList.add('active')}));
document.addEventListener('click',()=>spots.forEach(s=>s.classList.remove('active')));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){spots.forEach(s=>s.classList.remove('active'));document.activeElement?.blur()}});
