from flask import Flask, request, jsonify, send_file, send_from_directory
from urllib.request import urlretrieve
import replicate
import uuid
import os

def generate_unique_string():
    return str(uuid.uuid4())

deployment = replicate.deployments.get("shahzaib-123/chordcraft")


def generate(Prompt,Duration):
    prediction=deployment.predictions.create(
        input={"prompt": Prompt, "duration":Duration}
    )
    prediction.wait()
    return prediction.output

    
app = Flask(__name__, static_folder="./build",)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/generate_audio', methods=['POST'])
def generate_audio():
    data = request.json  
    
    directory = "./generated"
    prompt = str(data.get('prompt', '')) 
    length = int(data.get('length', 0)) 
    
    #make inference
    file_url=generate(prompt,length)

    #generate a sample
    filename=generate_unique_string()+".wav"

    file_path=directory+"/"+filename

    #retrieve the generated audio and save it in ./generated directory
    urlretrieve(file_url,file_path)
    
    #remove following line when deploying
    if not os.path.exists(file_path):
        return jsonify({"error": "Audio file not found"}), 404

    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,threaded=True)
