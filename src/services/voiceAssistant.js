// KisanSetu AI - Multilingual Speech-to-Text & Text-to-Speech Engine for Indian Farmers

class VoiceAssistant {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.isSpeaking = false;
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
    }
  }

  startListening({ lang = 'hi-IN', onResult, onEnd, onError }) {
    if (!this.recognition) {
      if (onError) onError('Speech Recognition is not supported in this browser. Please type your query.');
      return;
    }

    try {
      this.recognition.lang = lang;
      this.isListening = true;

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (onResult) onResult(transcript, event.results[0].isFinal);
      };

      this.recognition.onerror = (event) => {
        this.isListening = false;
        console.warn('Speech Recognition error:', event.error);
        if (onError) onError(event.error);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (onEnd) onEnd();
      };

      this.recognition.start();
    } catch (err) {
      this.isListening = false;
      if (onError) onError(err.message);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  speak({ text, lang = 'hi-IN', onStart, onEnd, onError }) {
    if (!this.synth) {
      if (onError) onError('Speech synthesis not available.');
      return;
    }

    // Cancel any ongoing speech
    this.stopSpeaking();

    // Clean markdown characters and asterisks from text for smooth speech
    const cleanText = text
      .replace(/[*#_`]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\n\r]+/g, '. ');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.95; // Slightly slower for clarity in rural and agricultural terms
    utterance.pitch = 1.0;

    // Try finding matching voice
    const voices = this.synth.getVoices();
    const matchedVoice = voices.find((v) => v.lang.startsWith(lang.split('-')[0])) || voices.find((v) => v.lang.includes('IN'));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      if (onError) onError(e);
    };

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
    }
  }
}

export const voiceAssistant = new VoiceAssistant();
