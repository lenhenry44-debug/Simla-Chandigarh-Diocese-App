export enum Language {
  ENGLISH = 'English',
  HINDI = 'Hindi',
  PUNJABI = 'Punjabi',
}

export type HymnCategory = 'Entrance' | 'Kyrie' | 'Gloria' | 'Offertory' | 'Communion' | 'Recessional' | 'Marian' | 'General';

export interface Hymn {
  id: string;
  title: string;
  language: 'English' | 'Hindi' | 'Punjabi';
  category: HymnCategory; // liturgical category
  lyrics: string;
}

export interface DailyContent {
  date: string;
  reading1: {
    source: string;
    text: string;
  };
  psalm: {
    source: string;
    text: string;
  };
  gospel: {
    source: string;
    text: string;
  };
  reflection: string;
  saint: {
    name: string;
    englishName: string; // Used for image search
    description: string;
  };
}

export enum AppTab {
  READINGS = 'Readings',
  REFLECTION = 'Reflection',
  SAINT = 'Saint',
  HYMNS = 'Hymns',
}