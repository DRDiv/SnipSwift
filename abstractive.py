from transformers import pipeline
from googletrans import Translator
from gtts import gTTS
import os
from download import makeTextFile
from deepmultilingualpunctuation import PunctuationModel

def abstractive(text):
    try:
        text="summarize: "+text
        a=[i for i in text.split()]
        #max_output_size=int(int(len(a)))
        summarizer=pipeline("summarization",model="my_model")
        pred=summarizer(text)
        result=[pred[0]['summary_text']]
        result=result[0]
        model = PunctuationModel()
        result = model.restore_punctuation(result)
        #final_result=result
       #generating final summary with punctuation
        final_result=""
        try: 
            final_result+=result[0].upper()+result[1]
            for i in range(2,len(result)):
                if result[i-2]=='.' or result[i-2]=='?' or result[i-2]=='!':
                    final_result+=result[i].upper()

                else:
                    final_result+=result[i]
        except:
            if (len(result)==1):
                final_result=result[0].upper()

       
    except:
        final_result="0"
        print(result)


    return final_result

def generate_abstr_transl(eng_sum):

    final_summary_length = len(eng_sum)

    translator=Translator()

    hindi_translated_summary = translator.translate(eng_sum, 'hi','en')
    gujarati_translated_summary =translator.translate(eng_sum, 'gu','en')

    hindi_translated_summary=hindi_translated_summary.text
    gujarati_translated_summary=gujarati_translated_summary.text

    makeTextFile("Abstractive_English", eng_sum)
    makeTextFile("Abstractive_Hindi", hindi_translated_summary)
    makeTextFile("Abstractive_Gujarati", gujarati_translated_summary)
    print (hindi_translated_summary)
    return final_summary_length, hindi_translated_summary, gujarati_translated_summary
