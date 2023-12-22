import os
import io
import uuid
import torch
import torchaudio
from audiocraft.models import musicgen
from flask import Flask, render_template, request, send_file
from utils import generate_unique_string, save_audio_tensor_as_wav

model=musicgen.MusicGen.get_pretrained('small', device='cuda')
model.lm.load_state_dict(torch.load('./models/30epoch_bs3_lre4_probabOverfit.pt'))


def generate_and_return_filepath(Model,text_prompt,lenght_melody,filename,directory):
    model.set_generation_params(duration=lenght_melody)
    generated_tensor = Model.generate([text_prompt],progress=True)
    file_path=save_audio_tensor_as_wav(generated_tensor,32000,filename,directory)
    return file_path


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/about_project')
def about_project():
    return render_template('about_project.html')

@app.route('/generate_audio', methods=['POST'])
def generate_audio():
    filename=generate_unique_string()
    directory="./static/generated"
    file_path=generate_and_return_filepath(model,str(request.form['prompt']),int(request.form['integer_value']),filename,directory)
    return render_template('audio.html', audio_path=f"generated/{filename}.wav")

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,threaded=True)
