from summarizer.sbert import SBertSummarizer
import transcript
#from translate import Translator
from googletrans import Translator
from gtts import gTTS
from download import makeTextFile

def generate_extractive(url,body):
    try:
        #body=transcript.get_transcript(url)
        model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
        result = model(body,0.5)
    except:
        result="0"
        body="0"
    return result


def generate_extr_transl(Transcript,eng_sum):

    original_text_length = len(Transcript)
    final_summary_length = len(eng_sum)

    translator=Translator()

    hindi_translated_summary = translator.translate(eng_sum, 'hi','en')
    gujarati_translated_summary =translator.translate(eng_sum, 'gu','en')

    hindi_translated_summary=hindi_translated_summary.text
    gujarati_translated_summary=gujarati_translated_summary.text

    makeTextFile("Original_Transcript",Transcript)
    makeTextFile("Extractive_English", eng_sum)
    makeTextFile("Extractive_Hindi", hindi_translated_summary)
    makeTextFile("Extractive_Gujarati", gujarati_translated_summary)

    return original_text_length, final_summary_length, hindi_translated_summary, gujarati_translated_summary


# text="In the heart of the Amazon rainforest lies an ecosystem teeming with life. From the towering canopy to the forest floor, every layer hosts a diverse array of plants and animals. Jaguars prowl stealthily through the underbrush, while colorful macaws soar overhead. Beneath the lush greenery, a network of rivers and streams provides vital nourishment to the countless species that call this place home. However, this biodiversity hotspot faces mounting threats from deforestation, illegal logging, and climate change. Conservation efforts are underway to protect this precious wilderness and ensure its survival for future generations."
# print(extractive(text))