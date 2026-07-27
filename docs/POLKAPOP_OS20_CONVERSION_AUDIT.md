# PolkaPop Online Store 2.0 Conversion Audit

## Scope

This audit covers the local theme workspace at `C:\Users\1016316\Documents\polkapop` and the unpublished Shopify copy theme named `Copy of Horizon`.

Live theme protection:

- Live/Main theme must not be modified.
- No publish action is allowed.
- Uploads must target only the unpublished copy theme.

## Current Architecture

The local workspace is a compact custom theme layer, not a complete exported Shopify theme. Present directories are:

- `assets`
- `docs`
- `scripts`
- `sections`
- `templates`

Missing from the local workspace:

- `blocks`
- `config`
- `layout`
- `locales`
- `snippets`

Existing JSON templates:

- `templates/index.json`
- `templates/collection.json`
- `templates/product.json`

Existing custom sections:

- `polkapop-announcement-strip`
- `polkapop-blog-journal`
- `polkapop-collection-page`
- `polkapop-content-band`
- `polkapop-faq`
- `polkapop-footer-custom`
- `polkapop-header-menu`
- `polkapop-hero-slider`
- `polkapop-homepage`
- `polkapop-moments`
- `polkapop-page-header-override`
- `polkapop-product-page`
- `polkapop-product-range`
- `polkapop-recipes`
- `polkapop-reviews`
- `polkapop-style-base`

## Files Requiring Changes

High priority:

- `templates/product.json`: should use the same global header/footer structure as homepage and collection pages.
- `sections/polkapop-product-page.liquid`: still contains hardcoded product layout content, hardcoded media URLs, hardcoded related products, hardcoded reviews, hardcoded blog cards, and section-scoped JavaScript that should become settings/blocks.
- `sections/polkapop-header-menu.liquid`: currently uses individual link blocks. For a fully merchant-native header, it should add Shopify `link_list` menu picker support.
- `sections/polkapop-footer-custom.liquid`: should support footer menu picker, social links, newsletter settings, and payment text/icons.
- `sections/polkapop-collection-page.liquid`: should map products from collection data or product-list settings rather than relying on static prototype content.

Medium priority:

- `sections/polkapop-style-base.liquid`: should move true global controls into `config/settings_schema.json` once a full theme export is available.
- `sections/polkapop-recipes.liquid`: already block-based, but image URL text fields should become image pickers where Shopify-hosted images are used.
- `sections/polkapop-product-range.liquid`: already block-based, but product cards should support product picker/product list settings.
- `sections/polkapop-blog-journal.liquid`: should support blog/article picker settings.

## New Sections Required For Complete Theme Coverage

The current local workspace does not include templates/sections for every Shopify page type in the brief. A complete conversion should add:

- Standard page template section
- About page section or page template
- Contact form section
- Blog listing section
- Article section
- Search results section
- Cart page section
- 404 section
- List collections section

## New Blocks Required

Recommended block types:

- Product media item
- Product feature/benefit
- Product tab/accordion
- Review card
- Related product card
- Blog card
- Footer menu column
- Social link
- Trust badge
- Recipe card
- FAQ item

## Global Settings Required

A full theme export should include `config/settings_schema.json` controls for:

- Brand colors
- Typography
- Button radius/style
- Container width
- Section spacing scale
- Product card style
- Social profile links
- Favicon

The current local workspace has no `config` directory, so global settings were not added in this pass.

## Risks

- The local workspace is not a full theme export, so complete conversion of all Shopify page types cannot be proven from local files alone.
- Shopify Theme Check could not run because the packaged validator dependency `@shopify/theme-check-common` is missing in this environment.
- The product page still uses prototype-style static PDP content. It needs a second pass to replace those static areas with section settings and blocks while preserving the visual design.
- Several CDN images and videos are hardcoded fallback URLs. These should gradually move to image/video pickers.

## Implementation Completed In This Pass

- Confirmed the conversion target is the unpublished copy theme, not the Main theme.
- Updated `templates/product.json` to use shared PolkaPop OS 2.0 sections:
  - style base
  - announcement strip
  - header menu
  - product page section
  - footer
- Removed product-section CSS that hid Shopify header/footer groups.
- Removed the private hardcoded product-page header from the PDP section.
- Scoped PDP layout selectors away from bare `header`, `nav`, and `main` selectors to reduce global CSS bleed.
- Made cart-count JavaScript optional after removing the private product-page cart badge.

## Recommended Implementation Order

1. Export or confirm a complete copy theme locally, including `layout`, `config`, `locales`, `snippets`, and all Shopify templates.
2. Convert header/footer to true section-group-compatible merchant controls.
3. Convert product page static content into settings and repeatable blocks.
4. Convert product cards and related products to Shopify product/list settings.
5. Add missing page templates for blog, article, search, cart, page, 404, and list-collections.
6. Run Theme Check from a complete Shopify CLI/theme-check install.
7. Push only to the unpublished copy theme.

## Protected Functionality Checklist

- Live theme not modified.
- Theme not published.
- Add-to-cart toast retained.
- Sticky buy bar retained.
- Product page shared menu restored through JSON template sections.
- Collection and homepage templates were not changed in this pass.

