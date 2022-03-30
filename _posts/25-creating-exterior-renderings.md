---
title: 'Creating Exterior Renderings with the Cloud'
excerpt: 'Learn how to leverage the Autodesk 360 cloud to render an exterior perspective.'
coverImage: '/lessons/25-creating-exterior-renderings/cover.jpg'
date: '2022-03-10T09:01:00.000Z'
files: [
  '/lessons/25-creating-exterior-renderings/Lab08_E1_CloudRendering.rvt'
]
prev: '24-creating-new-materials'
next: '26-creating-panoramas'
label: {type: "lab", title: "Lab08 E1"}
---

In this exercise we will look at the configuration settings for creating a cloud rendering of an existing exterior perspective camera view from a Revit Model.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.
##### Note: We will be using the same files for the next 5 lessons

Before you can use the Autodesk Cloud service you will need to have an account with Autodesk. You should already have an account if you're using the software, but it not refer back to lesson 0.

An internet connection is required to use Autodesk Rendering, but you're reading this on a website so I would hope you have one, otherwise I have some questions.

## Why use Cloud Rendering?

If you've done any renderings up to this point in your architecture/engineering career you know that they take time. Sometimes a couple minutes, other times a couple hours. In either case you're many times forced to stop working on your computer, or deal with it running at a slower pace as it allocated resources to rendering. When you submit the view to the cloud you can offload that computational energy to the cloud servers which are built for rendering things. Not only will you be able to continue being productive while your renderings render, but especially for complicated renderings your renderings may take less time.

## Create an Exterior Rendering

1. Open Revit file ``Lab08_E1_CloudRendering.rvt``.
2. Save the file as ``Spring2022_3262_firstinitial_lastname_LAB08_EX01.rvt`` for safe-keeping.
##### Note: Whatever you name the revit file will be what the project is called in the Cloud. So to make sure all of the renderings go to the same place, use the same file for all of the cloud rendering lessons (25-29).
3. Open the ``Exterior Perspective 2`` 3D view.
4. On the View tab click on the ``Render in Cloud`` button.
![render in cloud button](/lessons/25-creating-exterior-renderings/render-in-cloud-button.png)
5. Sign in with your Autodesk account if you haven't already.
6. Set your rendering configuration to match below:
![configuration](/lessons/25-creating-exterior-renderings/configuration.png)
7. Click on ``Start Rendering`` and click OK on the glass error, we don't really care about them this time.
8. You should see a tooltip drop down from the top right of your screen showing that you have a rendering in progress. At any time later you can click on your account name and see that you have a rendering in progress or view completed renderings by clicking on the account dropdown as shown in one of the images below. Click it.
![rendering started](/lessons/25-creating-exterior-renderings/rendering-started.png)
9. Once you have clicked you will be taken to a web page showing your renderings, and if it's not complete you will see this icon on a thumbnail for the current project:
![rendering in progress](/lessons/25-creating-exterior-renderings/rendering-in-progress.png)
10. Sometimes you will be entered in a rendering queue which you will have to wait for before your rendering starts, that screen will look like this:
![rendering in progress web](/lessons/25-creating-exterior-renderings/rendering-in-progress-2.png)
11. Once the rendering is complete you can refresh the page you can click on the thumbnail and expand your rendering to view like this:
![exterior rendering selected](/lessons/25-creating-exterior-renderings/exterior-rendering.png)

## What do These Things Mean?

You may be thinking to yourself "Okay, thanks for telling me what settings to use, but why did you tell me what settings to use?" to which I would reply: "Because".
However, since I am in the teaching mood here is a breakdown of what each of these dropdowns relates to roughly so you can make your own decisions next time:

- **3D View**: The view or views that you want to submit to Autodesk's Cloud rendering program.
- **Output Type**: We will get into these more in the next few lessons, but essentially it's whether you want a flat image, a Panorama that you can look around in, a stereo panorama for use in things like VR where eye location offsets are needed or Illuminance. We will touch on Panoramas and Illuminance in the next few lessons.
- **Render Quality**: Controls a few things like number of light bounces and samples, but generally is an over simplification of a bunch of quality settings. If this is for a presentation, use Final, if it's just for your own use then use Standard. Standard is way faster.
- **Image Size**: A Mega Pixel roughly equates to 1,000,000 pixels. So a 1MP Image = an image with about 1,000,000 pixels. More pixels = higher resolution output.
- **Exposure**: This generally defines the amount of light and contrast an image has, Most of the time you want to just use Advanced since there is some fine tuning done in the background there, but if you don't want that you can chose Native.
- **Cloud Credits**: You may have noticed that depending on your settings you may need to "spend" a certain number more credits per image. Students and Educators get a free 16 credits per image, and unlimited total credits so that means it's free! yay!

## Save your file

We didn't make any changes to the Revit file so there is no need to save the revit file or turn it in. We will learn to save the images we created in lesson 29.

#### Cover Image Credits: Archello