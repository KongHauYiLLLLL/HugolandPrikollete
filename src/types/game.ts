export interface GameState {
  coins: number;
  gems: number;
  shinyGems: number;
  totems: number;
  zone: number;
  playerStats: PlayerStats;
  inventory: Inventory;
  currentEnemy: Enemy | null;
  inCombat: boolean;
  combatLog: string[];
  isPremium: boolean;
  achievements: Achievement[];
  collectionBook: CollectionBook;
  knowledgeStreak: KnowledgeStreak;
  gameMode: GameMode;
  statistics: Statistics;
  cheats: CheatSettings;
  mining: Mining;
  yojefMarket: YojefMarket;
  playerTags: PlayerTag[];
  dailyRewards: DailyRewards;
  progression: ProgressionSystem;
  offlineProgress: OfflineProgress;
  gardenOfGrowth: GardenOfGrowth;
  settings: GameSettings;
  hasUsedRevival: boolean;
  adventureSkills: AdventureSkillsState;
  research: ResearchSystem;
  multipliers: Multipliers;
  merchant: MerchantSystem;
  randomEvents: RandomEventsSystem;
  damageStreak: DamageStreak;
}

export interface DamageStreak {
  current: number;
  multiplier: number;
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  baseAtk: number;
  baseDef: number;
  baseHp: number;
}

export interface Inventory {
  weapons: Weapon[];
  armor: Armor[];
  relics: RelicItem[];
  currentWeapon: Weapon | null;
  currentArmor: Armor | null;
  equippedRelics: RelicItem[];
}

export interface Weapon {
  id: string;
  name: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythical';
  baseAtk: number;
  level: number;
  upgradeCost: number;
  sellPrice: number;
  isChroma?: boolean;
  durability: number;
  maxDurability: number;
  isEnchanted?: boolean;
  enchantmentMultiplier?: number;
}

export interface Armor {
  id: string;
  name: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythical';
  baseDef: number;
  level: number;
  upgradeCost: number;
  sellPrice: number;
  isChroma?: boolean;
  durability: number;
  maxDurability: number;
  isEnchanted?: boolean;
  enchantmentMultiplier?: number;
}

export interface RelicItem {
  id: string;
  name: string;
  type: 'weapon' | 'armor';
  baseAtk?: number;
  baseDef?: number;
  level: number;
  upgradeCost: number;
  cost: number;
  description: string;
}

export interface Enemy {
  name: string;
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  zone: number;
  isPoisoned?: boolean;
  poisonTurns?: number;
  canDropItems?: boolean;
  isBoss?: boolean;
  specialAbility?: string;
}

export interface ChestReward {
  type: 'weapon' | 'armor' | 'gems';
  items?: (Weapon | Armor)[];
  gems?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
  reward?: {
    coins?: number;
    gems?: number;
    special?: string;
  };
}

export interface CollectionBook {
  weapons: { [key: string]: boolean };
  armor: { [key: string]: boolean };
  totalWeaponsFound: number;
  totalArmorFound: number;
  rarityStats: {
    common: number;
    rare: number;
    epic: number;
    legendary: number;
    mythical: number;
  };
}

export interface KnowledgeStreak {
  current: number;
  best: number;
  multiplier: number;
  lastCorrectTime?: Date;
}

export interface GameMode {
  current: 'normal' | 'blitz' | 'bloodlust';
  speedModeActive: boolean;
}

export interface Statistics {
  totalQuestionsAnswered: number;
  correctAnswers: number;
  totalPlayTime: number;
  zonesReached: number;
  itemsCollected: number;
  coinsEarned: number;
  gemsEarned: number;
  shinyGemsEarned: number;
  chestsOpened: number;
  accuracyByCategory: {
    [category: string]: {
      correct: number;
      total: number;
    };
  };
  sessionStartTime: Date;
  totalDeaths: number;
  totalVictories: number;
  longestStreak: number;
  fastestVictory: number;
  totalDamageDealt: number;
  totalDamageTaken: number;
  itemsUpgraded: number;
  itemsSold: number;
  totalResearchSpent: number;
  averageAccuracy: number;
  revivals: number;
}

export interface CheatSettings {
  infiniteCoins: boolean;
  infiniteGems: boolean;
  obtainAnyItem: boolean;
}

export interface Mining {
  totalGemsMined: number;
  totalShinyGemsMined: number;
}

export interface MiningTool {
  id: string;
  name: string;
  description: string;
  cost: number;
  efficiency: number;
  owned: boolean;
}

export interface YojefMarket {
  items: RelicItem[];
  lastRefresh: Date;
  nextRefresh: Date;
}

export interface PlayerTag {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  color: string;
}

export interface DailyRewards {
  lastClaimDate: Date | null;
  currentStreak: number;
  maxStreak: number;
  availableReward: DailyReward | null;
  rewardHistory: DailyReward[];
}

export interface DailyReward {
  day: number;
  coins: number;
  gems: number;
  items?: (Weapon | Armor)[];
  special?: string;
  claimed: boolean;
  claimDate?: Date;
}

export interface ProgressionSystem {
  unlockedSkills: string[];
  prestigeLevel: number;
  prestigePoints: number;
  masteryLevels: {
    [category: string]: number;
  };
}

export interface OfflineProgress {
  lastSaveTime: Date;
  offlineCoins: number;
  offlineGems: number;
  offlineTime: number;
  maxOfflineHours: number;
}

export interface GardenOfGrowth {
  isPlanted: boolean;
  plantedAt: Date | null;
  lastWatered: Date | null;
  waterHoursRemaining: number;
  growthCm: number;
  totalGrowthBonus: number;
  seedCost: number;
  waterCost: number;
  maxGrowthCm: number;
}

export interface GameSettings {
  colorblindMode: boolean;
  darkMode: boolean;
  language: 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ru' | 'ja' | 'ko' | 'zh';
  notifications: boolean;
  snapToGrid: boolean;
  beautyMode: boolean;
}

export interface AdventureSkillsState {
  selectedSkill: AdventureSkill | null;
  availableSkills: AdventureSkill[];
  showSelectionModal: boolean;
  skillEffects: {
    skipCardUsed: boolean;
    metalShieldUsed: boolean;
    dodgeUsed: boolean;
    truthLiesActive: boolean;
    lightningChainActive: boolean;
    rampActive: boolean;
    berserkerActive: boolean;
    vampiricActive: boolean;
    phoenixUsed: boolean;
    timeSlowActive: boolean;
    criticalStrikeActive: boolean;
    shieldWallActive: boolean;
    poisonBladeActive: boolean;
    arcaneShieldActive: boolean;
    battleFrenzyActive: boolean;
    elementalMasteryActive: boolean;
    shadowStepUsed: boolean;
    healingAuraActive: boolean;
    doubleStrikeActive: boolean;
    manaShieldActive: boolean;
    berserkRageActive: boolean;
    divineProtectionUsed: boolean;
    stormCallActive: boolean;
    bloodPactActive: boolean;
    frostArmorActive: boolean;
    fireballActive: boolean;
  };
}

export interface AdventureSkill {
  id: string;
  name: string;
  description: string;
  type: 'ramp' | 'lightning_chain' | 'skip_card' | 'metal_shield' | 'truth_lies' | 'berserker' | 'vampiric' | 'time_slow' | 'critical_strike' | 'healing_aura';
}

export interface TriviaQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'type-answer' | 'slider';
  options?: string[];
  correctAnswer: number | string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  sliderRange?: { min: number; max: number };
  hint?: string;
}

// Missing interfaces that were referenced but not defined
export interface ResearchSystem {
  level: number;
  experience: number;
  experienceToNext: number;
  totalSpent: number;
  bonuses: {
    atk: number;
    def: number;
    hp: number;
    coinMultiplier: number;
    gemMultiplier: number;
    xpMultiplier: number;
  };
}

export interface Multipliers {
  coins: number;
  gems: number;
  atk: number;
  def: number;
  hp: number;
}

export interface MerchantSystem {
  hugollandFragments: number;
  totalFragmentsEarned: number;
  lastFragmentZone: number; // Now every 3 zones instead of 5
  showRewardModal: boolean;
  availableRewards: MerchantReward[];
}

export interface MerchantReward {
  id: string;
  type: 'item' | 'coins' | 'gems' | 'xp' | 'health' | 'attack';
  name: string;
  description: string;
  icon: string;
  item?: Weapon | Armor | RelicItem;
  coins?: number;
  gems?: number;
  xp?: number;
  healthMultiplier?: number;
  attackMultiplier?: number;
}

export interface RandomEventsSystem {
  currentEvent: RandomEvent | null;
  nextEvent: RandomEvent | null;
  nextEventTime: Date;
}

export interface RandomEvent {
  id: string;
  name: string;
  description: string;
  type: 'planting_season' | 'meteor_shower' | 'mining_frenzy' | 'relics_rundown' | 'market_shutdown' | 'sneaky_merchant' | 'treble';
  startTime: Date;
  endTime: Date;
  icon: string;
}