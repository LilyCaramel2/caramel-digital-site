document.addEventListener('DOMContentLoaded', function(){
  const bloom = document.querySelector('.logo');
  if(bloom){
    let t = 0;
    setInterval(()=>{
      t = (Math.sin(Date.now()/1600)+1)/2;
      bloom.style.transform = `translateY(${(t-0.5)*6}px) scale(${1 + t*0.01})`;
      bloom.style.filter = `drop-shadow(0 ${8 + t*6}px ${24 + t*30}px rgba(160,20,120,0.08))`;
    },90);
  }

  const hub = document.getElementById('hubspot-form');
  if(hub && !hub.querySelector('form')){
    const f = document.createElement('form');
    f.innerHTML = '<input type="email" name="email" placeholder="Your email" required style="padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#fff;margin-right:8px"><button class="btn primary">Send</button>';
    hub.appendChild(f);
    f.addEventListener('submit', function(e){ e.preventDefault(); alert("Thanks — check your inbox (demo)"); });
  }
});
