const Categorles = ({Categorles,onSelect}) => {
  return (
    <div id="categories">
        <h2>음식 상식 퀴즈</h2>
        <p>당신의 음식 지식을 테스트 해보세요</p>
        <ul>
            {
                Categorles.map((item,idx)=>{
                    return (
                    <li key={idx}
                        onClick={()=>{onSelect(item)}}
                        >{item}</li>
                    )
                })
            }
        </ul>
        </div>
  )
}

export default Categorles