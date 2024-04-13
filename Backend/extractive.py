from summarizer.sbert import SBertSummarizer
import transcript

def generate_extractive(url):
    body=transcript.get_transcript(url)
    model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
    result = model(body, num_sentences=5)
    return result