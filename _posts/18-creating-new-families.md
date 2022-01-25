---
title: 'Creating New Families'
excerpt: 'Modify a console table family to add new features.'
coverImage: '/lessons/18-creating-new-families/cover.jpg'
date: '2022-01-19T09:23:07.322Z'
files: [
  '/lessons/18-creating-new-families/Lab05_E3_Creating New Families.rvt'
]
prev: '17-modifying-family-definitions'
label: 'Lab05 E3'
---

In this lesson we will use the family editor to add reference planes, dimensions, and parameters. We will test these parameters and define family types. Then we will use the different family types in our model.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Add Reference Planes for the Frame Component

1. Open Revit file: ``Lab05_E3_Creating New Families.rvt``
2. Open the ``First Floor`` plan view and zoom in on the residence on the south side of the building.
3. Select the console table component and click ``Edit Family`` like in the previous lesson.
4. Open the ``Ref. Level`` plan view.
5. On the Create tab click on the ``Reference Plane`` button.
![ref plane](/lessons/18-creating-new-families/ref-plane.png)
6. Click on the ``Pick Lines`` tool.
![pick lines](/lessons/18-creating-new-families/pick-lines.png)
7. On the options bar (below the ribbon) set the offset value to ``1"``.
8. Add a reference plane just inside each of the outer reference planes. (Click near the leftmost and rightmost green dashed lines to add a new reference plane just inside them, and on the topmost and bottom most reference planes to add new ones just inside them too).
![ineside planes](/lessons/18-creating-new-families/inside-ref-planes.png)
![horiz ineside planes](/lessons/18-creating-new-families/horiz-ref-planes.png)

## Add Annotation Dimensions between the Reference Planes

1. On the Annotate tab click on the ``Aligned`` dimension tool.
![aligned](/lessons/18-creating-new-families/aligned.png)
2. Create the 4 dimensions showed below:
![dims](/lessons/18-creating-new-families/dims.png)

## Make these Annotations Parameters Instead

1. Click on one of these new ``1"`` dimensions lines.
2. On the ribbon click on the ``Add Parameter`` button as shown.
![add parameter](/lessons/18-creating-new-families/add-parameter.png)
3. Name it ``Frame Thickness`` as shown then click ``OK``
![parameters](/lessons/18-creating-new-families/parameters.png)
4. Select the other 3 ``1"`` dimension annotations.
5. Use the Label dropdown to assign it to the ``Frame Thickness`` Label.
![label](/lessons/18-creating-new-families/label.png)

## Check Flex Parameters to Move Ref Planes with Model

1. On the Modify tab click on the ``Family Types`` button.
![family types](/lessons/18-creating-new-families/family-types.png)
2. Use the dropdown to change the type name to ``30" L x 30" W x 16" H``. Then click ``OK``
![type](/lessons/18-creating-new-families/type.png)
3. Confirm that your model moved and looks like our below. If not You might have not added your reference planes and Frame thickness dimensions annotations correctly:
![square](/lessons/18-creating-new-families/square.png)

## Add Separate Console Table Top Element

1. Select the outer extrusion component then ``Edit Extrusion``
![edit extrusion](/lessons/18-creating-new-families/edit-extrusion.png)
2. Use the rectangle draw tool to create another square on the inside of the frame. This will create a hole in the table.
![frame](/lessons/18-creating-new-families/frame.png)
3. Confirm the changes.
4. Confirm everything is still flexing properly by switching back to the long table version like we did before.

## Create the table surface

1. Change your model back to the square table.
2. Click on the Extrusion tool and use the rectangle draw tool to create a square inside the frame.
![tabletop](/lessons/18-creating-new-families/tabletop-extrusion.png)
3. Open the ``Front`` elevation view. Note that the tabletop is the gray box that is extending all the way to the ground.
4. Click on the tabletop component.
![bad tabletop](/lessons/18-creating-new-families/bad-tabletop.png)
5. In the properties palette click on the little gray rectangle next to the ``Extrusion End`` constraint. Set it to ``Table Height``. This will make sure the table top is always at the top.
6. Add a reference plane 1" below the table top like we have before.
7. Create an aligned dimension between the table top and the new reference plane.
8. Select this new dimension and create a parameter ``Surface Thickness``.
![surface thickness](/lessons/18-creating-new-families/surface-thickness.png)
9. Select the ``4"`` dimension and create a parameter ``Frame Height``.
![frame height](/lessons/18-creating-new-families/frame-height.png)
10. Click on the Align tool
![align](/lessons/18-creating-new-families/align.png)
11. Click on the new reference plane for Surface Thickness and then click on the bottom of the tabletop component.
12. Click on the lock icon to make it a permanent relationship.
![locked](/lessons/18-creating-new-families/locked.png)
13. Repeat this process for the frame height ref plane and the bottom of the frame since the frame not currently locked to the ref plane.
14. Confirm everything is moving correctly by switching to the longer version and back again.

## Assign Materials

1. Open the ``{3D}`` 3D view.
2. Select the table surface component and then on the parameter button (the little gray rectangle) next to the material constraint.
3. Click on the ``New Parameter`` button.
4. Name the new parameter ``Table Surface``. and set it to an instance parameter.
![new parameter](/lessons/18-creating-new-families/new-parameter.png)
5. Click ``OK`` twice to confirm the new material parameter.

## Load and use Family in Project

1. Save the family component.
2. Load the family into your project. You can overwrite the existing version and it's parameter values.
3. Place another instance of the console table next to the wood accent wall.
4. Replace the table next to the window with the longer version through the properties palette. See locations below:
![table locations](/lessons/18-creating-new-families/table-locations.png)
5. Open the ``Residence`` 3D View.
6. Change the table surface materials of both tables. Set the smaller table to ``White Panel`` and the larger one to ``Glass``
7. Confirm yours look the same as ours below:
![tables done](/lessons/18-creating-new-families/tables-done.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB05_EX03.rvt``

#### Cover Image Credits: thisisabdul.wordpress.com