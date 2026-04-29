import {AbsoluteFill, Audio, Video, useCurrentFrame, useVideoConfig, interpolate, Sequence} from 'remotion';

export const FinanceVideo: React.FC<{
  videoUrl: string;
  audioUrl: string;
  script: string;
}> = ({videoUrl, audioUrl, script}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Wort-für-Wort Captions (Mr. Beast Style)
  const words = script.split(' ');
  const wordsPerSecond = 2.5;
  const currentWordIndex = Math.floor((frame / fps) * wordsPerSecond);
  const visibleWords = words.slice(Math.max(0, currentWordIndex - 2), currentWordIndex + 1);

  // Animationen
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});
  const scale = interpolate(frame, [0, 20], [0.8, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {/* Hintergrund Video */}
      <Video
        src={videoUrl}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Dark Overlay */}
      <AbsoluteFill style={{backgroundColor: 'rgba(0,0,0,0.3)'}} />

      {/* Animierte Captions */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)',
            opacity,
            transform: `scale(${scale})`,
            lineHeight: 1.2,
          }}
        >
          {visibleWords.map((word, i) => (
            <span
              key={i}
              style={{
                backgroundColor: i === visibleWords.length - 1 ? '#FFD700' : 'transparent',
                color: i === visibleWords.length - 1 ? '#000' : '#fff',
                padding: '4px 12px',
                margin: '0 4px',
                borderRadius: 8,
                display: 'inline-block',
                transition: 'all 0.2s',
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </AbsoluteFill>

      {/* Audio */}
      <Audio src={audioUrl} />
    </AbsoluteFill>
  );
};