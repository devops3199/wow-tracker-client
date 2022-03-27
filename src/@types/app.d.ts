type NameByLanguage = {
  en_US: string;
  ko_KR: string;
};

type Character = {
  id: number;
  name: string;
  realm: {
    name: NameByLanguage;
    slug: string;
  };
  playable_class: {
    name: NameByLanguage;
  };
  playable_race: {
    name: NameByLanguage;
  };
  gender: {
    name: NameByLanguage;
  };
  faction: {
    name: NameByLanguage;
  };
  level: number;
};

type CharactersByAccounts = {
  id: number;
  characters: Character[];
}[];

type UnitedRealm = {
  has_queue: boolean;
  id: number;
  population: {
    name: NameByLanguage;
  };
  realms: {
    id: number;
    name: NameByLanguage;
    slug: string;
    timezone: string;
    type: {
      name: NameByLanguage;
    };
  }[];
};
