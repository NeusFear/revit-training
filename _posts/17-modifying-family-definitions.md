---
title: 'Modifying Family Definitions'
excerpt: 'Modify an Existing Floor Lamp family to create a variation for use in other projects'
coverImage: '/lessons/17-modeling-family-definitions/cover.jpg'
date: '2022-01-19T09:22:07.322Z'
files: [
  '/lessons/17-modeling-family-definitions/Lab05_E2_Modifying Family Definition.rvt'
]
prev: '16-modeling-components'
next: '18-creating-new-families'
label: {type: "lab", title: "Lab05 E2"}
---

In this lesson we will use an existing component family to adapt them for future uses. We will add new forms and change instance parameters for these families. We will assign new materials and add dimension properties. We will also define new component family types and load them into our projects.

See Before and After of the lamp:
![before after](/lessons/17-modeling-family-definitions/before-after.png)

## Getting Started

Make sure you have the source files downloaded for this exercise. You can get them with the links above.

## Duplicate the Existing Lamp Family

1. Open the Revit file: ``Lab05_E2_Modifying Family Definition.rvt``
2. Open ``Residence - Sofa and Lamp View`` 3D view.
3. Click on the Lamp then click on the ``Edit Family`` button on the ribbon. This launches the Family Editor mode of revit, it's similar but different than the Project space you've been in before.
![edit family](/lessons/17-modeling-family-definitions/edit-family.png)
4. Click on ``File -> Save As -> Family`` and save the family as ``Floor Lamp - Modern`` somewhere you can remember it. This saves your revit family as a ``.rfa`` file that can be used in as many projects as you want. So when you make changes to the family it will update in all instances in other projects once you relink.
![save as](/lessons/17-modeling-family-definitions/save-as.png)
![save as box](/lessons/17-modeling-family-definitions/save-as-box.png)
5. Click ``Save``

## Modify the Lamp Shade Form

1. Select and delete the center pole element.
2. Select the lamp shade element. (The black dome shape)
3. Open the ``Front`` Elevation view.
4. Click on the ``Edit Revolve`` button on the ribbon Modify tab
![edit revolve](/lessons/17-modeling-family-definitions/edit-revolve.png)
5. Delete existing magenta sketch lines.
6. Draw A line starting ``5"`` away from the center axis and ``4"`` above the ground line at an ``80 degree`` incline ending at the dashed green line at the top as shown below:
![incline](/lessons/17-modeling-family-definitions/incline.png)
7. Use the offset tool by typing ``OF`` to offset the line by ``1/4"``.
8. Close off the ends of the two lines.
9. Click on the green checkmark to finish editing the revolve.
![finished revolve](/lessons/17-modeling-family-definitions/finished-revolve.png)

## Modify the Lamp Base Form

1. Open the ``Front`` Elevation View.
2. Select and delete the existing lamp base.
3. Open the ``Ref. Level`` plan view.
4. On the Create tab select the ``Extrusion`` tool. Then select the ``Circle`` draw mode.
5. Set the center of the circle to the intersection of the green lines (The origin of the family) and set the diameter to ``6"``.
6. In the properties palette set the ``Extrusion End`` to ``0' 4"`` and set the ``Extrusion Start`` to ``0' 0"``.
![base shape](/lessons/17-modeling-family-definitions/base-shape.png)
7. Click on the green checkmark to finish and create the geometry.
8. Open the ``Front`` Elevation View to confirm progress.
![progress](/lessons/17-modeling-family-definitions/base-new.png)

## Add Support Brackets to Lamp Shade

1. Open the ``Front`` Elevation View.
2. On the Create tab click on the ``Sweep`` tool.
![sweep](/lessons/17-modeling-family-definitions/sweep.png)
3. On the Modify | Sweep tab click on the ``Sketch Path`` button.
![sketch path](/lessons/17-modeling-family-definitions/sketch-path.png)
4. Use the Name option and select ``Reference Plane : Light Source Axis`` as your reference plane.
5. Trace the lamp shade, to create a ``3' 6"`` line starting at the base.
![incline](/lessons/17-modeling-family-definitions/incline.png)
6. Click on the green checkmark once to finish the sweep path.
![sweep line](/lessons/17-modeling-family-definitions/sweep-line.png)
7. Click on the ``Select Profile`` then ``Edit Profile`` buttons on the ribbon Modify tab.
![profile](/lessons/17-modeling-family-definitions/profile.png)
8. Click on the ``3D View: {3D}`` 3D View when prompted.
9. Zoom in on the red dot and draw a circle with a radius of ``3/8"`` and located just outside the shade.
![profile line](/lessons/17-modeling-family-definitions/profile-line.png)
10. Click on the finish (green checkmark) button twice to finish and place the geometry.
11. Open ``View 1`` 3D View and confirm progress.
![progress](/lessons/17-modeling-family-definitions/progress.png)
12. Now to array the bracket to make 4 identical ones. Open the ``Ref. Level`` plan view.
13. Note that you can't see the bracket, that's because it's behind or underneath the lamp shade. You can see it if you set the visual style to Wireframe. Do that.
14. Select the now visible bracket then click on the ``Array`` tool. Set the array mode to ``Radial``. Set the ``Number`` to ``4``. Click on the ``Place`` button to place the center of rotation at the center of the lamp.
![radial array](/lessons/17-modeling-family-definitions/radial-array.png)
15. For your start click in the direction of your first bracket, then 90 degrees upwards as shown. Finish the changes.
![directions](/lessons/17-modeling-family-definitions/directions.png)
16. Confirm as shown below:
![4](/lessons/17-modeling-family-definitions/4.png)

## Modify Light Source Definition

1. Open the ``Front`` Elevation View.
2. Select the Light Source Object. Again this is easier in wireframe mode.
3. Click on the ``Light Source Definition`` button on the ribbon.
![light source definition](/lessons/17-modeling-family-definitions/light-source-definition.png)
4. Select the ``Line`` shape and the ``Spherical`` distribution. Click ``OK``
![light mode](/lessons/17-modeling-family-definitions/light-mode.png)
5. Click on both of the padlock icons to unlock the light source constraints.
6. Rotate the light source 90 degrees to be vertical.
7. Move the light source down by ``2' 0"``
8. See light source final position:
![light source](/lessons/17-modeling-family-definitions/light-source.png)

## Assign Materials to Lamp

1. Open the ``Front`` Elevation View.
3. On the Mange tab click on the ``Materials`` tool
![materials](/lessons/17-modeling-family-definitions/materials.png)
4. Right Click on the ``Default`` Material and click on ``Duplicate``. Name the new Material ``Modern Lamp Base``
5. Open the Asset Browser (layered rectangle button at bottom left of material browser) and double click on the ``Walnut - Natural Polished`` material. This will set the ``Modern Lamp Base`` material to the same properties as ``Walnut - Natural Polished``.
![asset browser](/lessons/17-modeling-family-definitions/asset-browser.png)
6. Close the Asset Browser, but keep the Material Browser open.
7. Duplicate the ``Glass - Frosted`` material and name it ``Modern Lamp Shade``
8. Click ``OK`` to exit the Material Browser.
9. Open the ``{3D}`` 3D View.
10. Set visual style to ``Realistic``
11. Select the ``Lamp Base`` Component and set the material value in the properties palette to ``Modern Lamp Base``
12. Select the ``Lamp Shade`` Component. Click on the ``=`` sign to the right of the material field then select ``<none>``.
13. Set the Material to ``Modern Lamp Shade`` like in step 11.
14. Click on the ``Bracket`` component and then click on ``Edit Group`` on the ribbon. Select the component again, and assign the material to ``Metal - Chrome``.
15. Click Finish and see finished lamp below.
![finished lamp](/lessons/17-modeling-family-definitions/finished-lamp.png)
16. Save the Family.

## Load the New Family Into Your Project

1. On the Modify tab click on the ``Load into Project`` button on the ribbon.
![load into project](/lessons/17-modeling-family-definitions/load-into-project.png)
2. If prompted select the ``Lab05_E2_Modifying Family Definition.rvt`` Revit file.
3. Open ``Residence - Sofa and Lamp View`` 3D view.
4. Hit ``esc`` to exit the placement command since we're just going to replace the old lamp with this new family.
5. Click on the old lamp and change it's type in the properties palette to the new one that we just created. the ``60W - 120V`` version.
6. See finished lamp below:
![finished](/lessons/17-modeling-family-definitions/finished-lamp-in-model.png)

## Save your file

Save your file as ``Spring2024_3262_firstinitial_lastname_LAB05_EX02.rvt``

#### Cover Image Credits: medium.com