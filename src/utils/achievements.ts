import { Achievement, GameState } from '../types/game';

export const achievementDefinitions: Omit<Achievement, 'unlocked' | 'unlockedAt' | 'progress'>[] = [
  // Basic Progression
  {
    id: 'first_victory',
    name: 'First Victory',
    description: 'Win your first battle',
    icon: '🏆',
    maxProgress: 1,
    reward: { coins: 50, gems: 5 }
  },
  {
    id: 'zone_explorer',
    name: 'Zone Explorer', 
    description: 'Reach Zone 5',
    icon: '🗺️',
    maxProgress: 5,
    reward: { coins: 100, gems: 5 }
  },
  {
    id: 'zone_master_10',
    name: 'Zone Master',
    description: 'Reach Zone 10', 
    icon: '⚔️',
    maxProgress: 10,
    reward: { coins: 200, gems: 10 }
  },
  {
    id: 'zone_conqueror',
    name: 'Zone Conqueror',
    description: 'Reach Zone 25',
    icon: '🏔️',
    maxProgress: 25,
    reward: { coins: 500, gems: 25 }
  },
  {
    id: 'zone_legend',
    name: 'Zone Legend',
    description: 'Reach Zone 50 and unlock Premium',
    icon: '👑',
    maxProgress: 50,
    reward: { coins: 1000, gems: 50, special: 'Premium Access' }
  },
  {
    id: 'zone_overlord',
    name: 'Zone Overlord',
    description: 'Reach Zone 100',
    icon: '🌋',
    maxProgress: 100,
    reward: { coins: 2000, gems: 100 }
  },

  // Collection Achievements
  {
    id: 'collector_10',
    name: 'Item Collector',
    description: 'Collect 10 different items',
    icon: '📦',
    maxProgress: 10,
    reward: { coins: 200, gems: 10 }
  },
  {
    id: 'collector_25',
    name: 'Master Collector',
    description: 'Collect 25 different items',
    icon: '🎒',
    maxProgress: 25,
    reward: { coins: 500, gems: 25 }
  },
  {
    id: 'collector_50',
    name: 'Legendary Collector',
    description: 'Collect 50 different items',
    icon: '🏛️',
    maxProgress: 50,
    reward: { coins: 1000, gems: 50 }
  },

  // Totem Achievements
  {
    id: 'first_totem',
    name: 'First Totem',
    description: 'Earn your first totem',
    icon: '🗿',
    maxProgress: 1,
    reward: { coins: 200, gems: 10 }
  },
  {
    id: 'totem_collector',
    name: 'Totem Collector',
    description: 'Collect 5 totems',
    icon: '🗿',
    maxProgress: 5,
    reward: { coins: 1000, gems: 50 }
  },

  // Damage Streak Achievements
  {
    id: 'damage_streak_5',
    name: 'Damage Streak',
    description: 'Build a 5x damage streak',
    icon: '💥',
    maxProgress: 5,
    reward: { coins: 300, gems: 15 }
  },
  {
    id: 'damage_streak_10',
    name: 'Damage Master',
    description: 'Build a 10x damage streak',
    icon: '⚡',
    maxProgress: 10,
    reward: { coins: 600, gems: 30 }
  },

  // Research Achievements
  {
    id: 'scholar_tier_5',
    name: 'Scholar',
    description: 'Reach Research Level 5',
    icon: '🧠',
    maxProgress: 5,
    reward: { coins: 400, gems: 20 }
  },
  {
    id: 'scholar_tier_10',
    name: 'Master Scholar',
    description: 'Reach Research Level 10',
    icon: '📚',
    maxProgress: 10,
    reward: { coins: 800, gems: 40 }
  },

  // Knowledge Streak Achievements
  {
    id: 'streak_master_5',
    name: 'Knowledge Streak',
    description: 'Get 5 correct answers in a row',
    icon: '🔥',
    maxProgress: 5,
    reward: { coins: 150, gems: 8 }
  },
  {
    id: 'streak_master_10',
    name: 'Genius Streak',
    description: 'Get 10 correct answers in a row',
    icon: '⚡',
    maxProgress: 10,
    reward: { coins: 300, gems: 15 }
  },
  {
    id: 'streak_master_20',
    name: 'Mastermind Streak',
    description: 'Get 20 correct answers in a row',
    icon: '🌟',
    maxProgress: 20,
    reward: { coins: 800, gems: 40 }
  },

  // Wealth Achievements
  {
    id: 'wealthy_500',
    name: 'Coin Collector',
    description: 'Earn 500 total coins',
    icon: '💰',
    maxProgress: 500,
    reward: { gems: 10 }
  },
  {
    id: 'wealthy_2000',
    name: 'Rich Adventurer',
    description: 'Earn 2,000 total coins',
    icon: '💎',
    maxProgress: 2000,
    reward: { gems: 25 }
  },
  {
    id: 'wealthy_10000',
    name: 'Wealthy Merchant',
    description: 'Earn 10,000 total coins',
    icon: '🏦',
    maxProgress: 10000,
    reward: { gems: 100 }
  },

  // Gem Achievements
  {
    id: 'gem_collector_50',
    name: 'Gem Collector',
    description: 'Earn 50 total gems',
    icon: '💎',
    maxProgress: 50,
    reward: { coins: 300 }
  },
  {
    id: 'gem_collector_200',
    name: 'Gem Master',
    description: 'Earn 200 total gems',
    icon: '💍',
    maxProgress: 200,
    reward: { coins: 1000 }
  },

  // Chest Opening Achievements
  {
    id: 'chest_opener_5',
    name: 'Treasure Hunter',
    description: 'Open 5 chests',
    icon: '🗝️',
    maxProgress: 5,
    reward: { coins: 150, gems: 8 }
  },
  {
    id: 'chest_opener_20',
    name: 'Chest Master',
    description: 'Open 20 chests',
    icon: '📦',
    maxProgress: 20,
    reward: { coins: 600, gems: 30 }
  },

  // Accuracy Achievements
  {
    id: 'accuracy_master_80',
    name: 'Perfect Scholar',
    description: 'Maintain 80% accuracy over 20 questions',
    icon: '🎯',
    maxProgress: 20,
    reward: { coins: 400, gems: 20 }
  },

  // Rarity Achievements
  {
    id: 'legendary_finder',
    name: 'Legendary Hunter',
    description: 'Find your first Legendary item',
    icon: '✨',
    maxProgress: 1,
    reward: { coins: 300, gems: 15 }
  },
  {
    id: 'mythical_finder',
    name: 'Mythical Seeker',
    description: 'Find your first Mythical item',
    icon: '🌟',
    maxProgress: 1,
    reward: { coins: 500, gems: 25 }
  },

  // Combat Achievements
  {
    id: 'warrior_25',
    name: 'Warrior',
    description: 'Win 25 battles',
    icon: '⚔️',
    maxProgress: 25,
    reward: { coins: 500, gems: 25 }
  },
  {
    id: 'warrior_100',
    name: 'Battle Master',
    description: 'Win 100 battles',
    icon: '🛡️',
    maxProgress: 100,
    reward: { coins: 1500, gems: 75 }
  },

  // Mining Achievements
  {
    id: 'miner_50',
    name: 'Gem Miner',
    description: 'Mine 50 gems',
    icon: '⛏️',
    maxProgress: 50,
    reward: { coins: 300, gems: 15 }
  },
  {
    id: 'miner_200',
    name: 'Master Miner',
    description: 'Mine 200 gems',
    icon: '💎',
    maxProgress: 200,
    reward: { coins: 800, gems: 40 }
  },
  {
    id: 'shiny_hunter_5',
    name: 'Shiny Hunter',
    description: 'Find 5 shiny gems',
    icon: '✨',
    maxProgress: 5,
    reward: { coins: 500, gems: 25 }
  },

  // Special Achievements
  {
    id: 'enchanted_finder_3',
    name: 'Enchanted Finder',
    description: 'Find 3 enchanted items',
    icon: '🔮',
    maxProgress: 3,
    reward: { coins: 600, gems: 30 }
  },
  {
    id: 'relic_seeker_3',
    name: 'Relic Seeker',
    description: 'Own 3 relic items',
    icon: '🏺',
    maxProgress: 3,
    reward: { coins: 800, gems: 40 }
  },
  {
    id: 'knowledge_master_100',
    name: 'Knowledge Master',
    description: 'Answer 100 questions correctly',
    icon: '🧠',
    maxProgress: 100,
    reward: { coins: 1000, gems: 50 }
  },

  // Garden Achievements
  {
    id: 'gardener_first',
    name: 'First Gardener',
    description: 'Plant your first seed',
    icon: '🌱',
    maxProgress: 1,
    reward: { coins: 500, gems: 25 }
  },
  {
    id: 'gardener_master',
    name: 'Master Gardener',
    description: 'Grow your plant to 25cm',
    icon: '🌳',
    maxProgress: 25,
    reward: { coins: 1000, gems: 50 }
  }
];

export const checkAchievements = (gameState: GameState): Achievement[] => {
  const newUnlocks: Achievement[] = [];
  
  achievementDefinitions.forEach(def => {
    const existing = gameState.achievements.find(a => a.id === def.id);
    if (existing?.unlocked) return;

    let progress = 0;
    let shouldUnlock = false;

    switch (def.id) {
      case 'first_victory':
        progress = gameState.zone > 1 ? 1 : 0;
        shouldUnlock = progress >= 1;
        break;
      case 'zone_explorer':
        progress = Math.min(gameState.zone, 5);
        shouldUnlock = gameState.zone >= 5;
        break;
      case 'zone_master_10':
        progress = Math.min(gameState.zone, 10);
        shouldUnlock = gameState.zone >= 10;
        break;
      case 'zone_conqueror':
        progress = Math.min(gameState.zone, 25);
        shouldUnlock = gameState.zone >= 25;
        break;
      case 'zone_legend':
        progress = Math.min(gameState.zone, 50);
        shouldUnlock = gameState.zone >= 50;
        break;
      case 'zone_overlord':
        progress = Math.min(gameState.zone, 100);
        shouldUnlock = gameState.zone >= 100;
        break;
      case 'collector_10':
        progress = Math.min(gameState.collectionBook.totalWeaponsFound + gameState.collectionBook.totalArmorFound, 10);
        shouldUnlock = progress >= 10;
        break;
      case 'collector_25':
        progress = Math.min(gameState.collectionBook.totalWeaponsFound + gameState.collectionBook.totalArmorFound, 25);
        shouldUnlock = progress >= 25;
        break;
      case 'collector_50':
        progress = Math.min(gameState.collectionBook.totalWeaponsFound + gameState.collectionBook.totalArmorFound, 50);
        shouldUnlock = progress >= 50;
        break;
      case 'first_totem':
        progress = gameState.totems > 0 ? 1 : 0;
        shouldUnlock = progress >= 1;
        break;
      case 'totem_collector':
        progress = Math.min(gameState.totems, 5);
        shouldUnlock = gameState.totems >= 5;
        break;
      case 'damage_streak_5':
        progress = Math.min(gameState.damageStreak?.current || 0, 5);
        shouldUnlock = (gameState.damageStreak?.current || 0) >= 5;
        break;
      case 'damage_streak_10':
        progress = Math.min(gameState.damageStreak?.current || 0, 10);
        shouldUnlock = (gameState.damageStreak?.current || 0) >= 10;
        break;
      case 'scholar_tier_5':
        progress = Math.min(gameState.research.level, 5);
        shouldUnlock = gameState.research.level >= 5;
        break;
      case 'scholar_tier_10':
        progress = Math.min(gameState.research.level, 10);
        shouldUnlock = gameState.research.level >= 10;
        break;
      case 'streak_master_5':
        progress = Math.min(gameState.knowledgeStreak.best, 5);
        shouldUnlock = gameState.knowledgeStreak.best >= 5;
        break;
      case 'streak_master_10':
        progress = Math.min(gameState.knowledgeStreak.best, 10);
        shouldUnlock = gameState.knowledgeStreak.best >= 10;
        break;
      case 'streak_master_20':
        progress = Math.min(gameState.knowledgeStreak.best, 20);
        shouldUnlock = gameState.knowledgeStreak.best >= 20;
        break;
      case 'wealthy_500':
        progress = Math.min(gameState.statistics.coinsEarned, 500);
        shouldUnlock = gameState.statistics.coinsEarned >= 500;
        break;
      case 'wealthy_2000':
        progress = Math.min(gameState.statistics.coinsEarned, 2000);
        shouldUnlock = gameState.statistics.coinsEarned >= 2000;
        break;
      case 'wealthy_10000':
        progress = Math.min(gameState.statistics.coinsEarned, 10000);
        shouldUnlock = gameState.statistics.coinsEarned >= 10000;
        break;
      case 'gem_collector_50':
        progress = Math.min(gameState.statistics.gemsEarned, 50);
        shouldUnlock = gameState.statistics.gemsEarned >= 50;
        break;
      case 'gem_collector_200':
        progress = Math.min(gameState.statistics.gemsEarned, 200);
        shouldUnlock = gameState.statistics.gemsEarned >= 200;
        break;
      case 'chest_opener_5':
        progress = Math.min(gameState.statistics.chestsOpened, 5);
        shouldUnlock = gameState.statistics.chestsOpened >= 5;
        break;
      case 'chest_opener_20':
        progress = Math.min(gameState.statistics.chestsOpened, 20);
        shouldUnlock = gameState.statistics.chestsOpened >= 20;
        break;
      case 'accuracy_master_80':
        const totalAnswered80 = gameState.statistics.totalQuestionsAnswered;
        if (totalAnswered80 >= 20) {
          const accuracy80 = gameState.statistics.correctAnswers / totalAnswered80;
          progress = accuracy80 >= 0.8 ? 20 : 0;
          shouldUnlock = accuracy80 >= 0.8;
        }
        break;
      case 'legendary_finder':
        progress = gameState.collectionBook.rarityStats.legendary > 0 ? 1 : 0;
        shouldUnlock = progress >= 1;
        break;
      case 'mythical_finder':
        progress = gameState.collectionBook.rarityStats.mythical > 0 ? 1 : 0;
        shouldUnlock = progress >= 1;
        break;
      case 'warrior_25':
        progress = Math.min(gameState.statistics.totalVictories, 25);
        shouldUnlock = gameState.statistics.totalVictories >= 25;
        break;
      case 'warrior_100':
        progress = Math.min(gameState.statistics.totalVictories, 100);
        shouldUnlock = gameState.statistics.totalVictories >= 100;
        break;
      case 'miner_50':
        progress = Math.min(gameState.mining.totalGemsMined, 50);
        shouldUnlock = gameState.mining.totalGemsMined >= 50;
        break;
      case 'miner_200':
        progress = Math.min(gameState.mining.totalGemsMined, 200);
        shouldUnlock = gameState.mining.totalGemsMined >= 200;
        break;
      case 'shiny_hunter_5':
        progress = Math.min(gameState.mining.totalShinyGemsMined, 5);
        shouldUnlock = gameState.mining.totalShinyGemsMined >= 5;
        break;
      case 'enchanted_finder_3':
        const enchantedCount = [...gameState.inventory.weapons, ...gameState.inventory.armor]
          .filter(item => item.isEnchanted).length;
        progress = Math.min(enchantedCount, 3);
        shouldUnlock = enchantedCount >= 3;
        break;
      case 'relic_seeker_3':
        progress = Math.min(gameState.inventory.relics.length, 3);
        shouldUnlock = gameState.inventory.relics.length >= 3;
        break;
      case 'knowledge_master_100':
        progress = Math.min(gameState.statistics.correctAnswers, 100);
        shouldUnlock = gameState.statistics.correctAnswers >= 100;
        break;
      case 'gardener_first':
        progress = gameState.gardenOfGrowth.isPlanted ? 1 : 0;
        shouldUnlock = gameState.gardenOfGrowth.isPlanted;
        break;
      case 'gardener_master':
        progress = Math.min(gameState.gardenOfGrowth.growthCm, 25);
        shouldUnlock = gameState.gardenOfGrowth.growthCm >= 25;
        break;
    }

    if (shouldUnlock && !existing?.unlocked) {
      newUnlocks.push({
        ...def,
        unlocked: true,
        unlockedAt: new Date(),
        progress: def.maxProgress
      });
    } else if (existing) {
      existing.progress = progress;
    }
  });

  return newUnlocks;
};

export const initializeAchievements = (): Achievement[] => {
  return achievementDefinitions.map(def => ({
    ...def,
    unlocked: false,
    progress: 0
  }));
};