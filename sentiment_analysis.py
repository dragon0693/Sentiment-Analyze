#   Forma basica
from textblob import TextBlob
## Declaracion positiva  subjetiva
t=TextBlob("Siempre me atendienen bien")
ten=t.translate(to="en")
print(ten)
print(ten.sentiment,"\n")
### Declracion positiva y objetiva
t=TextBlob("Hoy no me atendieron como siempre pero igual no esta mal")
ten=t.translate(to="en")
print(ten)
print(ten.sentiment,"\n")
#### Declracion positiva muy subjetiva
t=TextBlob("Siempre me atendienen excelente :)")
ten=t.translate(to="en")
print(ten)
print(ten.sentiment,"\n")
##### Declracion negativa
t=TextBlob("No me gusta, :(")
ten=t.translate(to="en")
print(ten)
print(ten.sentiment,"\n")