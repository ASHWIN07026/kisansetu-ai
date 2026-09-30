import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  X, 
  Send, 
  Sparkles, 
  Bot
} from 'lucide-react';
import { voiceAssistant } from '../services/voiceAssistant';
import { askKisanMitra } from '../services/geminiService';

export const KisanMitraVoiceModal = ({
  isOpen,
  onClose,
  currentLang,
  stateNode,
  translations: t
}) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Namaste! I am Kisan Mitra AI (किसान मित्र), your agricultural intelligence assistant for ${stateNode.name}. You can tap the microphone to speak in your language or select one of the common farmer questions below.`
    }
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Suggested questions in English & Hindi for farmers
  const quickQuestions = [
    'How to make 200L Jeevamrutha bio-fertilizer?',
    'What government subsidy is available for drip irrigation?',
    'Remedy for yellowing leaves in standing wheat crop?',
    'Best companion crops for black soil in drought?'
  ];

  const langCodeMap = {
    en: 'en-IN',
    hi: 'hi-IN',
    mr: 'mr-IN',
    pa: 'pa-IN',
    te: 'te-IN',
    ta: 'ta-IN',
    kn: 'kn-IN',
    bn: 'bn-IN'
  };

  const handleStartListening = () => {
    if (isListening) {
      voiceAssistant.stopListening();
      setIsListening(false);
      return;
    }

    voiceAssistant.stopSpeaking();
    setIsSpeaking(false);

    voiceAssistant.startListening({
      lang: langCodeMap[currentLang] || 'hi-IN',
      onResult: (transcript, isFinal) => {
        setQuery(transcript);
        if (isFinal) {
          setIsListening(false);
          handleSendQuery(transcript);
        }
      },
      onEnd: () => setIsListening(false),
      onError: (err) => {
        setIsListening(false);
        console.warn('Voice recognition error', err);
      }
    });

    setIsListening(true);
  };

  const handleSendQuery = async (customQuery) => {
    const textToSend = (customQuery || query).trim();
    if (!textToSend) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setQuery('');
    setIsThinking(true);

    try {
      const response = await askKisanMitra(textToSend, stateNode, currentLang);
      setMessages([...newMessages, { sender: 'bot', text: response.text, isLiveGemini: response.isLiveGemini }]);

      // Automatically speak the response
      voiceAssistant.speak({
        text: response.text,
        lang: langCodeMap[currentLang] || 'hi-IN',
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  const handleToggleSpeech = (text) => {
    if (isSpeaking) {
      voiceAssistant.stopSpeaking();
      setIsSpeaking(false);
    } else {
      voiceAssistant.speak({
        text,
        lang: langCodeMap[currentLang] || 'hi-IN',
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '16px'
    }}>
      <div className="glass-panel-elevated" style={{
        maxWidth: '680px',
        width: '100%',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-highlight)'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(16, 185, 129, 0.5)'
            }}>
              <Bot size={20} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{t.voiceModalTitle}</h3>
              <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--emerald-bright)' }}>
                Google AI Voice • {stateNode.state} Agro-Grid
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              voiceAssistant.stopSpeaking();
              voiceAssistant.stopListening();
              onClose();
            }}
            style={{ background: 'transparent', color: 'var(--text-muted)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Conversation Message List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {messages.map((m, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '10px',
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%'
              }}
            >
              {m.sender === 'bot' && (
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--emerald-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Bot size={14} color="var(--emerald-bright)" />
                </div>
              )}

              <div style={{
                background: m.sender === 'user' ? 'linear-gradient(135deg, #10b981 0%, #047857 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                border: m.sender === 'bot' ? '1px solid var(--border-subtle)' : 'none',
                position: 'relative'
              }}>
                <div>{m.text}</div>
                {m.sender === 'bot' && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                      {m.isLiveGemini ? '⚡ Powered by Gemini API' : '🌱 ICAR Agronomist Model'}
                    </span>
                    <button
                      onClick={() => handleToggleSpeech(m.text)}
                      style={{
                        background: 'transparent',
                        color: isSpeaking ? 'var(--emerald-bright)' : 'var(--text-muted)',
                        padding: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.74rem'
                      }}
                    >
                      {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      <span>{isSpeaking ? 'Stop' : 'Listen'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isThinking && (
            <div style={{ display: 'flex', gap: '10px', alignSelf: 'flex-start' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.84rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={16} color="var(--gold-bright)" className="animate-pulse-glow" />
                <span>Kisan Mitra is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Question Buttons */}
        <div style={{
          padding: '8px 16px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuery(q)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                padding: '5px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input & Voice Controls */}
        <div style={{
          padding: '16px',
          background: 'rgba(4, 16, 11, 0.95)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {/* Mic Button */}
          <button
            onClick={handleStartListening}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: isListening ? 'var(--red-alert)' : 'var(--emerald-primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: isListening ? '0 0 20px rgba(244, 63, 94, 0.6)' : '0 0 14px rgba(16, 185, 129, 0.4)'
            }}
            title={isListening ? 'Stop Listening' : 'Tap to Speak'}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder={isListening ? t.listening : t.voicePromptPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendQuery();
            }}
            style={{
              flex: 1,
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              color: '#ffffff',
              fontSize: '0.88rem'
            }}
          />

          {/* Send Button */}
          <button
            onClick={() => handleSendQuery()}
            disabled={!query.trim() || isThinking}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Send size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
