---
title: 'Creating Elevation Views'
excerpt: 'Learn to create Elevation Views and modify their properties.'
coverImage: '/lessons/20-creating-elevations-and-sections/cover.jpg'
date: '2022-01-24T09:02:00.000Z'
files: [
  '/lessons/20-creating-elevations-and-sections/Lab06_E2_Creating Elevation and Section Views.rvt'
]
prev: '19-creating-plan-views'
next: '21-creating-3d-views'
label: {type: "lab", title: "Lab06 E2"}
---

In this lesson we will place elevation tags to create new elevation views. We will modify view properties to adjust the crop region, level of detail, and scale. We will also set Visibility / Graphics overrides to choose which objects appear in views.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create an Interior Elevation in the Living Area

1. Open the Revit file: ``Lab06_E2_Creating Elevation and Section Views.rvt``
2. Open the ``First Floor`` plan view.
3. On the View tab click on the ``Elevation`` button.
![elevation button](/lessons/20-creating-elevations-and-sections/elevation.png)
4. In the Properties Palette select the ``Interior Elevation`` type.
![interior elevation](/lessons/20-creating-elevations-and-sections/interior-elevation.png)
5. Place the marker in the middle of the room as shown and then hit the ``esc`` key twice to end the command.
![elevation location](/lessons/20-creating-elevations-and-sections/elevation-location.png)
6. Click on the marker and check all 4 of the checkboxes. Your elevation marker should look like below.
![checked](/lessons/20-creating-elevations-and-sections/checked.png)
7. This created 4 new elevation views, you can see them listed in the Project Browser. Rename each of the views to be more descriptive. Name them ``Living Room Interior - North``, ``Living Room Interior - East``, ``Living Room Interior - South``, and ``Living Room Interior - West``.

## Create a View Template

1. Open the ``Living Room Interior - West`` elevation view. We are going to change it's properties and then make a template to copy to the other elevation views.
2. In the Properties Palette set the ``View Scale`` to ``1/2" = 1'-0"`` then set the ``Detail Level`` to ``Fine``. Click ``Apply`` to apply the changes.
3. Right Click on the ``Living Room Interior - West`` elevation view in the project browser. Then click ``Create View Template from View...``. Name the view ``Interior Elevation`` and click ``OK``. Click ``OK`` again since the settings will be inherited from the elevation you created it by.
4. To apply the view template to the other views, open one then scroll down to the bottom of the Properties Palette and set the ``View Template`` option to ``Interior Elevation``
![set view template](/lessons/20-creating-elevations-and-sections/set-view-template.png)
5. Repeat step 4 until all elevations are using the ``Interior Elevation`` view template. Note that even though we used ``Living Room Interior - West`` to create the view template, that does not mean that it has it applied to it, you need to do this for all 4 elevations we created.

## Edit View Range for North Elevation

1. Open the ``Living Room Interior - North`` elevation view. Notice that the spiral staircase is only partially in view, let's fix that.
2. Open the ``First Floor`` plan view. Click on the arrow on the north side of the elevation marker labeled ``Living Room Interior - North`` to see the crop extents.
![crop extents](/lessons/20-creating-elevations-and-sections/crop-extends.png)
3. Drag the blue arrows to move the crop region to beyond the spiral stair.
4. Check the ``Living Room Interior - North`` elevation view to see that the stair is fully visible.

## Save your file

Save your file as ``Spring2024_3262_firstinitial_lastname_LAB06_EX02.rvt``

#### Cover Image Credits: onyxcreative.com