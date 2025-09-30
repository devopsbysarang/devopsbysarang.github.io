// IntersectionObserver to add .in-view when the badge scrolls into view
(function(){
if (!('IntersectionObserver' in window)){
// fallback: just show it
document.querySelectorAll('.portfolio-badge').forEach(el=>el.classList.add('in-view'));
return;
}
const obs = new IntersectionObserver((entries, observer)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('in-view');
observer.unobserve(entry.target);
}
});
},{threshold:0.18});
document.querySelectorAll('.portfolio-badge').forEach(el=>obs.observe(el));
})();
