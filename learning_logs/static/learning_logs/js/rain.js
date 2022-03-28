var n = 50,
c = document.getElementById("bg-img"),
ctx = c.getContext("2d"),
cw = (c.width = c.offsetWidth);
ch = (c.height = 1080);
duration = ch/150,
img = new Image(),
particles = [],
particleNumber = 0,
Particle = function() {
    this.alpha = rand(0.1, 0.4);
    this.size = rand(60, 70);
    this.draw = function() {
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(img, this.x, this.y, this.size, this.size);
    }
};
function setParticle(p) {
    particleNumber++;
    var _dur = rand(duration/2, duration),
    _tl = new TimelineMax()
    .fromTo(p, _dur, {
        x:rand(-p.size, cw+ch/2),
        y:-p.size
        },{
        x:'-='+rand(ch/2-50,ch/2),
        y:ch+p.size,
        ease:Power0.easeNone,
        onComplete:function(){ setParticle(p); }
    });
    if (particleNumber<n) _tl.seek(_dur*rand());
}
for (var i=0; i<n; i++) {
    particles.push(new Particle());
    setParticle(particles[i]);
}
TweenMax.ticker.addEventListener("tick", function(){
    ctx.clearRect(0, 0, cw, ch);
    for (var i=0; i<n; i++) {
        particles[i].draw();
    }
});
window.addEventListener('resize', function() {
    particleNumber = 0;
    cw = (c.width = c.offsetWidth);
    ch = (c.height = 500);
    for (var i=0; i<n; i++) {
        TweenMax.killTweensOf(particles[i]);
        setParticle(particles[i]);
    }
});
function rand(min=0, max=1) {
    return min + (max-min)*Math.random();
}
img.src = "data:image/png;base64,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"