# cs732-se75-assignment-CaitiGre

# Welcome to my React Parallax demo!

Hello and welcome to my tech demo for a react parallax application. In this demonstration you will learn how to do a traditional parallax image, a reversed parallax image, a blur parallax image, and a layered parallax scene.

Parallax itself is a distortion of view in the simplest of explanations. It can be visually impactful when used on websites and can create the illusion of movement when using parallax layers

## Packages

In order to create and run the applications, you will need to install a few packages. First, you will need to install vite to instigate a development server:

```bash
    npm create vite@latest
```
After this you will need to follow the steps on screen. For this project I selected React as the framework adnd JavaScript + SWC as the variant.

Next you will need to install react parallax:

```bash
    npm i react-parallax
```

You will also need to install react spring parallax:

```bash
    npm i @react-spring/parallax
```
This version of parallax is the one that will allow you to create a layered version of parallax.

## Setting up the demo

As you have now created a new react file, you can remove all unnecessary files and components. All of the content in the CSS files may be deleted, as well as all of the content within the App function, and any react images.

In addition, you will need to select some images (either your own or off of the internet) to use as your demonstration images. I selected mine as clear pictures (without filters) from [Unsplash] (https://unsplash.com/). Ideally you will want to choose images that are landscape.

The demo itself is a Single Page Application that routes to four pages:

1. The first page that the users can navigate to provides an example of parallax in which the image is fixed to the background making the containers layered above it move when the user scrolls down.
2. The second page navigates to an example of parallax where the scroll is reversed. Essentially, when the user scrolls down, the image moves in the opposite direction.
3. The third form of parallax demonstrates layered parallax images to give that animated feel - similar to the Firewatch game website.
4. The fourth and final demonstration of parallax is in relation to mouse movement. Here the layers try to 'outrun' the users mouse.

The demo that I have created routes to different pages using react-dom routing but that is an optional function.

## General Parallax

The first thing that you are going to want to do is create a div that will sit above the first parallax image. This is because parallax only works if the page is scrollable, at least for these types of parallax. These are the steps that you should take to use react-parallax to create the image that appears on the homepage.

1. Make sure that you have imported your package into the file that you are working in e.g.
```
import { Parallax } from "react-parallax";
```
and import the image that you would like to use ē.g.
```
import ParallaxImage from 'image path'
```
2. Create and export a function for the image e.g. ScrollParallax
3. Create a div within the function that will sit above the image (you can change the height of the div either in CSS or in the div itself by setting the style).
4.  Within the return function create another div and give it a classname to identify it e.g. parallaxContainer and within that div write 
```
<Parallax>
    <div></div>
</Parallax>
```
5. You likely will not be able to see anything yet. Next you want to add code within the Parallax tag to add the background image, and set the strength of the parallax. You are welcome to change the strength and play around with it, just note that once you reach a certain point the image will lag.
```
<Parallax bgImage={name of imported background image} strength={400}>
    <div></div>
</Parallax>
```
6. Next, you will want to edit the div that is within the Parallax tags to set the height of the image.
```
<Parallax bgImage={Image} strength={400}>
    <div style={{height: 700, width: "cover"}}></div>
</Parallax>
```
In this instance we have set the ehight to be 700 pixels and the width of the image to cover the width of the page.
7. (Optional) You can also add a div after your parallax div to further witness the parallax effect as it allows for further scrolling.
## Reverse Parallax

The second type of parallax demonstrated here is reverse parallax. Essentially, it uses the same concept as the previous parallax, just with the image going in the opposite direction. As such the steps are essentially the same.

1. Follow steps 1-7 of the General Parallax section but change the strength compnent to a negative number e.g.
```
<Parallax bgImage={Image} strength={-200}>
    <div style={{height: 700, width: "cover"}}></div>
</Parallax>
```
This negative strength changes the direction that the image moves.

## Blur Parallax

Blur parallax follows essentially the same steps as the previous two, except with another element added to the main image.

1. Follow steps 1-7 of the General Parallax section but add the parameter blur e.g.
```
<Parallax blur={{min: -25, max: 35}} bgImage={image} bgImageAlt="image alt" strength={150}>
    <div style={{height: 700, width: "cover", margin: "auto"}} />
</Parallax>
```
In this case, the blur function indicates where the blur begins and the speed it appears in relation to the image. You can play around with these numbers based on the image you have used and how you want the blur to appear.

## Layered Parallax

And that's it!

Best of luck! 