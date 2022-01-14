---
title: 'Efficiently Managing Wall Openings'
excerpt: 'Outlines various strategies for creating and editing wall openings with tools like array, Editing door and window type properties, and create a new window and door type.'
coverImage: '/lessons/6-adding-openings/cover.jpg'
date: '2022-01-11T09:38:07.322Z'
files: [
  '/lessons/6-adding-openings/Lab02_E2_Adding doors windows openings.rvt'
]
prev: '5-modeling-wall-types'
next: '7-creating-roof-shapes'
---

In this lesson you will place windows and doors and change their locations with temporary dimensions. You will also learn to quickly place groups of regularly spaced windows. Learn the Group and Associate array option. Edit Door and Window Instance properties and create new ones. You will also learn how to create empty wall openings.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Place and Array Exterior Doors.

1. Open Revit file: ``Lab02_E2_Adding doors windows openings.rvt``.
2. Open the ``Floor - Living Area`` plan view.
3. One the View Control toolbar, set the visual style to ``Wireframe``. This is located at the bottom left of the viewport.
![Wireframe Mode](/lessons/6-adding-openings/wireframe.png)
4. On the Architecture tab click on the ``Door`` button on the ribbon.
5. In the Properties Palette, select the ``Double-Glass 48" x 108"`` door type.
6. Place an instance of this door at the highlighted location.
![First Door](/lessons/6-adding-openings/first-door.png)
![First Door](/lessons/6-adding-openings/thin-line.png)
##### It's much easier to see the reference point lines if you are in "Thin Line" mode like I am in the screenshot above.
7. Hit the ESC key twice to exit the door placement command.
8. Click on the door you just placed, then click on the array tool on the ``Modify | Doors`` tab on the ribbon.
9. Set the ``Number`` to 3
![Array Door](/lessons/6-adding-openings/array-door.png)
10. Set the array distance graphically on screen by clicking two points on the wall like the image below.
![Door Points](/lessons/6-adding-openings/door-points.png)
11. Press the enter key to accept the array
12. Hit the ESC key twice to exit the array command.
13. Open the ``{3D}`` 3D view and verify that your doors are inserted correctly as shown below.
![Door Positions](/lessons/6-adding-openings/doors.png)

## Place and Array Exterior Windows

1. Open the ``Floor - Living Area`` plan view.
2. On the Architecture tab click the ``Window`` button.
3. Select the ``Casement Dbl with Trim 48" x 72"`` window type in the Properties Palette
4. Place a window of that type at the highlighted location below. Make sure the window is facing the right direction by hovering your mouse near the outside edge of the wall.
![First Window](/lessons/6-adding-openings/window-first.png)
5. Hit the ESC key twice to exit the window command.
6. Array the window to create the remaining 2 in that wall like we did with the doors. (Click on the window, click on the array command, set the number to 3, select a base point, select a second point to set the distance between windows, press enter to confirm the window placement)
##### Tip: It's easier to get your base points right when you choose points that are easy to see between two locations, like the left side of both windows.
7. Open the ``{3D}`` 3D view and verify that your windows are inserted correctly as shown below.
![Windows](/lessons/6-adding-openings/windows.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB02_EX02.rvt``

#### Cover Image Credits: lunas.pro