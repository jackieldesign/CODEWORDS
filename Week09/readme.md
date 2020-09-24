[click here to see a pose net test!](https://jackieliiu.github.io/CODEWORDS/Week09/PoseNet101/)

I tried to trigger the "hello" to appear with the x position of the nose ( pose.nose.x ) but when I tried to do it was blank. 
For now I'm just using mouseX. 

I really want achieve getting text to appear every time the person on camera moves from side to side.

**UPDATE:FIXED!**

I was able to fix it by using a nested if statement to make sure a pose was detected before trying to detect the nose.x position!!! I found a more helpful error message in the console log that pointed that out for me.
