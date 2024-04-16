
from youtube_transcript_api import YouTubeTranscriptApi as yta
from deepmultilingualpunctuation import PunctuationModel

def get_transcript(url):
       try: 
              transcript=yta.get_transcript(url,languages=['en'])
       except:
              return "0"
       model = PunctuationModel()
       final_transcript=""

       #cleaning the extracted dataset
       for data in transcript:
              final_transcript+=data['text']
              final_transcript+=" "
              
       #Puts punctuations appropriately.
       result = model.restore_punctuation(final_transcript)

       #generating final transcript
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

       return final_result


def extract_id(vid_url):
       if "youtube.com" in vid_url:
              try:
                     video_id = vid_url.split("=")[1]
                     try:
                            video_id = video_id.split("&")[0]
                     except:
                            video_id = "False"
              except:
                      video_id = "False"

       elif "youtu.be" in vid_url:
              try:
                     video_id = vid_url.split("/")[3]
              except:
                     video_id = "False"
       else:
              video_id = "False"

       return video_id