---
title: 'Modeling Wall Types'
excerpt: 'Learn how to edit a wall type by substitution-in-place.'
coverImage: '/lessons/5-modeling-wall-types/cover.jpg'
date: '2022-01-11T09:37:07.322Z'
files: [
  '/lessons/5-modeling-wall-types/Lab02_E1_Modelling wall types_structures_design features.rvt'
]
prev: '4-floors-and-roofs'
next: '6-adding-openings'
label: 'Lab02 E1'
---

In this lesson you will learn how to edit a wall type by substitution-in-place.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Change Already Placed Exterior Wall Types

1. Open Revit file: ``Lab02_E1_Modeling wall types_structures_design features.rvt``.
2. Open the ``Ground Floor`` plan view.
3. Select all exterior walls of type ``Generic - 8"``. Do this by right clicking on a selected wall of this type and selecting ``Select All Instances`` then ``Visible in View``
![Select All](/lessons/5-modeling-wall-types/select-all.png)
4. Change the type to ``Exterior - Brick`` in the properties pallette.
5. Open the ``{3D}`` 3D view to confirm that the exterior walls are now brick.
![Brick Verification](/lessons/5-modeling-wall-types/brick.png)

## Create a new Interior Wall Type

1. Open the ``Ground Floor`` plan view.
2. On the Architecture Tab click the ``Wall`` button on the ribbon.
3. In the Properties Pallette select the ``Generic 8"`` wall type.
4. Click the ``Edit Type`` button.
5. In the ``Type Properties`` pop-up window click the ``Duplicate...`` button.
6. Set the name to ``Wood Panel Wall`` and click ``OK``.
![Duplicate Type](/lessons/5-modeling-wall-types/duplicate.png)
7. Click the ``Edit...`` button on the ``Structure`` row of the table. It should be at the top of the ``Type Properties`` pop-up.
8. Change the material from ``<By Category>`` to ``Wood - Stud Layer`` and change it's thickness to ``1 5/8"``
9. Create two more wall layers by clicking the ``Insert`` button twice.
10. Move one of the new layers all the way to the exterior side of the wall assembly by clicking the ``Up`` button until it is at the top of the layer table.
11. Change this layer's Function to ``Finish 1 [4]`` to set it's behavior in the model environment.
12. Change it's material to ``Wood - Horizontal Panel`` and set it's thickness to ``1/2"``
13. Move the other wall layer that you created all the way to the interior side by clicking the ``Down`` button twice.
14. Change it's function to ``Finish 2 [5]`` to let Revit know it's an interior finish.
15. Change it's material to ``Wood - Horizontal Panel`` and set it's thickness to ``1/2"``
16. Verify your wall assembly look like the below screenshot then press OK twice to exit both dialog boxes.
![Duplicate Type](/lessons/5-modeling-wall-types/wall-assembly.png)
17. Click ``Modify`` on the ribbon to exit the wall placement command

## Use the New Wall Type

1. Select all interior walls with type ``Interior - 3 1/8" Partition (1-hr)`` just like we did for the exterior walls.
2. Replace them with the ``Wood Panel Wall`` type we just created.
3. Select the ``Panel`` labeled walls on the south side of the building and set their type to ``Interior - 3 1/8" Partition (1-hr)`` too.
4. Open the ``{3D}`` 3D view and verify it looks like the image below.
![Panel Walls](/lessons/5-modeling-wall-types/panel.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB02_EX01.rvt``

#### Cover Image Credits: omegarender.com