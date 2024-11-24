export const funEmojis = [
      "😀", "😂", "😍", "🤔", "😎", "😴", "🥳", "🤩", "😇", "😭", // Gesichter
      "🐱", "🐶", "🐵", "🦊", "🦄", "🐸", "🐢", "🐠", "🦜", "🐞", // Tiere
      "🍎", "🍕", "🍩", "🍔", "🍣", "🍪", "🍉", "🍫", "🍿", "🍦", // Essen
      "⚽", "🏀", "🎮", "🎸", "🚗", "🎁", "📚", "🌈", "🔥", "🌎"  // Objekte und Symbole
    ];
    
    export const getRandomEmoji = () => {
      return funEmojis[Math.floor(Math.random() * funEmojis.length)];
    };
    