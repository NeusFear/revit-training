---
title: 'Creating Roof Shapes'
excerpt: 'Learn various ways to create and customize roof shapes and forms to fit the needs of your project.'
coverImage: '/lessons/7-creating-roof-shapes/cover.jpg'
date: '2022-01-11T09:39:07.322Z'
files: [
  '/lessons/7-creating-roof-shapes/Lab02_E3_Creating roof shapes.rvt'
]
---

In this lesson you will create two hip roofs and join them for the house used in the previous exercise. You will also learn how to fine tune the roof footprint and properties to create various roof shapes and forms. You will also create a custom roof form by extruding a surface from a sketched profile.

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Create a Hip Roof Over Living Area

1. Open Revit file: ``Lab02_E3_Creating roof shapes.rvt``
2. Open the ``Roof-Living & Bedrooms`` plan view.
3. On the Architecture tab click on the little down arrow under the ``Roof`` button to select the ``Roof by Footprint`` option.
4. On the Properties Palette select the ``Basic Roof Generic - 12"`` roof type and set ``Base Offset from Level`` to ``0' 0"``.
5. Use the ``Boundary Line`` and ``Line`` tools with the ``Defines Slope`` checkbox checked to create a closed roof boundary as indicated bny the red triangle on the underlay.
6. In the Properties Palette set the roof slope to ``3" / 12"`` and click ``Apply``
7. Click on the green checkmark to confirm the roof shape and choose ``Yes`` to the "Attach highlighted walls to roof?"" popup.
![Roof Options](/lessons/7-creating-roof-shapes/first-roof-options.png)
8. Open the ``{3D}`` 3D view to verify your roof looks like this
![Roof 1](/lessons/7-creating-roof-shapes/roof-1.png)

## Create a Hip Roof Over Bedroom Area

In this section we will be creating a roof boundary with some edges sloping and one not sloping. Looking at the underlay you can see that there are 3 blue lines and 1 green line forming the boundary around the bedroom roof. You can either draw 3 of the lines with the ``Defines Slope`` box checked and then uncheck it for the green one or draw it like we did in the previous steps and then uncheck it after. Lets do it the latter way.

1. Open the ``Roof-Living & Bedrooms`` plan view.
2. Repeat steps ``3`` through ``7`` for the bedroom roof. Note which of the underlay lines was green.
3. Open the ``{3D}`` 3D view to verify your roof looks like this
![Roof 2 Unfinished](/lessons/7-creating-roof-shapes/roof-2-unfinished.png)
4. Click on the roof in the 3D view and then click on the ``Edit Footprint`` button on the ribbon.
5. Click on the boundary line that is where the green underlay line was and uncheck the ``Defines Slope`` checkbox under the ribbon.
6. Click on the green checkmark to confirm the roof. It should look like the image below.
![Roof 2 Unfinished](/lessons/7-creating-roof-shapes/roof-2-finished.png)

## Join the two roofs together.

1. Open the ``{3D}`` 3D view and orbit your camera around to look at your two roofs like this.
![Orientation](/lessons/7-creating-roof-shapes/roofs-unconnected.png)
2. Select the bedroom roof and on the ``Modify | Roofs`` tab click on the Join / Unjoin Roof tool on the ribbon.
![Join Roof Button](/lessons/7-creating-roof-shapes/join-roof-button.png)
3. Click on one of the gable edges of the bedroom roof as shown below.
4. Click on the face of the living area roof that faces the bedroom roof as highlighted below.
![Join Roof Button](/lessons/7-creating-roof-shapes/roofs-unconnected-edges.png)
5. Verify the result looks like below
![Join Roof Button](/lessons/7-creating-roof-shapes/roofs-connected.png)

## Cleanup the Model

1. Click on the Roof Piece that is floating and delete it with the ``Del`` key.
![Join Roof Button](/lessons/7-creating-roof-shapes/cleanup-points.png)
2. Select the walls that extend past the roof line. (Remember you can use the ``Ctrl`` key to do this)
![Join Roof Button](/lessons/7-creating-roof-shapes/extra-walls.png)
3. Click on the ``Attach Top/Base`` button on the Ribbon.
4. Click on the Bedroom Roof to attach the walls.
5. Verify your completed roof looks like below.
![Join Roof Button](/lessons/7-creating-roof-shapes/completed.png)

## Save your file

Save your file as ``Spring2022_3262_firstinitial_lastname_LAB02_EX03.rvt``

#### Cover Image Credits: re-thinkingthefuture.com