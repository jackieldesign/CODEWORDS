[click here to see a pose net test!](https://jackieliiu.github.io/CODEWORDS/Week09/PoseNet101/)

I tried to trigger the "hello" to appear with the x position of the nose ( pose.nose.x ) but when I tried to do it was blank. 
For now I'm just using mouseX. 

I really want achieve getting text to appear every time the person on camera moves from side to side.

**UPDATE:FIXED!**

I was able to fix it by using a nested if statement to make sure a pose was detected before trying to detect the nose.x position!!! I found a more helpful error message in the console log that pointed that out for me.

[click here for some progress(?)](https://jackieliiu.github.io/CODEWORDS/Week09/PoseNet102/PoseNet102/)

I ended up doing this weird thing when I properly split the string of text I put in. I'm having a lot of trouble trying to cycle through the words of the array. I like the idea of getting one word every time you oscillate and reading in that manner, but I can't seem to find out how to get the words to increment to the next one in the array. I feel like this should be easy? AhhhhhhhhhhhH!!

I also wouldn't mind having one word added a line underneath each time the reader oscillates, which the above ^ can be a vague representation of.



