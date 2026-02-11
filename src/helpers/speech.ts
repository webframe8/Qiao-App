import * as Speech from 'expo-speech';

const handleSpeak = (text: string) => {
            if (!text) return;
    
            Speech.stop(); // Stop any ongoing speech
            Speech.speak(text, {
                language: "zh-CN", // Set the language to Chinese
                rate: 0.8,
                pitch: 1.0,
            })
        }


export default handleSpeak;