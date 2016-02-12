Project 1: HTML/CSS
By Justin Bisignano

I chose option 1, to build my own home page


=== Viewing the Website ===

The index.html file itself is in ./build/index.html
This is the only html file for the whole site, as I decided to build a single page homepage that flowed better and required no extra clicks to navigate.


=== Tools ===

I decided to use this project to learn Jade and SCSS, so all of my source HTML is written in Jade and all of my CSS is written using SCSS.

In order to build my website, I've included a watchdog script that will build automatically whenever any .jade or .scss files change. Just run ./watchdog.sh from the root of the website directory tree to build everything automatically.


=== Libraries ===

For the icons at the bottom of my site (in the "Connect" section), I use the FontAwesome css icon toolkit.

For the layout of the boxes in my "Projects" section, I use the bin-packing library Packery. This library rearranges the boxes automatically to fill any available space.

Some scss mixins come from StackOverflow answers to common questions like clearfixing floats.

Everything else has been built from scratch as an exercise in teching myself jade and scss. 


=== Design ===

I set out to create a single page homepage that was simple but eye-catching. I started with the plan of highlighting projects and work experience and went from there. The design isn't great, but it works.