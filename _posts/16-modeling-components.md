---
title: 'Modeling In-Place Components'
excerpt: 'Use the Model In-Place tool to create project specific forms'
coverImage: '/lessons/16-modeling-components/cover.jpeg'
date: '2022-01-19T09:21:07.322Z'
files: [
  '/lessons/16-modeling-components/Lab05_E1_Modeling InPlace.rvt'
]
prev: '15-elevators'
next: '17-modifying-family-definitions.md'
label: 'Lab05 E1'
---

In this lesson we will create a dining table using Revit's model in place tools by creating simple extrusions.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create an In-Place Dining Room Table

1. Open the Revit file: ``Lab05_E1_Modeling InPlace.rvt``
2. Open the ``Floor Plan - Dining Area`` plan view and note the dashed boundary where the dining table will roughly be created.
3. See below what the final table and chair layout will be like:
![final](/lessons/16-modeling-components/pushed-in-chairs.png)

## Create Table Top

4. Let's start by creating the top of the dining table. On the Architecture Tab click on the little arrow below ``Component`` to select the ``Model In-Place`` button.
![model in place](/lessons/16-modeling-components/model-in-place.png)
5. Choose the Family Category: ``Casework`` and click ``OK``
6. Name the family ``DiningRm Table``
7. On the Create tab click on the ``Extrusions`` tool.
![extrusion tool](/lessons/16-modeling-components/extrusion.png)
8. Use the line tool to draw the following lines. Start from the wall corner and draw to the end of the shorter wall. Then draw a ``6' 0"`` line parallel to the exterior wall then draw a similar line to the first to finish half of the table off (You can Copy paste and move it if that's easier).
![first half](/lessons/16-modeling-components/first-half.png)
9. Select the first 3 lines and mirror them with the ``Mirror - Draw Axis`` tool (Draw a line from point 1 to point 2). Note that the left corner of the table is a bit off:
![mirror tool](/lessons/16-modeling-components/mirror.png)
![second half](/lessons/16-modeling-components/seccond-half.png)
10. Click on the off lines and move their vertices to connect with the wall better.
![aligned](/lessons/16-modeling-components/aligned.png)
11. In the properties palette set the ``Extrusion End`` to ``2' 8"`` and set the ``Extrusion Start`` to ``2' 4"`` this will create a 4" thick table with the bottom of the table 2' 4" off the ground.
![extrusion points](/lessons/16-modeling-components/extrusion-points.png)
12. Click on the green checkmark to confirm the extrusion.
13. Click on the next green checkmark to finish the model.
14. See finished table top
![second half](/lessons/16-modeling-components/tabletop.png)

## Create Table Base

##### We will be editing the previous model and adding an extrusion to it instead of creating a whole new component. When you are creating components in the future you don't need to finish the model before moving on to adding a new component. It's just easier for us to break this up into sections like this.
1. Click on your table-top and then click on the ``Edit In-Place`` button.
![edit in place](/lessons/16-modeling-components/edit-in-place.png)
2. Click on your table top and temporarily hide it with the sunglasses button at the bottom of the screen.
![temp-hide](/lessons/16-modeling-components/temp-hide.png)
3. Use the steps learned before to create the base as shown:
![base shape](/lessons/16-modeling-components/base-shape.png)
4. In the properties palette set the ``Extrusion End`` to ``2' 4"`` and set the ``Extrusion Start`` to ``0' 0"`` like before this will create a base that starts on the ground and ends at the bottom of the table.
5. Accept your changes with the green checkbox and see base below:
![base](/lessons/16-modeling-components/base.png)
6. Reset the temporary hide/isolate by clicking on the same sunglasses icon as before.

## Apply Material to Components

1. Ender Edit In-Place mode on your component if you aren't already.
2. Select both the table top and base components and then click on the browse button next to your material selection in the properties palette.
3. In the Material Browser search for and select the ``Wood - Cherry`` material. Then Press ``OK``
![material](/lessons/16-modeling-components/material.png)
4. Open the ``3D View of Dining Area`` 3D View and confirm finished table component below:
![finished](/lessons/16-modeling-components/finished.png)

## Place Chairs Around the Table

1. Open the ``3D View of Dining Area`` 3D View. (Placing objects in the 3D View is much easier, if we do this from the plan view they place sideways which is really annoying)
2. On the architecture tab click on the component tool.
3. Select the component ``Barrel_Chair_by_Frank_Lloyd_Wright_9268[1]``.
![chair](/lessons/16-modeling-components/chair.png)
4. Place one of these somewhere on the floor, we will move and copy it in the floor plan view.
5. Open the ``Floor Plan - Dining Area`` plan view.
6. To copy a component really quickly; click on the component, then hold ``Ctrl`` and drag the chair to a secondary location. Do this for all 5 chairs.
![chairs ish](/lessons/16-modeling-components/chairs-ish.png)
7. Click on a chair and use the rotate tool to make it face the table. Do this for all 5 chairs.
![chairs rotated](/lessons/16-modeling-components/rotated-chairs.png)
8. Use the move tool to push in the chairs.
![finished](/lessons/16-modeling-components/pushed-in-chairs.png)

## Make a Bed

Okay that was a lot to take in, and finishing those things proves that you know how to follow step-by-step instructions. We're not going to let you off that easy though, so lets use this knowledge to model a bed with a headboard!

1. Open the ``Floor Plan - Master Bedroom`` plan view and note the boundary for where the bed should be placed.
![bedroom](/lessons/16-modeling-components/bedroom.png)
2. Use the concepts from before to model a ``Queen Sized`` bed, you can find dimensions online very easily for this.
3. See final Result below. Hint: the holes can be made with ``Void Extrusions``
![finished](/lessons/16-modeling-components/finished-bed.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB05_EX01.rvt``

#### Cover Image Credits: easyrender.com