---
title: 'Creating Elevators'
excerpt: 'Learn how to create elevators with Revit'
coverImage: '/lessons/15-elevators/cover.jpg'
date: '2022-01-13T09:21:07.322Z'
files: [
  '/lessons/15-elevators/Lab04_E4_Creating an Elevator.rvt'
]
prev: '14-floor-openings'
next: '16-modeling-components'
---

In this lesson you will learn how to place an elevator component, add walls to enclose the elevator, cut an elevator shaft between all levels, and provide openings in the shaft walls to access the elevator at each floor.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Place the Elevator Components

1. Open Revit file: ``Lab04_E4_Creating an Elevator.rvt``.
2. Open the ``First Floor`` plan view.
3. On the architecture tab click on the ``Component`` tool and select the ``Electric_Lift 1000 x 880mm``
4. Place the elevator component at the location shown with the edge aligned with the fall face.
![place](/lessons/15-elevators/elev-loc.png)
5. Select the just placed elevator and use the ``Copy to Clipboard`` command on the ribbon.
![copy](/lessons/15-elevators/copy.png)
6. Open the ``Second Floor`` plan view.
7. On the ``Modify`` tab click on the little arrow below the ``Paste`` button to select the ``Aligned to Current View`` button. This pastes the elevator just above the previous elevator.
![second elevator](/lessons/15-elevators/aligned.png)

## Add Elevator Enclosure Walls

1. Open the ``First Floor`` plan view.
2. On the architecture tab click on the ``Wall`` tool. Choose the ``Generic Wall - 6"`` type.
3. Set the height constraint to ``Roof``
4. Place walls around the elevator as shown:
![first wall](/lessons/15-elevators/first-walls.png)
5. Open the ``Second Floor`` plan view.
6. Place a wall on the front face like before as shown:
![second wall](/lessons/15-elevators/second-wall.png)

## Create Openings for Elevators

1. Open the ``Second Floor`` plan view.
2. On the architecture tab click on the ``Wall Opening`` tool.
![opening tool](/lessons/15-elevators/opening-tool.png)
3. Place the opening as shown below:
![opening](/lessons/15-elevators/opening.png)
4. Select the wall opening element and change the ``Top Constraint`` to be ``Unconstrained`` in the properties palette.
5. Set the ``Unconnected Height`` to ``7' 0 "``
![properties](/lessons/15-elevators/opening-props.png)
6. Open the ``First Floor`` plan view and repeat the steps to create an opening on this floor too.
7. Open the ``Second Floor - Elevator`` 3D view to check progress.
![elevator opening](/lessons/15-elevators/elevator-opening-done.png)

## Add Guardrails

1. Open the ``Second Floor`` plan view.
2. On the architecture tab click on the ``Railing`` tool. Select the ``Guardrail - Pipe`` type.
3. Place 3 railings as shown below. These all need to be done separately since Revit requires railings to be contiguous.
![railings](/lessons/15-elevators/railing-locations.png)
7. Open the ``Second Floor - Elevator`` 3D view to check your work. (Pay attention to the side of the railing the hand rail is on and flip if needed)
![railings](/lessons/15-elevators/railings-done.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB04_EX04.rvt``

#### Cover Image Credits: genesisstudios.com