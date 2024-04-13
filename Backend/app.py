from flask import Flask
# from transcript import get_transcript
# from transformers import pipeline
import extractive 
app = Flask(__name__)


@app.route('/')
def index_page():
    url='n_n0jwVdbmI&ab_channel=BBC'
    text=extractive.generate_extractive(url)
    return text

if __name__ == '__main__':
    app.run()