from flask import Flask, jsonify
import abstractive
from transcript import extract_id
from transcript import get_transcript
import extractive
app = Flask(__name__)


# @app.route('/')
# def index_page():
#     body = {}
#     body['message'] = "Success"
#     body['data'] = "Welcome to YTS API."
#     return buildResponse(body)



#@app.route('/api/', methods=['GET'])
@app.route('/')
def response_page():
    data={}
    #body={}
    extractive_data={}
    abstractive_data={}             #store abstractive data over here


    url='https://www.youtube.com/watch?v=mhDJNfV7hjk '   #change this

    vid_id=extract_id(url)
    # Check if user doesn't provided  at all
    if not vid_id:
        data['message'] = "Failed"
        data['error'] = "no video id found, please provide valid video id."

    # Check if the user entered a invalid instead video_id
    elif str(vid_id) == "False":
        data['message'] = "Failed"
        data['error'] = "video id invalid, please provide valid video id."

        # res=abstractive(vid_id)

    else:
        extr_sum, Transcript=extractive.generate_extractive(vid_id)
        abstr_sum=abstractive.abstractive(Transcript)
        abstractive_data['eng_summary']=abstr_sum
        if extr_sum=="0":
            data['message'] = "Failed"
            data['error'] = "API's not able to retrive Video Transcript."

        else:
            data['message'] = "Success"
            data['id'] = vid_id

            data['original_txt_length'], extractive_data['final_summ_length'],extractive_data['hind_summary'], extractive_data['guj_summary'] =  extractive.generate_extr_transl(Transcript,extr_sum)
            extractive_data['eng_summary']=extr_sum

            #try: 
            abstractive_data['final_summ_length'],abstractive_data['hind_summary'], abstractive_data['guj_summary'] =  abstractive.generate_abstr_transl(abstr_sum)
                #abstractive_data['eng_summary']=abstr_sum

            # except:
            #     abstractive_data['final_summ_length'],abstractive_data['hind_summary'], abstractive_data['guj_summary'] =  '0','0','0'
            #     #abstractive_data['eng_summary']='0'

    data['original_trans']=Transcript
    data['extractive_data']=extractive_data
    data['abstractive_data']=abstractive_data
    #body["data"]=data
    return buildResponse(data)



def buildResponse(body):
    from flask import json, Response
    #res.headers["Content-Type"] = "application/json; charset=utf-8"
    #return res
    response = jsonify(body)
    #response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == '__main__':
    app.run()