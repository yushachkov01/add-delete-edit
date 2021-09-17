function DeleteEditAdd(){

  return(
    <>
    <div className="box"><input placeholder="Введите телефон" style={{  marginTop: "10%", padding: "10px"}}></input>
    <button className="btn" style={{width: "100px", height: "30px", borderRadius: "8px"}}>Добавить</button>
    </div>

    <div style={{ 
  marginTop: "20%",width: "400px",height: "400px",background: "#FF6347", borderRadius: "8px",marginLeft: "auto",marginRight: "auto"}}>
    </div>
    </>
  )
}

export default DeleteEditAdd


{/*  ЧЕРНОВИК!!! со стилями еще потренироваться!!! особенно с display:flex!!! *
<div style={{width:'100%', height:'100%', backgroundcolor:'red', display:'flex', justifyContent:'center'}}></div> */}