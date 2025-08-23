# 🧠 AI Projects – Haryiank Kumra  

Welcome to my AI/ML project collection!  
This repository brings together **three domains** where AI meets real-world applications:  

1. 🎙️ **Voice Cloning / Generation**  
2. ✋➡️🔤 **Sign Language to Text**  
3. 🚨 **Smart Panic Detection Hardware**  

---

## 📌 Projects Overview  

### 1️⃣ Voice Cloning / Generation 🎙️  
**Goal**: Recreate human-like voices or clone a specific voice for personalized TTS (Text-to-Speech).  

**Tech Stack**:  
- Hugging Face TTS models (`xtts`, `bark`, `parler-tts`)  
- PyTorch, Transformers  
- Gradio (interactive UI)  

**Features**:  
- Input text → Generate natural speech  
- Clone a voice from a sample audio  
- Multi-language support  

---

### 2️⃣ Sign Language to Text ✋➡️🔤  
**Goal**: Bridge communication between deaf/mute individuals and others by converting ASL alphabets into text.  

**Model Used**: [`prithivMLmods/Alphabet-Sign-Language-Detection`](https://huggingface.co/prithivMLmods/Alphabet-Sign-Language-Detection)  

**Tech Stack**:  
- Hugging Face Transformers + PyTorch  
- OpenCV (frame extraction)  
- Gradio (video upload + live prediction UI)  

**Pipeline**:  
📹 Upload a short video of an ASL sign →  
🖼️ Extract frames →  
🧮 Majority voting across frames →  
📄 Predicted letter displayed  

---

### 3️⃣ Smart Panic Detection Hardware 🚨  
**Goal**: Detect stress or panic using physiological sensors and trigger alerts for safety.  

**Hardware Components**:  
- ESP32 / Arduino  
- ECG, EDA, Temperature, Pulse sensors  
- Supabase / FastAPI / MQTT for cloud backend  

**Features**:  
- Real-time stress & panic monitoring  
- Embedded AI for on-device inference  
- Panic button + automated alert system  
- Dashboard/mobile integration for alerts  

---

## 🛠️ Setup Instructions  

### 🔹 General Requirements  
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
pip install -r requirements.txt
