const c=JSON.parse(localStorage.getItem('cart')||'[]');const box=document.getElementById('cart');let total=0;
if(!c.length)box.innerHTML='<p>Your cart is empty.</p>';
c.forEach((p,i)=>{total+=Number(p.price);box.innerHTML+=`<div class="card" style="margin:10px 0"><h3>${p.name}</h3><p>৳${p.price}</p><button onclick="removeItem(${i})">Remove</button></div>`});
document.getElementById('total').textContent='Total: ৳'+total.toFixed(2);
function removeItem(i){c.splice(i,1);localStorage.setItem('cart',JSON.stringify(c));location.reload();}