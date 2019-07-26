import pandas as pd
from textblob import TextBlob
import seaborn as sns

df=pd.read_csv('nyt.csv')

df['polaridad']=df['content'].apply(lambda x: TextBlob(x).sentiment.polarity)
#print(df['polaridad'].head(5))
df['subob']=df['content'].apply(lambda x: TextBlob(x).sentiment.subjectivity)

print("Polaridad")
print("Maximo Valor", df['polaridad'].max())
print("Manimo Valor", df['polaridad'].min())
print("Valor Medio", df['polaridad'].mean())

sns.distplot(df['polaridad'])
sns.distplot(df['subob'])

n=1
while n<5:
    df['P'+str(n)]=df['content'].apply(lambda x: TextBlob(x).sentiment.polarity)
    df['S'+str(n)]=df['content'].apply(lambda x: TextBlob(x).sentiment.subjectivity)
    n=n+1

df.to_csv('res.csv')