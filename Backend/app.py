from flask import Flask, jsonify
import extractive 
from transcript import extract_id
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
    body={}
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

    else:
        #as of now, includes only extractive summary, add abstractive summary code here,
        extr_sum, Transcript=extractive.generate_extractive(vid_id)
        if extr_sum=="0":
            data['message'] = "Failed"
            data['error'] = "API's not able to retrive Video Transcript."
        else:
            data['message'] = "Success"
            data['id'] = vid_id
            data['original_txt_length'], extractive_data['final_summ_length'],extractive_data['hind_summary'], extractive_data['guj_summary'] =  extractive.generate_extr_transl(Transcript,extr_sum)
            extractive_data['eng_summary']=extr_sum

    data['original_trans']=Transcript
    data['extractive_data']=extractive_data
    body["data"]=data
    return buildResponse(body)



def buildResponse(body):
    # from flask import json, Response
    # res.headers["Content-Type"] = "application/json; charset=utf-8"
    # return res
    response = jsonify(body)
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == '__main__':
    app.run()