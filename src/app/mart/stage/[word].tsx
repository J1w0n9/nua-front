import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MartTopBar } from '@/components/mart/MartTopBar';
import { StageAssemble } from '@/components/mart/stage/StageAssemble';
import { StageCorrectResult } from '@/components/mart/stage/StageCorrectResult';
import { StageListen } from '@/components/mart/stage/StageListen';
import { StageMeaningQuiz } from '@/components/mart/stage/StageMeaningQuiz';
import { StageMeetWord } from '@/components/mart/stage/StageMeetWord';
import { StageProblem } from '@/components/mart/stage/StageProblem';
import { StageReward } from '@/components/mart/stage/StageReward';
import { StageSoundQuiz } from '@/components/mart/stage/StageSoundQuiz';
import { MART_WORDS } from '@/data/martWords';
import type { MartWordId } from '@/enums';
import { useMartStore } from '@/store/useMartStore';

export default function MartStageScreen() {
  const { word: wordParam } = useLocalSearchParams<{ word: MartWordId }>();
  const word = MART_WORDS[wordParam];
  const stageStep = useMartStore((state) => state.stageStep);
  const advanceStep = useMartStore((state) => state.advanceStep);
  const completeStage = useMartStore((state) => state.completeStage);

  if (!word) return null;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MartTopBar title={word.label} />
      {stageStep === 'problem' && <StageProblem onNext={advanceStep} />}
      {stageStep === 'meetWord' && <StageMeetWord word={word} onNext={advanceStep} />}
      {stageStep === 'meaningQuiz' && <StageMeaningQuiz word={word} onCorrect={advanceStep} />}
      {stageStep === 'listen' && <StageListen word={word} onNext={advanceStep} />}
      {stageStep === 'soundQuiz' && <StageSoundQuiz word={word} onCorrect={advanceStep} />}
      {stageStep === 'assemble' && <StageAssemble word={word} onCorrect={advanceStep} />}
      {stageStep === 'correct' && (
        <StageCorrectResult
          word={word}
          onNext={() => {
            completeStage();
            advanceStep();
          }}
        />
      )}
      {stageStep === 'reward' && <StageReward word={word} />}
    </SafeAreaView>
  );
}
