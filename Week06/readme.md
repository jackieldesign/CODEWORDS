# Week 06 — Prototyping Space invaders

After choosing our readings, we began to think about how to approach designing our ideas and were introduced to Pseudocode.

<img src="IMG_20200827_115308.jpg">

## What's Next for Text?

Originally I had my eyes on Jean-François Lyotard's "The Postmodern Condition: A Report on Knowledge" as it raised some captivating theories of knowledge becoming obsolete in the future, and the commodity of knowledge. However, when I came across R.A Lanham's "What's Next for Text", I found that the last page especially piqued my interest, with a great quote from Jean Tinguely. Following this, he speaks of the economics of attention, that leads to fads and fashions, writing of attention as a scarce commodity. I saw potential in this idea, with elements possibly fighting for attention

<img src="Reading.png">

# MID-SEM BREAK

I took some time to go through the entire reading to grasp the wider concepts that Lanham presented, and what he generally thought was next for text. Here are some notes I took, including some quotes (highlighted are concepts that I felt I could draw ideas from):

<img src="ReadingNotes.jpg">
<img src="ReadingNotes2.jpg">

## More Prototypes
<p align ="center"><img src="PROTOTYPE1.gif"> </p>

## PSEUDOCODE
```
START
  SET spiralSize = 0
  INPUT spiral sentence
  
  IF user presses "in" THEN
    INCREMENT spiralSize
  IF spiralSize > 800 THEN
    *stop INCREMENT*
    print prompt
    "Press "out" to exhale"
  IF user presses "out" THEN
    *DECREMENT spiralSize*
    
  IF spiralSize = 0 THEN
  INPUT new spiral sentence
      
LOOP
      
```

<p align="center"><img src="PROTOTYPE2.gif"></p>
## PSEUDOCODE

```

START

INPUT textScreen
SET screenSize
FOR every second
  INCREMENT screenSize
IF screenSize/2 > window Width
  slide down off screen
ENDIF
INPUT new textScreen

LOOP


```
<p align="center"><img src="PROTOTYPE3.gif"></p>
## PSEUDOCODE

```
START

INPUT Word String
SET WordSize
WHILE mouseIsMoving
  BUMP WordSize of random Word
ENDWHILE

      
```
<p align="center"><img src="PROTOTYPE4.gif"></p>
## PSEUDOCODE

```
START 

  IF mouseX > windowWidth/2 THEN
    right half slides left
  ELSE IF mouseX < windowWidth/2 THEN
    left half slides right    
  ENDIF
  IF mouseIsPressed THEN
    INPUT new sentences
  ENDIF

      
```

