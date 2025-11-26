import { useState } from "react"

const QuizPage = ({quizes,onFinish,onScore,score}) => {
    const [current,setCurrent] = useState(0);
    const [selected,setSelected] =useState(null);
    const handleClick = (idx)=>{
        setSelected(idx);
        //정답체크
        if( idx+1 === quizes[current].correct ){
            //점수를 +20
            onScore();
        }
        setTimeout(()=>{
            setSelected(null);
            if( current+1 < quizes.length){
                setCurrent(current+1);
            }else{
                onFinish(true);
            }
        },500)
    }
  return (
    <div id="quiz-page">
        <h3>{current+1}/{quizes.length}</h3>
        <p>{quizes[current].question}</p>
        <ul className="choices">
            {
                quizes[current].choices.map((item,idx)=>{
                    let style = {};
                    if (selected !== null){
                        if (idx + 1 === quizes[current].correct){
                            style.color = "green";
                        }else if(selected === idx){
                            style.color = "red";
                        }
                    }
                    return(
                        <li key={idx}
                        onClick={()=>{handleClick(idx)}} style={style}
                        >{idx+1}.{item}</li>
                    )
                })
            }
        </ul>
        {/* <p>Child score: {score}</p> */}
    </div>
  )
}

export default QuizPage