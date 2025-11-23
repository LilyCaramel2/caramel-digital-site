document.addEventListener('DOMContentLoaded', function(){
  const bloom = document.querySelector('.hero-bloom');
  if(bloom){
    setInterval(()=>{
      const t = (Math.sin(Date.now()/2200)+1)/2;
      bloom.style.transform = `translateY(${(t-0.5)*10}px) scale(${1 + t*0.03})`;
      bloom.style.opacity = 0.08 + t*0.1;
    },90);
  }

  const form = document.getElementById('hubspot-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = 'Sending...';
      setTimeout(()=>{ btn.textContent = 'Check your inbox'; btn.disabled = true; },800);
    });
  }
});