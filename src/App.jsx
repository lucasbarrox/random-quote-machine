import './App.css'

function App() {
  return (
    <div id="quote-box">
      <div id="text">
        <p>Se você quer viver uma vida feliz, amarre-a a um objetivo, não às pessoas ou às coisas.</p>
      </div>
      <div id="author">
        <span>- Albert Einstein</span>
      </div>
      <div className="buttons">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          Tweetar
        </a>
        <button id="new-quote">Nova Citação</button>
      </div>
    </div>
  )
}

export default App