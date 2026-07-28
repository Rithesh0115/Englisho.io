export const GamificationService = {
    getStats() {
        const stats = localStorage.getItem('englisho_stats');
        return stats ? JSON.parse(stats) : { xp: 0, streak: 0, dailyGoals: 0, completedLessons: 0 };
    },

    saveStats(stats) {
        localStorage.setItem('englisho_stats', JSON.stringify(stats));
    },

    addXP(amount) {
        const stats = this.getStats();
        stats.xp += amount;
        stats.completedLessons += 1;
        
        // Simple logic to increment streak every 3 lessons for demo purposes
        if (stats.completedLessons % 3 === 0) {
            stats.streak += 1;
        }
        
        this.saveStats(stats);
        return stats;
    }
};
