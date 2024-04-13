from summarizer.sbert import SBertSummarizer
import transcript
#from translate import Translator
from googletrans import Translator
from gtts import gTTS
import os
from download import makeTextFile

def generate_extractive(url):
    try:
        body=transcript.get_transcript(url)
        model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
        result = model(body, num_sentences=5)
    except:
        result="0"
        body="0"
    return result,body


def generate_extr_transl(Transcript,eng_sum):

    original_text_length = len(Transcript)
    final_summary_length = len(eng_sum)

    # hin_translator=Translator(to_lang='hi')
    # guj_translator=Translator(to_lang='gu')
    # hindi_translated_summary = hin_translator.translate(eng_sum)
    # gujarati_translated_summary =guj_translator.translate(eng_sum)
    
    translator=Translator()
    from_lang='en'
    to_lang='hi'
    hindi_translated_summary = translator.translate(eng_sum, 'hi','en')
    gujarati_translated_summary =translator.translate(eng_sum, 'gu','en')
    hindi_translated_summary=hindi_translated_summary.text
    gujarati_translated_summary=gujarati_translated_summary.text
    makeTextFile("English", eng_sum)
    makeTextFile("Hindi", hindi_translated_summary)
    makeTextFile("Gujarati", gujarati_translated_summary)
    print(hindi_translated_summary)
    return original_text_length, final_summary_length, hindi_translated_summary, gujarati_translated_summary