# Polka Pop Theme Owner Edit Guide

This document explains how a website owner can edit the Polka Pop homepage section safely and individually inside Shopify.

## Current Theme Setup

Store: polkapop.in

Live theme: Savor

Editable preview theme: Copy of Horizon

Preview URL:
https://polkapop.in/?preview_theme_id=187110850849

Main homepage file:
sections/polkapop-homepage.liquid

The homepage is currently built as one custom Shopify Liquid section. Each visual area is inside that section and can be edited by changing the matching content block in the file.

## Important Rule Before Editing

Always edit the unpublished theme first:

1. Go to Shopify Admin.
2. Open Online Store > Themes.
3. Find Copy of Horizon.
4. Use Customize or Edit code on Copy of Horizon.
5. Preview the changes.
6. Publish only after checking desktop and mobile.

Do not directly edit the live Savor theme unless you are intentionally making the final live update.

## Homepage Section Map

The main homepage section includes these areas:

1. Header menu
2. Hero slider
3. Running strip bar
4. Shop the range
5. About/benefits section
6. Quick delivery section
7. Lifestyle usage section
8. Customer love reviews
9. Recipes section
10. FAQ section
11. Blog/journal section
12. Footer

Each area can be edited individually in:

sections/polkapop-homepage.liquid

## 1. Header Menu

What it controls:

- Logo text
- Navigation links
- Cart icon
- Shop Now button

Search in the file for:

`<nav class="nav">`

Common edits:

- Change menu labels such as Collections, About, Reviews.
- Change link targets such as `#shop`, `#about`, `#reviews`.
- Change the Shop Now button text.

Safe link examples:

- `#shop` links to the product range section.
- `#reviews` links to customer reviews.
- `#journal` links to the blog section.
- `/collections/all` links to all products if you want a real Shopify collection page.

## 2. Hero Slider

What it controls:

- Large homepage hero slides
- Hero titles
- Hero subtitles
- Bottle images
- CTA buttons

Search in the file for:

`<section class="pp-hero"`

Each hero slide has:

- Title text
- Description text
- Button text
- Button link
- Bottle image URL
- Image alt text

Current hero bottle image examples:

- Lemon Lime:
  `polkapop-lemon-lime-hero-bottle.png`

- Orange:
  `polkapop-orange-hero-bottle.png`

To change a hero image:

1. Upload the new image to Shopify Content > Files.
2. Copy the Shopify image URL.
3. Replace the old `src="..."` value inside the correct hero slide.
4. Update the `alt="..."` text to describe the new image.

Recommended hero image format:

- Transparent PNG for bottle cutouts.
- Large banner JPG or PNG for full background images.
- Keep product images sharp and not blurry.

## 3. Running Strip Bar

What it controls:

- Moving announcement text
- Small animated ticker above the menu area

Search in the file for:

`ticker`

Common edits:

- Change announcement text.
- Add or remove repeated phrases.
- Adjust speed in CSS animation.
- Adjust height or padding if it feels too large.

Good content examples:

- Zero sugar
- Premium sparkling water
- Serve chilled
- Fast refreshment
- New flavours available

Keep the text short because the strip is animated.

## 4. Shop The Range

What it controls:

- Product cards
- Product images
- Product titles
- Product descriptions
- Prices
- View Product buttons
- Green background for this section

Search in the file for:

`id="shop"`

Each product card includes:

- Badge
- Image URL
- Star rating
- Product name
- Short description
- Price
- Button text

Current products:

- Cranberry
- Lemon Lime
- Orange
- Peach

To edit one product card:

1. Find the product card title, for example `<h3>Lemon Lime</h3>`.
2. Change only the content inside that card.
3. Keep the image inside the same `<div class="product-img">`.
4. Keep the button class as `small-btn` so the style remains unchanged.

Recommended product card image:

- Use front-facing bottle images.
- Use transparent PNGs when possible.
- Keep all product images visually similar in size.

## 5. About / Benefits Section

What it controls:

- Brand story
- Benefit blocks
- Supporting copy

Search in the file for:

`id="about"`

Common edits:

- Change the section title.
- Update benefit text.
- Adjust supporting brand message.

Keep this section simple and trust-focused. It should explain why Polka Pop is different without becoming too long.

## 6. Quick Delivery Section

What it controls:

- Fast ordering or quick delivery message
- Steps or callouts around ordering

Search in the file for:

`id="quick"`

Common edits:

- Update delivery timing.
- Update marketplace or ordering text.
- Change CTA buttons.

If delivery timing changes, update all matching text across the hero and quick delivery section so the site stays consistent.

## 7. Lifestyle Usage Section

What it controls:

- "A Pop for Every Moment"
- Moment cards
- Pairing suggestions
- Lifestyle product usage

Search in the file for:

`id="resources"`

Current moment examples:

- Desk Break Fizz
- Snack-Time Pop
- Cranberry cooler style usage
- Party or music moment

To edit a moment card:

1. Find the card title.
2. Change the image URL if needed.
3. Change the short paragraph.
4. Change the link label.

Keep the cards short and scannable.

## 8. Customer Love Reviews

What it controls:

- Green review section
- Star ratings
- Customer quotes
- Customer names
- Review dates

Search in the file for:

`id="reviews"`

Each review includes:

- Stars
- Quote
- Avatar initial
- Customer name
- Date

To replace a review:

1. Find the review text inside `<p class="quote">`.
2. Replace it with the new review.
3. Update the customer name.
4. Update the avatar initial to match the customer name.
5. Keep review text short so cards stay balanced.

Recommended review length:

- 1 to 2 short sentences.

## 9. Recipes Section

What it controls:

- Recipe selector
- Recipe bottle image
- Recipe title
- Recipe description
- Recipe steps
- Interactive recipe buttons

Search in the file for:

`id="recipes"`

Recipe buttons use data attributes, for example:

- `data-flavor`
- `data-title`
- `data-desc`
- `data-img`
- `data-steps`

To edit a recipe:

1. Change the visible button text.
2. Change the matching data attributes.
3. Keep `data-steps` separated with the pipe character: `|`

Example:

`data-steps="1. Add ice|2. Pour Polka Pop|3. Garnish & serve"`

Do not remove the data attributes because they power the interactive recipe effect.

## 10. FAQ Section

What it controls:

- Frequently asked questions
- Answers

Search in the file for:

`id="faq"`

Common edits:

- Add product storage answers.
- Add sugar/calorie answers.
- Add shipping or delivery answers.
- Add flavour availability answers.

Keep answers short and direct.

## 11. Blog / Journal Section

What it controls:

- Blog section above footer
- Main featured article
- Two smaller side articles
- Blog image thumbnails
- Category pills
- Read More links
- View All Blog button

Search in the file for:

`id="journal"`

Current section title:

`Cool Taste for Every Moment`

Current article structure:

- Featured article on the left
- Two smaller articles on the right
- CTA button below

To edit a blog card:

1. Replace the image URL inside the card.
2. Change the pill label, such as Summer, Favorites, or Process.
3. Change the article title.
4. Change `href="#"` to the real blog article URL when available.

Example real blog URL:

`/blogs/news/article-handle`

Example View All Blog URL:

`/blogs/news`

Recommended blog image ratio:

- Featured article: wide rectangle.
- Side articles: landscape rectangle.
- Keep all images bright and product-focused.

## 12. Footer

What it controls:

- Footer brand text
- Footer menu columns
- Copyright
- Footer links

Search in the file for:

`<footer class="footer">`

Common edits:

- Update footer menu names.
- Add real page links.
- Change copyright text.
- Add contact or policy links.

Recommended footer links:

- `/collections/all`
- `/pages/about-us`
- `/pages/contact`
- `/policies/privacy-policy`
- `/policies/refund-policy`
- `/policies/shipping-policy`
- `/blogs/news`

## Editing Colors

Search in the CSS area for:

`:root`

The main colors are controlled by CSS variables, such as:

- `--green`
- `--lime`
- `--ink`
- `--cream`

Change colors carefully because they affect many sections.

Recommended rule:

Change one color at a time, preview, then continue.

## Editing Spacing

Common spacing controls:

- `padding`
- `margin`
- `gap`
- `height`

If a section has too much white space, reduce vertical padding.

Example:

Change:

`padding:90px 24px`

To:

`padding:64px 24px`

Do not remove padding completely because mobile layout may become cramped.

## Editing Images

Best practice:

1. Upload images through Shopify Content > Files.
2. Copy the image URL.
3. Replace the old `src` URL.
4. Update alt text.
5. Preview desktop and mobile.

For product bottle images:

- Use PNG.
- Prefer transparent background.
- Keep the bottle centered.
- Avoid extra empty space around the bottle.

For banners:

- Use high-resolution images.
- Avoid important text inside the image if possible.
- Make sure the product is visible on mobile.

## Editing Links

Most buttons currently use section links like:

- `#shop`
- `#quick`
- `#reviews`
- `#journal`

These scroll to homepage sections.

For real Shopify pages, use:

- `/collections/all`
- `/products/product-handle`
- `/blogs/news`
- `/pages/page-handle`

Always test every button after changing links.

## Safe Editing Checklist

Before editing:

- Confirm you are editing Copy of Horizon.
- Keep a backup copy of the original text or image URL.
- Change one section at a time.

After editing:

- Preview desktop.
- Preview mobile.
- Check hero slider.
- Check animated running strip.
- Check product card images.
- Check recipe interaction.
- Check all buttons.
- Check footer links.

Before publishing:

- Confirm the live theme is still Savor.
- Confirm Copy of Horizon looks correct.
- Publish only after final approval.

## What Store Owners Should Avoid

Avoid:

- Removing class names.
- Removing `id` attributes like `id="shop"` or `id="journal"`.
- Removing JavaScript data attributes in the recipe section.
- Replacing image URLs with local computer file paths.
- Editing the live theme without previewing.
- Uploading blurry or mismatched product images.

## Quick Find Reference

Header:
`<nav class="nav">`

Hero:
`<section class="pp-hero"`

Shop range:
`id="shop"`

About:
`id="about"`

Quick delivery:
`id="quick"`

Lifestyle:
`id="resources"`

Reviews:
`id="reviews"`

Recipes:
`id="recipes"`

FAQ:
`id="faq"`

Blog:
`id="journal"`

Footer:
`<footer class="footer">`

## Recommended Owner Workflow

For text edits:

1. Open the Liquid file.
2. Search for the visible text.
3. Replace only the text.
4. Save.
5. Preview.

For image edits:

1. Upload the new image to Shopify Files.
2. Copy the image URL.
3. Replace the image `src`.
4. Update the image `alt`.
5. Preview.

For link edits:

1. Find the button or anchor.
2. Replace the `href`.
3. Test the click in preview.

## Final Notes

The current Polka Pop homepage is a custom coded section, so Shopify Theme Editor settings may not expose every individual text, image, or button yet.

If you want full owner editing without touching code, the next improvement should be converting each major area into Shopify schema settings and blocks. That would let the owner edit hero slides, product cards, reviews, blog cards, FAQs, and footer items directly from the Shopify Customize panel.
