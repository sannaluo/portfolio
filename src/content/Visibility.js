
export function changeVisibility (e, target, h)  {
    e.preventDefault();
    let targetEl = document.getElementById(target);
    
    targetEl.classList.remove('hidden');
    targetEl.classList.add('visible');
    if(h) {
       targetEl.classList.remove('visible');
       targetEl.classList.add('hidden');
    }
    
}

