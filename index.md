---
layout: home
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/header.jpg
    background_image_opacity: 50
    content: |
      # Retama Studio
    hero_subtitle: Diseños hechos con cariño y buena vibra
    actions:
      - title: Todos los productos
        url: /store
        arrow: true
        style: primary
  - type: featured_products_section
    section_id: best_sellers_section
    title: Top ventas
    icon: true
    light_title: true
    featured_products:
      - products/tees/wildtree.md
      - products/tees/natural-heart.md
      - products/hoodies/wildtree.md
      - products/bags/bee-free.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - category/tees.md
      - category/bags.md
      - category/hoodies.md
  - type: testimonials_section
    section_id: testimonials_section
    title: Testimonials
    testimonials:
      - author:
          name: John Dope
          location: 'Colorado, USA'
        text: >-
          I didn't know the Snipcart guys were into herbs as well! How beautiful
          is that Planty theme. I'm going to launch a killer JAMstack e-commerce
          store using this for sure.
      - author:
          name: Major Payne
          location: 'VA, USA'
        text: >-
          Well I'll be d*mned. These plants really ARE greener than any of my
          recruits.
  - type: promotion_section
    section_id: promotion_section
    title: ¿Tienes alguna pregunta?
    subtitle: "Contacta con nosotros:"
    image: images/promo.jpg
    background_image: images/leaf.svg
    cta:
      title: Conctacta
      url: /store
      style: secondary
      arrow: true
seo:
  title: Retama Studio
  description: Diseños hechos con cariño y buena vibra
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Retama Studio
      keyName: property
    - name: 'og:description'
      value: Diseños hechos con cariño y buena vibra
      keyName: property
    - name: 'og:image'
      value: images/header.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Retama Studio
    - name: 'twitter:description'
      value: Diseños hechos con cariño y buena vibra
    - name: 'twitter:image'
      value: images/header.jpg
      relativeUrl: true
---
