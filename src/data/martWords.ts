import type { MartWordId } from '@/enums';

export interface MartJamoSlot {
  jamo: string;
  given: boolean;
}

export interface MartWordConfig {
  id: MartWordId;
  label: string;
  syllables: string[];
  slots: MartJamoSlot[];
  meaningOptions: string[];
  imageSrc?: string;
}

export const MART_WORDS: Record<MartWordId, MartWordConfig> = {
  milk: {
    id: 'milk',
    label: '우유',
    syllables: ['우', '유'],
    slots: [
      { jamo: 'ㅇ', given: true },
      { jamo: 'ㅜ', given: false },
      { jamo: 'ㅇ', given: true },
      { jamo: 'ㅠ', given: false },
    ],
    meaningOptions: ['우유', '주스', '물'],
  },
  cucumber: {
    id: 'cucumber',
    label: '오이',
    syllables: ['오', '이'],
    slots: [
      { jamo: 'ㅇ', given: true },
      { jamo: 'ㅗ', given: true },
      { jamo: 'ㅇ', given: false },
      { jamo: 'ㅣ', given: false },
    ],
    meaningOptions: ['오이', '당근', '감자'],
  },
  grape: {
    id: 'grape',
    label: '포도',
    syllables: ['포', '도'],
    slots: [
      { jamo: 'ㅍ', given: false },
      { jamo: 'ㅗ', given: true },
      { jamo: 'ㄷ', given: false },
      { jamo: 'ㅗ', given: false },
    ],
    meaningOptions: ['포도', '사과', '수박'],
  },
  tofu: {
    id: 'tofu',
    label: '두부',
    syllables: ['두', '부'],
    slots: [
      { jamo: 'ㄷ', given: false },
      { jamo: 'ㅜ', given: false },
      { jamo: 'ㅂ', given: false },
      { jamo: 'ㅜ', given: false },
    ],
    meaningOptions: ['두부', '계란', '김치'],
  },
  meat: {
    id: 'meat',
    label: '고기',
    syllables: ['고', '기'],
    slots: [
      { jamo: 'ㄱ', given: false },
      { jamo: 'ㅗ', given: false },
      { jamo: 'ㄱ', given: false },
      { jamo: 'ㅣ', given: false },
    ],
    meaningOptions: ['고기', '생선', '빵'],
  },
};
