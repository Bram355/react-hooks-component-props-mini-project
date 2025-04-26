import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  // Calculate emojis based on reading time
  const coffeeEmojis = Math.ceil(minutesToRead / 5);
  const bentoEmojis = Math.ceil(minutesToRead / 10);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {minutesToRead < 30
          ? "☕️".repeat(coffeeEmojis) + ` ${minutesToRead} min read`
          : "🍱".repeat(bentoEmojis) + ` ${minutesToRead} min read`}
      </p>
    </article>
  );
}

export default Article;

