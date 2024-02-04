---
title: 'Creating new Render Materials'
excerpt: 'Learn how to create your own materials for use in renderings through Revit'
coverImage: '/lessons/24-creating-new-materials/cover.jpg'
date: '2022-03-07T09:02:00.000Z'
files: [
  '/lessons/24-creating-new-materials/Lab07_E2_Creating New Materials.rvt'
]
prev: '23-assigning-render-materials'
next: '25-revit-worksharing'
label: {type: "lab", title: "Lab07 E2"}
---

In this exercise we will learn how to create new rendering materials by accessing the Asset Browser material library to import rendering materials into the current project for use in your renderings. We will do this by duplicating existing materials and editing shading colors, replacing render appearance assigned to materials by using the settings that Revit exposes, down to just tweaking values to customize a material that is pretty close. It sounds more complicated than it is.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create new materials for the Eames Chair

1. Open Revit file ``Lab07_E2_Creating New Materials.rvt``.
2. Open the ``Living Room Interior`` 3D view.
3. On the Manage Tab click on the ``Materials`` button.
![matt button](/lessons/24-creating-new-materials/materials-button.png)
4. Right-Click on the ``frame`` material in the Material Browser and then Duplicate.
![duplicate frame](/lessons/24-creating-new-materials/dup-frame.png)
5. Name the new material ``Eames Chair Frame`` and select it.
6. Next open the ``Asset Browser`` and search for the material ``Wood - Teak``
![asset browser](/lessons/24-creating-new-materials/asset-browser-teak.png)
7. Double click on ``Wood - Teak`` to assign it to the ``Eames Chair Frame`` material.
8. Close the Asset browser.
9. On the graphics tab of the Material Browser change the surface pattern to ``Wood 3`` as shown.
![wood 3](/lessons/24-creating-new-materials/wood-pattern.png)
10. Click ``OK`` to save the material.
##### Note this will not reflect changes on the chair yet, we will do that at the end
11. Repeat steps ``3`` through ``8`` twice to create a ``Eames Chair Leather`` material using the ``Creased - Black`` asset and a ``Eames Chair Metal`` material using the ``Chrome - Polished`` asset.
12. Click ``OK`` to save the materials.

## Assign Materials to Eames Chair

1. Open the ``Living Room Interior`` 3D view if it's not already and zoom in on the Eames Chair.
2. Select the ``Eames Lounge Chair`` by clicking on it in the view.
3. In the properties palette replace the ``Materials and Finishes`` instance properties with the new materials. Set ``Seat Fabric = Eames Chair Leather``, ``Metal Parts = Eames Chair Metal``, and ``Wooden Shell = Eames Chair Frame``.
![chair properties](/lessons/24-creating-new-materials/chair-props.png)
4. You may notice that everything is now brown, which is odd. To fix this you need to enable the ``Use Render Appearance`` checkbox in the Material Browser. This finds the average color of the material and uses that for the shaded views instead of a manually set color which we inherited from the ``frame`` material by duplicating it.
![render appearance](/lessons/24-creating-new-materials/use-rap.png)
5. Your chair should now look better, see results below:
![final](/lessons/24-creating-new-materials/final.png)

## Save your file

Save your file as ``Spring2024_3262_firstinitial_lastname_LAB07_EX02.rvt``

#### Cover Image Credits: archdaily.com