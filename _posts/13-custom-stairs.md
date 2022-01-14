---
title: 'Creating Custom Stairs'
excerpt: 'Learn how to customize a stair using its type and instance properties'
coverImage: '/lessons/13-custom-stairs/cover.jpg'
date: '2022-01-13T09:19:07.322Z'
files: [
  '/lessons/13-custom-stairs/Lab04_E2_Modeling Custom Stairs.rvt'
]
prev: '12-stairs-and-ramps'
next: '14-floor-openings'
---

In this lesson you will learn how to edit the sketch to change the stair boundary and shape of risers. You will learn how to change stair and rail types, and modify the steepness of a stair by adjusting it's properties. Finally you will learn how to create a spiral stair.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create a Stepper Studio Stair

1. Open Revit file: ``Lab04_E2_Modeling Custom Stairs.rvt``
2. Open ``First Floor`` plan view.
3. Delete the stair in the studio so we can make a new steeper one.
4. On the architecture tab click on the ``Stair`` Button.
5. In the properties palette select the ``Residential - Open Riser`` stair type.
6. Click ``Edit Type`` then ``Duplicate``.
7. Name the new star ``Residential - Open Riser - Steep``.
![properties](/lessons/13-custom-stairs/stair-properties.png)
8. Set the ``Maximum Tread Depth`` to ``0' 9"`` and set the ``Maximum Riser Height`` to ``0' 9"``
![treads](/lessons/13-custom-stairs/tread-dims.png)
9. Click ``OK`` to accept the changes.
10. Draw the new stair and see how it takes up less room.
11. Move the stair to it's final position as shown.
![final](/lessons/13-custom-stairs/stair-final.png)

## Create a Spiral Stair

1. In the ``First Floor`` plan view pan down to the red dashed in area where the spiral stair will be placed.
2. On the Architecture tab click on the ``Stair`` button.
3. In the properties palette select the stair type ``Residential - Open Riser``
4. Click ``Edit Type`` then ``Duplicate`` and set the new stair types name as ``Residential - Open Riser - Spiral``.
![properties](/lessons/13-custom-stairs/spiral-properties.png)
5. Set the ``Maximum Tread Depth`` to ``0' 11"`` and the ``Maximum Riser Height`` to ``0' 10"``
![teeads](/lessons/13-custom-stairs/spiral-treads.png)
6. Click ``OK`` to accept the new type.
7. On the ribbon choose the ``Full-Step Spiral`` stair draw mode.
![button](/lessons/13-custom-stairs/spiral-button.png)
8. Click on the marked spiral stair center point.
9. Type ``2`` while drawing to set the center radius to ``2' 0"``. Don't worry about orientation yet.
10. Click on the green check mark to finish drawing stair. See Progress below:
![progress](/lessons/13-custom-stairs/spiral-progress.png)
11. Flip the stair by clicking on it, then notice the little blue arrow that pops up. Click that.
![flip](/lessons/13-custom-stairs/flip.png)
12. Use the rotate tool on the ribbon to rotate the stair into this orientation:
![rotated](/lessons/13-custom-stairs/rotate.png)
13. Click on the railing and change it's type to ``Handrail - Pipe``
14. Add a center pole for the spiral stair by clicking on the little arrow below ``Column`` to select ``Column: Architectural``
15. Select the ``Round Column 8"`` type in the properties palette and set it's constraints to ``Roof``.
![column](/lessons/13-custom-stairs/constraints.png)
16. Place this column in the center of the stair.
17. Open the ``First Floor - Spiral Stair`` 3D View to see the stair:
![final spiral](/lessons/13-custom-stairs/final-spiral.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB04_EX02.rvt``

#### Cover Image Credits: arch2o.com