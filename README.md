# revit-training
A website to host training blog articles for new Architecture students.
[https://revit-training.vercel.app/](https://revit-training.vercel.app/)

This website is used at Oklahoma State University, and some lessons on the website will show/hide as the semester progresses. 
If you are using this website as a reference after you graduate you will need to likely show all lessons by hovering your mouse between the footer (gray) section and the white section above it until your mouse cursor changes to a pointer then you can click and all lessons will reveal themselves.

## Show/hide lessons (as a professor)
go to [currentLessons.ts](https://github.com/NeusFear/revit-training/blob/main/config/currentLessons.ts) and set the number there to the lesson you want to release (all lessons with a lower number than specified will also be released). Upon commit and push the vercel action will update the website (it may take a few minutes to change).