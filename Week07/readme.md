# Week 7 — Prototypes and Sound in Processing

We started off making sure that we all had excepts from our chosen readings. These are the ones I'm trying to choose from:

> Static, static, static! Be static! Be static! Movement is static! Movement is static! Movement is static because it is the only immutable thing—the only certainty, the only unchangeable. — Jean Tinguely

> We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two. That oscillation is what’s next for text.

> When the scarce commodity is not stuff, however, but the attention we bestow on it, then change is not the special case of stasis but vice versa. Stasis is the printout, the snapshot; change is the underlying reality, the enduring code.

## Working with p5.sound !

Our live coding session with Karen introduced us to using the sound library that comes with Processing. This was so helpful as I love the idea of incorporating sound or music into code. I'd love to use some little sound effects in my major project.

[Click here](https://jackieliiu.github.io/CODEWORDS/Week07/EyeBlink/BlinkEyeSound) for the eye blink I made in class.

<img src="BLINK.JPG">

## Prototype

I found it difficult to visualise everything that I envisioned on a paper prototype.

<p align="CENTER"><img src="finalprototype.gif"></p>

### PSEUDOCODE

```
START

  DISPLAY Live Video
  DISPLAY "<- OSCILLATE ->"
  SET driftSpeed = 0
  SET sensorLeft = (x,y,w,h);
  SET sensorRight = (x,y,w,h);
  
  IF user moves over sensorLeft || sensorRight THEN
    INPUT new line of text
    REMOVE "<- OSCILLATE ->"
    
  IF mouse over any word THEN
    STOP word jitter
    highlight word colour
    
  ELSE jitter words 
    
  ENDIF
  
  SET animations [ jitterdrift, 3Dflyaway ]
  
  FUNCTION mousePressed () {
    IF on words THEN
      words (random[animations])
      driftSpeed += 1,
    ENDIF
  }
  
  
END
  
```

