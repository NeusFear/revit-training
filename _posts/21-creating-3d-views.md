---
title: 'Creating 3D & Section Views'
excerpt: 'Learn how to create various types of 3 dimensional view for use in your projects.'
coverImage: '/lessons/21-creating-3d-views/cover.jpg'
date: '2022-01-24T09:03:00.000Z'
files: [
  '/lessons/21-creating-3d-views/Lab06_E3_Creating 3D Views.rvt'
]
prev: '20-creating-elevations-and-sections'
next: '22-adjusting-element-appearances-in-views'
label: 'Lab06 E3'
---

In this lesson we will learn how to duplicate the default 3D view to create additional orthogonal views. We will also use the ViewCube and the SteeringWheels widgets to change the view settings. Next we will use the Selection Vox to create 3D versions of our plan and section views. We will also learn how to create and edit Perspective views.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Use the Camera Tool to Create a Perspective View

1. Open the Revit File ``Lab06_E3_Creating 3D Views.rvt``.
2. Open the ``First Floor`` plan view and zoom into the Residence Living Space.
3. On the view tab click on the little arrow below the ``3D View`` button to select the ``Camera`` Tool.
4. Click near the south edge of the room to place the camera there and then click the second time just beyond the extends of the living room space facing the camera north.
![residence camera](/lessons/21-creating-3d-views/residence-camera.png)
5. Open the automatically created ``3D View 1`` if it doesn't open for you.
6. Set the crop region to a 16:9 aspect ratio by clicking on the crop bounds then click on the ``Size Crop`` button on the ribbon.
![size crop](/lessons/21-creating-3d-views/size-crop.png)
7. Set the width to ``16"`` and the height to ``9"``
8. Rename the 3D view to ``Living Room Interior``

## Create a Section View

1. Open the ``First Floor - Residence`` plan view.
2. On the view tab click on the ``Section`` command and create your extends as shown below by clicking near the bottom of the plan then near the top. Make sure that the section extents are pointing to the left. If they aren't there is a swap button to flip it.
![section](/lessons/21-creating-3d-views/section.png)
3. Open the ``Section 1`` Section view.
4. Select the crop region and drag the left drag grip to the left to show the entire roof canopy as shown below:
![crop](/lessons/21-creating-3d-views/crop.png)

## Create a 3D Section View

1. Duplicate the ``{3D}`` 3D view and rename it to ``Residence Building``.
2. Open the ``Residence Building`` 3D View.
3. Right Click on the View Cube (The directional indicator at the top right of the viewport).
4. Click on ``Orient to View -> Sections -> Section: Section 1``.
![orient to view](/lessons/21-creating-3d-views/orient-to-view.png)
5. It should crop and orient the view to look like this:
![ortho](/lessons/21-creating-3d-views/ortho.png)
6. Click on the upper right hand corner of the View Cube to tilt the view into a more 3D orientation:
![vc](/lessons/21-creating-3d-views/vc.png)
7. Confirm finished view:
![finished](/lessons/21-creating-3d-views/finished.png)
##### Note: You can click on the 3d crop boundary to adjust the view even more if you like

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB06_EX03.rvt``

#### Cover Image Credits: lumion.com