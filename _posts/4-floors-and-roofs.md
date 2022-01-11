---
title: 'Floors and Roofs'
excerpt: 'Learn how to create floors and roofs for your revit models.'
coverImage: '/images/0-downloading-revit/cover.jpg'
date: '2022-01-10T09:37:07.322Z'
files: [
  '/sources/lesson_4/Lab01_E3_Creating Roofs.rvt'
]
---

In this lesson you will learn how to create floors and roofs for your revit models. We will be doing this based on building footprint, a sketch, and adjusting the properties of the roofs.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create A Flat Roof

1. Open Revit File ``Lab01_E3_Creating Roofs.rvt``
2. Open the ``Workspace Roof`` plan view.
3. On the Architecture Tab click on the little arrow below the ``Roof`` button and then click ``Roof by Footprint``.
4. In the properties palette select the ``Basic Roof Generic - 12"`` roof type and set the ``Base Offset from Level`` to ``0' 0"``.
5. Click on the ``Modify | Create Roof Footprint`` tab if it's not automatically selected.
6. Click on the ``Boundary Line`` and ``Line Mode`` Buttons as shown in the image below.
![Boundary Line](/images/4-floors-and-roofs/flat-roof-1.png)
7. Uncheck the ``Defines Slope`` checkbox. Highlighted in above screenshot.
8. Create a closed boundary along the inside of the walls as highlighted in the images above in blue.
9. Click the green check mark button to confirm your boundary sketch.
10. Open the ``Carport Roof`` plan view.
11. Repeat the above steps to create a roof around the carport.
![Boundary Line](/images/4-floors-and-roofs/flat-roof-2.png)
12. Click the ``Modify`` button on the left side of the Ribbon to end roof creation.
13. Select the wall shown and attach it to the carport roof with the ``Attatch Top/Base`` button in the ribbon then by clicking on the carport roof.
![Boundary Line](/images/4-floors-and-roofs/attach.png)

## Create a Pitched Roof

1. Open the ``Living Area Roof`` plan view.
2. On the Architecture Tab click on the little arrow below the ``Roof`` button and then click ``Roof by Footprint``.
3. In the properties palette select the ``Basic Roof Generic - 12"`` roof type and set the ``Base Offset from Level`` to ``0' 0"``.
4. Click on the ``Modify | Create Roof Footprint`` tab if it's not automatically selected.
5. This time make sure that the ``Defines Slope`` checkbox is enabled.
6. Create a closed boundary along the inside of the walls as highlighted by the underlay in red.
7. Confirm your boundary.
8. If it asks to attach walls, click yes.
7. Click ``Modify`` to quit roof edit mode
![Boundary Line](/images/4-floors-and-roofs/finished.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB01_EX03.rvt``