import os
import torchaudio
import torch
import uuid


def generate_unique_string():
    unique_string = str(uuid.uuid4())
    return unique_string

def save_audio_tensor_as_wav(samples, samplerate, filename, directory):
    assert samples.dim() == 2 or samples.dim() == 3
    samples = samples.detach().cpu()
    if samples.dim() == 2:
        samples = samples[None, ...]
    filepath = os.path.join(directory, f"{filename}.wav")
    torchaudio.save(filepath, samples[0],sample_rate=samplerate)
    return file_path

if __name__ == "__main__":
    pass