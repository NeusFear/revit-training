---
title: 'Assigning Render Materials'
excerpt: 'Learn how to assign existing rendering materials to building elements.'
coverImage: '/lessons/23-assigning-render-materials/cover.jpg'
date: '2022-03-07T09:01:00.000Z'
files: [
  '/lessons/23-assigning-render-materials/Lab07_E1_Assigning Materials to a Component.rvt'
]
prev: '22-adjusting-element-appearances-in-views'
next: '24-creating-new-materials'
label: 'Lab07 E1'
---

In this lesson we will learn how to assign materials to model elements using object styles, type properties, and instance properties. We will also adjust the render appearance of materials to display realistic views.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Assign a new Material to the Sidewalk and Ramp

1. Open Revit file ``Lab07_E1_Assigning Materials to a Component.rvt``.
2. Open the ``Exterior Perspective`` 3D View.
3. Select the Sidewalk and note the type in the properties palette is set to ``Floor: Concrete Slab - 6"``. This is where this element gets it's material properties.
##### Note: In this example we will be replacing this concrete sidewalk with a wooden deck type structure, the following steps show how to duplicate and edit structure properties of a type and how those relate to render materials
4. On the properties palette click on ``Edit Type``
![conc props](/lessons/23-assigning-render-materials/concrete-properties.png)
5. Duplicate the type and name the new type ``Wood Patio``.
![patio props](/lessons/23-assigning-render-materials/edit-wood-patio.png)
6. Click on the ``Edit...`` button next to ``Structure`` to change the ``Structure [1]`` parameters to ``Wood Deck`` at a thickness of ``0' 4"``.
![patio structure](/lessons/23-assigning-render-materials/patio-structure.png)
7. Click ``OK`` twice to accept the changes. You should see that the sidewalk looks brown like wood.
8. Click on the Ramp Element
9. In the properties palette click on ``Edit Type``
10. In the ``Type Properties`` window that opens edit the Ramp Material to match the sidewalk by setting it to the ``Wood Deck`` material too.
![ramp materials](/lessons/23-assigning-render-materials/ramp-material.png)
11. Click ``OK`` twice to confirm the changes and should see that both the sidewalk and ramp are brown like below:
![deck](/lessons/23-assigning-render-materials/deck-results.png)

## Change Materials Assigned to Console Table

1. Open the ``Living Room Interior`` 3D view.
##### Note: we want to match the materials of the Console Table to those of the Sectional Sofa, so first we will look at what the Sofa uses, then apply the same ones to the table
2. Select the ``Sectional Sofa_6482`` family by clicking on it in the view.
3. In the Properties palette click on ``Edit Type``
4. Take note of the material names that the sofa is using then close out of the Type Properties window.
![sofa materials reference](/lessons/23-assigning-render-materials/sofa-mats.png)
5. Click on the Console table (it's on the east wall to the right of the view).
6. Change the ``Materials and Finishes`` type properties in the Properties Palette to use similar materials. Set Table Surface = ``Laminate - Ivory, matte``, Table Frame = ``frame``, and Pedestal = ``frame``.
![table materials](/lessons/23-assigning-render-materials/table-mats.png)
7. See finished results below:
![conc props](/lessons/23-assigning-render-materials/interior-results.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB07_EX01.rvt``

#### Cover Image Credits: pixpa.com