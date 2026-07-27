const fs = require('fs');

const sourcePath = [
  'C:/Users/1016316/Downloads/polkapop_redesign_v22_updated_hero_bottles.html',
  'C:/Users/1016316/Downloads/polkapop_redesign_v22_updated_hero_bottles (1).html',
  'C:/Users/1016316/Downloads/polkapop_redesign_v15_menu_update.html',
].find((path) => fs.existsSync(path));

if (!sourcePath) {
  throw new Error('No Polka Pop prototype HTML file found in Downloads.');
}
const html = fs.readFileSync(sourcePath, 'utf8');

const css = html.match(/<style>([\s\S]*?)<\/style>/i)[1].trim();
let body = html.match(/<body[^>]*>([\s\S]*?)<script>/i)[1].trim();
const js = html.match(/<script>([\s\S]*?)<\/script>/i)[1].trim();
const links = (html.match(/<link[^>]+>/g) || [])
  .filter((link) => /fonts\.googleapis|fonts\.gstatic|preconnect/.test(link))
  .join('\n');

const blogSection = `
    <section class="blog-section" id="journal">
      <div class="blog-container">
        <div class="blog-heading">
          <div class="blog-kicker">From the Polka Pop Journal</div>
          <h2>Cool Taste for Every Moment</h2>
        </div>
        <div class="blog-layout">
          <article class="blog-feature">
            <a class="blog-image large" href="#">
              <img src="https://cdn.shopify.com/s/files/1/0955/2137/4497/files/polkapop-hero-banner.png?v=1783056098" alt="Polka Pop flavours on ice">
            </a>
            <span class="blog-pill">Summer</span>
            <h3>5 Fizzy Ways to Beat the Heat This Summer</h3>
            <a class="blog-read" href="#">Read More</a>
          </article>
          <div class="blog-side">
            <article class="blog-row">
              <a class="blog-image" href="#">
                <img src="https://polkapop.in/cdn/shop/files/PolkaPOPlisting_lime-lemon__1-7-21.png?v=1757614099&width=900" alt="Polka Pop Lemon Lime bottle">
              </a>
              <div class="blog-copy">
                <span class="blog-pill">Favorites</span>
                <h3>Why Lemon Lime Became Everyone's Favorite Flavor</h3>
                <a class="blog-read" href="#">Read More</a>
              </div>
            </article>
            <article class="blog-row">
              <a class="blog-image" href="#">
                <img src="https://polkapop.in/cdn/shop/files/PolkaPOPlisting_orange__1-1-36.png?v=1757613042&width=900" alt="Polka Pop Orange bottle">
              </a>
              <div class="blog-copy">
                <span class="blog-pill">Process</span>
                <h3>Behind the Bubbles: How Polka Pop Drinks Are Made</h3>
                <a class="blog-read" href="#">Read More</a>
              </div>
            </article>
          </div>
        </div>
        <div class="blog-action"><a class="blog-button" href="#">View All Blog</a></div>
      </div>
    </section>
`;

const blogCss = `
    .blog-section{background:#fbfff0;padding:72px 28px 84px;color:#21110d}
    .blog-container{max-width:1000px;margin:0 auto}
    .blog-heading{text-align:center;margin-bottom:38px}
    .blog-kicker{color:#0d7146;font-size:14px;font-weight:900;letter-spacing:.01em;margin-bottom:8px}
    .blog-heading h2{font-family:Fraunces,serif;font-size:clamp(38px,4.2vw,58px);line-height:.95;letter-spacing:-.045em;margin:0;color:#21110d}
    .blog-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:26px 28px;align-items:start}
    .blog-feature,.blog-row{position:relative}
    .blog-image{display:block;overflow:hidden;border-radius:7px;background:#fff4dc}
    .blog-image.large{aspect-ratio:1.68/1}
    .blog-row .blog-image{aspect-ratio:1.7/1}
    .blog-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s cubic-bezier(.16,.86,.24,1)}
    .blog-feature:hover .blog-image img,.blog-row:hover .blog-image img{transform:scale(1.04)}
    .blog-pill{display:inline-flex;align-items:center;border:1.5px solid #0d7146;border-bottom-width:4px;border-radius:999px;background:#d9ff48;color:#0d7146;padding:5px 12px;font-size:12px;font-weight:900;line-height:1;margin-top:14px}
    .blog-feature h3,.blog-row h3{font-family:Fraunces,serif;color:#21110d;letter-spacing:-.035em;margin:12px 0 12px;line-height:1.02}
    .blog-feature h3{font-size:24px}
    .blog-row h3{font-size:22px;max-width:280px}
    .blog-read{display:inline-flex;color:#21110d;font-size:14px;font-weight:800;text-decoration:none}
    .blog-read:hover{color:#0d7146}
    .blog-side{display:grid;gap:28px}
    .blog-row{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;align-items:center}
    .blog-row .blog-pill{margin-top:0}
    .blog-action{display:flex;justify-content:center;margin-top:38px}
    .blog-button{display:inline-flex;align-items:center;justify-content:center;min-height:46px;border-radius:999px;background:#0d7146;color:#d9ff48;text-decoration:none;font-weight:900;padding:0 24px;border-bottom:5px solid #06482e;box-shadow:0 12px 24px rgba(6,72,46,.10)}
    .blog-button:hover{transform:translateY(-2px);background:#06482e}
    @media (max-width: 980px){
      .blog-container{max-width:720px}.blog-layout{grid-template-columns:1fr}.blog-row{grid-template-columns:1fr 1fr}.blog-row h3{max-width:none}
    }
    @media (max-width: 620px){
      .blog-section{padding:58px 18px 66px}.blog-heading h2{font-size:42px}.blog-row{grid-template-columns:1fr;gap:12px}.blog-side{gap:28px}.blog-feature h3,.blog-row h3{font-size:22px}.blog-button{width:100%;max-width:220px}
    }
`;

const hideThemeChrome = [
  'body:has(.polkapop-prototype-section) .shopify-section-group-header-group, body:has(.polkapop-prototype-section) .shopify-section-group-footer-group, body:has(.polkapop-prototype-section) header.shopify-section, body:has(.polkapop-prototype-section) footer.shopify-section, body:has(.polkapop-prototype-section) .announcement-bar, body:has(.polkapop-prototype-section) .announcement-bar-section { display:none !important; }',
  'body:has(.polkapop-prototype-section) main, body:has(.polkapop-prototype-section) #MainContent { padding:0 !important; margin:0 !important; max-width:none !important; }',
  '.polkapop-prototype-section { display:block; width:100%; }',
  '.polkapop-prototype-section #shop.green-section, .polkapop-prototype-section #reviews.green-section { background:var(--green) !important; color:#fff !important; }',
].join('\n');

body = body.replace(/\n\s*<section class="spotlight" id="combos">[\s\S]*?<\/section>\n\s*(?=<section class="section" id="resources">)/, '\n');
body = body.replace(
  'https://polkapop.in/cdn/shop/files/PolkaPOPlisting_lime-lemon__1-7-21.png?v=1757614099&width=900',
  'https://cdn.shopify.com/s/files/1/0955/2137/4497/files/polkapop-lemon-lime-hero-bottle.png?v=1783326958'
);
body = body.replace(
  'https://polkapop.in/cdn/shop/files/PolkaPOPlisting_orange__1-1-36.png?v=1757613042&width=900',
  'https://cdn.shopify.com/s/files/1/0955/2137/4497/files/polkapop-orange-hero-bottle.png?v=1783327234'
);
body = body.replace('\n    <footer class="footer">', `${blogSection}\n    <footer class="footer">`);

const section = `{% # theme-check-disable RemoteAsset, ImgWidthAndHeight, CdnPreconnect %}
${links}
<section id="polkapop-prototype-{{ section.id }}" class="polkapop-prototype-section">
${body}
</section>

{% stylesheet %}
${hideThemeChrome}
${css}
${blogCss}
{% endstylesheet %}

{% javascript %}
${js}
{% endjavascript %}

{% schema %}
{
  "name": "Polka Pop prototype",
  "settings": [],
  "presets": [
    { "name": "Polka Pop prototype" }
  ]
}
{% endschema %}
{% # theme-check-enable RemoteAsset, ImgWidthAndHeight, CdnPreconnect %}
`;

fs.writeFileSync('sections/polkapop-homepage.liquid', section, 'utf8');
console.log(JSON.stringify({ written: section.length }, null, 2));
