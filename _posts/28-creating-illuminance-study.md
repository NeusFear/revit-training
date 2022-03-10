---
title: 'Creating Interior Illuminance Studies'
excerpt: 'Learn how to create a Luminance study for your model using Autodesk Cloud Rendering'
coverImage: '/lessons/28-creating-illuminance-study/cover.jpg'
date: '2022-03-10T09:04:00.000Z'
files: [
  '/lessons/28-creating-illuminance-study/Lab08_E4_CloudRendering_GBS_Weather file.xlsx'
]
prev: '27-creating-solar-studies'
next: '29-downloading-and-sharing-images'
label: 'Lab08 E4'
---

In this lesson we will learn how to create Illuminance studies for our spaces in Revit using the Autodesk Cloud Rendering program.

## Getting Started

Make sure you have the source files downloaded for this exercise.
The Revit File is the same file from Ex 25 (Lab08 Ex01), but you'll need the .xlsx file for this Lesson.

## What is an Illuminance Study

A Illuminance study uses overlaid colors to show how much light reaches a portion of the space. This is useful for determining if enough light is reaching desktops for different required illuminance by code for a type of task that the space is used for. Illuminance is measured in either Lux or Foot-Candles (1 FC = 10.7 Lux). If you're an Architecture Student at Oklahoma State, you'll learn about this in Arch Sci 2, but it's good to know now.

## Creating an Illuminance Study

1. Open the Revit file from the last Lessons.
2. Open the ``Living Room Interior`` 3D view.
3. Click on the ``Render in Cloud`` button on the View tab.
4. Now to configure this type of rendering is a bit more complex.
5. Set the 3D View to the ``Living Room Interior``, then the Output Type to ``Illuminance``, and finally the Image Size to ``Medium``.
6. You will now see that there are 3 tabs to configure. ``Location/Time``, ``Sky Model``, and ``Legend``. Configure each of those as shown.
7. On Location/Time set ``Use date from view`` to checked.
![loc time settings](/lessons/28-creating-illuminance-study/loc-time.png)
8. On Sky Model set Sky Model to ``Perez All-Weather Sky``, set DNI to ``792``, and set DHI to ``89``.
![Sky model settings](/lessons/28-creating-illuminance-study/sky-model.png)
9. On Legend set the Units to ``Lux`` and set the Max to ``4000``.
![legend settings](/lessons/28-creating-illuminance-study/legend.png)
10. Click on Start Rendering.
11. View your Illuminance Study in the browser, once it's complete it should look like the following. Note the colors relating to the Legend on the right side. These colors relate to levels of light intensity of the scene.
![final](/lessons/28-creating-illuminance-study/ill-study.png)

## Overview of These Settings

- **Location/Time**: This affects the angles that the light comes into the building, At different locations and times there will be different light conditions. By choosing to inherit the settings from the view you are saying that you've already configured this within revit with the ``Sun Path`` tool.
- **Sky Model**: These values are derived from the Attached Excel sheet. For more information on how to collect these for yourselves see these two help articles: [building performance analysis](https://help.autodesk.com/view/BUILDING_PERFORMANCE_ANALYSIS/ENU/?guid=GUID-A93DC4A2-7017-4191-BFE0-915CCEC4D3AD) and [GBS data settings](https://help.autodesk.com/view/BUILDING_PERFORMANCE_ANALYSIS/ENU/?guid=GUID-AED242A1-6658-44AE-A7F7-00FFAEEC5ECC)
- **Legend**: This is just where you define values that will affect the output of the file. The Legend will be in the selected Units and the color range will be determined by your min and max values. This will make sense when you see your final rendering.
- **Other Material Notes**: Revit stores certain properties for wall types. The ones that matter for this are the Glazing properties like U-Value, VT, and SHG. It is recommended that you use correct values for this in your window types before running one of these studies. Assume all values are correct in this example.

## Save your file

We will learn how to share these in the next lesson

#### Cover Image Credits: Taskin Altinel