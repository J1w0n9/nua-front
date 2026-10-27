import { Text, View } from 'react-native';
import type { MartWordConfig } from '@/data/martWords';
import { MartImagePlaceholder } from '../MartImagePlaceholder';
import { MartRoundButton } from '../MartRoundButton';

interface StageBonusWordsProps {
  word: MartWordConfig;
  onNext: () => void;
}

export function StageBonusWords({ word, onNext }: StageBonusWordsProps) {
  return (
    <View className="flex-1 justify-between py-6">
      <View className="gap-4">
        {word.bonusWords.map((bonus) => (
          <View key={bonus.label} className="flex-row items-center gap-2">
            <MartImagePlaceholder imageSrc={word.imageSrc} className="w-[64px] h-[64px] rounded-xl" />
            <Text className="text-xl">+</Text>
            <View className="px-3 py-2 rounded-lg bg-gray-100">
              <Text className="font-bold">{word.label}</Text>
            </View>
            <Text className="text-xl">=</Text>
            <MartImagePlaceholder imageSrc={bonus.imageSrc} className="w-[64px] h-[56px] rounded-xl" />
            <Text className="font-bold">{bonus.label}</Text>
          </View>
        ))}
      </View>
      <View className="items-center">
        <MartRoundButton variant="primary" icon="next" onPress={onNext} />
      </View>
    </View>
  );
}
