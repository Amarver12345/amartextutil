import React,{useState} from 'react'

function Accordion() {
    const HandleClick = ()=>{
        if(MyStyle.color==='black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'solid 2px black'
        })
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'solid 2px white'
            })
        }}
    const [MyStyle, setMyStyle]= useState({
        color:'black',
        backgroundColor:'white',
        border:'solid 2px white'
})
  return (
    <>
        <div style={MyStyle} class="accordion" id="accordionExample">
            <div style={MyStyle}  class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
        <div style={MyStyle}  id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div style={MyStyle}  class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={MyStyle}  class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div style={MyStyle}  id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={MyStyle}  class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button onClick={HandleClick}>Enable Dark Mode</button>
    </>
  )
}

export default Accordion