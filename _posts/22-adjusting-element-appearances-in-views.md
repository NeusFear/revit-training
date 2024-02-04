---
title: 'Adjusting Element Appearances in Views'
excerpt: 'Learn how to create nice exterior perspectives for presentations.'
coverImage: '/lessons/22-adjusting-element-appearances-in-views/cover.jpeg'
date: '2022-01-24T09:04:00.000Z'
files: [
  '/lessons/22-adjusting-element-appearances-in-views/Lab06_E4_Adjusting the Appearance of Elements in a View.rvt'
]
prev: '21-creating-3d-views'
next: '23-assigning-render-materials'
label: {type: "lab", title: "Lab06 E4"}
---

In this lesson we will learn how to use the View Control bar to quickly change a view's display properties. We will also learn how to enable shadows and to specify the location of the light source. We will also learn how to set the location of the building to form an accurate solar study. Finally we will use the Graphics Display options to enhance the silhouettes of elements and add gradient backgrounds to 3D views.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create an Exterior View Using the Camera Tool

1. Open Revit file ``Lab06_E4_Adjusting the Appearance of Elements in a View.rvt``.
2. Open the ``Site Plan`` plan view.
3. On the view tab click on the little arrow below the ``3D View`` button and select the ``Camera`` tool.
4. Place a camera view about here:
![view region](/lessons/22-adjusting-element-appearances-in-views/view-region.png)
5. Change the frame ratio to 16:9 like in the previous lesson by clicking on the ``Size Crop`` button on the ribbon and changing the width to ``16"`` and the height to ``9"``. Tip: If you double click down on the mouse button the view will be fit to the viewport.
6. Rename ``3D View 1`` to ``Exterior Perspective``

## Try out some of the Visual Styles.

1. Click on the ``Graphics Display`` button on the View Control Toolbar (at the bottom of the viewport):
![graphics display](/lessons/22-adjusting-element-appearances-in-views/graphics-display.png)
2. Click through and observe every option available to you. Note that some of these options have shortcuts. See below:
- Wireframe: **WF**
- Hidden Line: **HL**
- Shaded: **SD**
3. Apply the ``Hidden Line`` style to this view.

## Create a Realistic View

1. Duplicate the ``Exterior Perspective`` view and rename the duplicate to ``Perspective - Realistic``
2. Apply the ``Realistic`` style to this view.

## Create a Shaded View

1. Duplicate the ``Exterior Perspective`` view and rename the duplicate to ``Perspective with Shadows``
2. Apply the ``Shaded`` style to this view.
3. Open the ``Graphics Display Options`` dialogue by either clicking on that option in the ``Graphics Display`` button (same button as display mode) or by typing ``GD``.
4. Expand the ``Shadows`` and ``Lighting`` dropdowns. 
5. Enable both ``Cast Shadows`` and ``Show Ambient Shadows``.
6. Click on the ``<In-session, Lighting>`` button.
7. Select the ``Still`` Radio option.
8. Set the date to ``June 1, 2019``
9. Set the Time to ``10:00 AM``
![display](/lessons/22-adjusting-element-appearances-in-views/display.png)
10. Click ``OK`` to accept the sun settings.
11. Expand the ``Background`` section of the Graphics Display Options. Select the ``Gradient`` background option. Make sure your color options match ours:
![gradient](/lessons/22-adjusting-element-appearances-in-views/gradient.png)
12. Click ``OK`` to accept all graphics display options.
13. See finished result below:
![finished](/lessons/22-adjusting-element-appearances-in-views/finished.png)

## Save your file

Save your file as ``Spring2024_3262_firstinitial_lastname_LAB06_EX04.rvt``

#### Cover Image Credits: easyrender.com