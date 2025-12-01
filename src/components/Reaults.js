const Reaults = ({onReStart,score}) => {
  return (
    <div id="reault">
        <h2>퀴즈 종료</h2>
        <p>오늘의 점수 : {score}</p>
        <button onClick={onReStart}>다시시작</button>
    </div>
  )
}

export default Reaults