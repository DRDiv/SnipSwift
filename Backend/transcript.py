
from youtube_transcript_api import YouTubeTranscriptApi as yta
from deepmultilingualpunctuation import PunctuationModel

def get_transcript(url):

        transcript=yta.get_transcript(url)
        model = PunctuationModel()
        final_transcript=""
        for data in transcript:
               final_transcript+=data['text']+" "
        result = model.restore_punctuation(final_transcript)
        final_result=result[0].upper()+result[1]
        for i in range(2,len(result)):
              if result[i-2]=='.' or result[i-2]=='?' or result[i-2]=='!':
                     final_result+=result[i].upper()
              else:
                     final_result+=result[i]
        return final_result