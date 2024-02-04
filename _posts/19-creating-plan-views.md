---
title: 'Creating Plan Views'
excerpt: 'Learn how to duplicate existing views and repurpose them to create dedicated views for specific functions.'
coverImage: '/lessons/19-creating-plan-views/cover.jpg'
date: '2022-01-24T09:01:00.000Z'
files: [
  '/lessons/19-creating-plan-views/Lab06_E1_Creating Plan Views part.rvt'
]
prev: '18-creating-new-families'
next: '20-creating-elevations-and-sections'
label: {type: "lab", title: "Lab06 E1"}
---

In this lesson we will create new plan views b using the Plan View tool or by duplicating existing plan views. We will then learn how to select which types of elements should appear in a plan by setting visibility graphics overrides. We will learn how to crop views, adjust the view range, clipping plane, etc.. We will also learn how to set an underlay in a view for seeing the floor below. We will also change the scale of a plan view and adjust the detail level shown.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create a Structural Plan View

1. Open the ``Lab06_E1_Creating Plan Views part.rvt`` Revit File.
2. Open the ``First Floor`` plan view.
3. Duplicate the ``First Floor`` plan view by right clicking on it in the Project Browser. Then selecting ``Duplicate View -> Duplicate``
4. Rename the copied version to ``Level 1 - Structural`` by right clicking on the new view and selecting ``Rename...``
5. Open the new ``Level 1 - Structural`` view if it's not already open.
6. On the view tab click on the ``Visibility / Graphics`` button. Or use the shortcut by typing ``VG``
![vg](/lessons/19-creating-plan-views/visibility-graphics.png)
7. Uncheck ``Furniture`` and ``Furniture Systems`` in the visibility column. Click ``OK`` to confirm.
8. Since this is a structural view it would be nice if the columns appeared in a heavier line weight. Open the ``Visibility / Graphics`` menu again like before. Scroll down and expand the ``Structural Columns`` category. 
9. Click on the ``Override...`` button in the ``Cut > Lines`` column. (It may be invisible until you click in the cell where it should be).
10. Set the Line Graphics to ``Solid`` pattern with ``Red`` color and ``8`` for the weight. Click ``OK`` twice.
![line graphics](/lessons/19-creating-plan-views/line-graphics.png)
11. Your columns should now be drawn in thick red lines. If the thickness is not changed, check that you are not in ``Thin Line`` mode.

## Create a Furniture Plan View

1. Duplicate the ``First Floor`` plan view again.
2. Rename the copied version to ``Level 1 - Furniture``.
3. Open the new ``Level 1 - Furniture`` view if it's not already open.
4. Open the ``Visibility / Graphics`` menu and we want to set everything that isn't furniture to a half tone. To do this scroll down to ``Furniture`` and ``Furniture Systems`` and select those rows by holding ``Ctrl`` and clicking on both of them. 
5. Once selected click on the ``Invert`` button. This will select everything that wasn't selected already in the list. 
6. Now click on the ``Halftone`` checkbox on any of these selected rows and it will apply the option to all of them. Click ``OK`` to confirm.
![halftone](/lessons/19-creating-plan-views/halftone.png)
7. Use the steps we took before to give the furniture items a ``Solid`` ``Orange`` line with a weight of ``6`` for the ``Projection/Surface > Lines`` column. Click ``OK`` to confirm.
![orange line graphics](/lessons/19-creating-plan-views/orange-lines.png)
8. All furniture should now be Orange.

## Create a Level 1 Residence Only Plan View

1. Duplicate the ``First Floor`` plan view again.
2. Rename the copied version to ``Level 1 - Residence``.
3. Open the new ``Level 1 - Residence`` view if it's not already open.
4. Click on the ``Show Crop Region`` button below the viewport to show the view extents.
![show crop view](/lessons/19-creating-plan-views/show-crop-view.png)
5. Use the blue circle handles to shrink the view extents down to focus only on the residence
![residence](/lessons/19-creating-plan-views/residence.png)

## Create a Level 2 Residence View

1. Repeat the steps we took to create the ``Level 1 - Residence`` view but for the ``Second Floor``.
2. Notice that we can't see down into the first level. Let's fix that. Scroll down in the Properties palette to the Extents section and click the ``Edit..`` button next to ``View Range``.
3. Set the ``View Depth -> Level`` dropdown to ``Level Below (First Floor)``. Click ``OK`` to confirm.
![view range](/lessons/19-creating-plan-views/view-range.png)
![res 2 final](/lessons/19-creating-plan-views/residence-level-2.png)

## Save your file

Save your file as ``Spring2024_3262_firstinitial_lastname_LAB06_EX01.rvt``

#### Cover Image Credits: archdaily.com