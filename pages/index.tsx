import {Player} from '@remotion/player';
import {FinanceVideo} from '../src/FinanceVideo';

export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: 40, backgroundColor: '#000', minHeight: '100vh'}}>
      <Player
        component={FinanceVideo}
        durationInFrames={1800}
        compositionWidth={1080}
        compositionHeight={1920}
        fps={30}
        inputProps={{
          videoUrl: '',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          script: 'Finanz-News die du kennen musst. Der Budget-Ausschuss stimmt für den Stabilitäts-Pakt.'
        }}
        controls
        style={{width: 400}}
      />
    </div>
  );
}