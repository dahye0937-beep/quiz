import { useState } from "react";
import "./App.css";
import Categorles from './components/Categorles';
import quizData from './data/quizData.json';
import QuizPage from "./components/QuizPage";
import Reaults from "./components/Reaults";
import Img from "./img/img01.jpg";
import Main from "./img/main.png";

const App = () => {
  const [category,setCategory] = useState('');
  const [filterQuiz,setFilterQuziz] = useState([]);
  const [finish,setFinish] = useState(false);
  const [score,setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듬.
    const quizes = quizData.quizzes.filter((data)=>{
      return data.categoris === select;
    });
    setFilterQuziz(quizes);
  }
  const handleReStart = ()=>{
    setCategory('');
    setFinish(false);
    setScore(0);
  }
  const handleScore = ()=>{
    //이전에 가진 값에 +20
    setScore((prev)=>{return prev+20});
  }
  return (
    <div id='app'>
      { !category && !finish &&(
        <img src={Main} alt="메인 상단 아이콘"/>
      )}
      {
        !category && !finish &&
        <Categorles
        Categorles={quizData.categoris}
        onSelect={onSelectCategory}/>
      }
        {
          category && !finish &&
          <QuizPage 
          quizes={filterQuiz} 
          onFinish={setFinish}
          onScore={handleScore}
          score={score}
          />
        }
        {
          finish && 
          <Reaults 
          onReStart={handleReStart} score={score}/>
        }
        {
          category && !finish &&
        <p className="score-text">현재 점수: {score}</p>
        }
    </div>
  )
}

export default App