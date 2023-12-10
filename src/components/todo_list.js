import  {useState} from 'react' //importing the usState hook

//date of the day
let day = new Date().toDateString();

//our coponent
export default function ToDoList(props){
    const [newTask , setNewTask] = useState(''); //for capturing the entred task in the input using setNewTask()
    const [todo , setTodo] = useState([]); //for pushing the task into an array todo using setTodo()
    const [see , setSee] = useState(''); //to indicate that you have more tasks in the buttom

    function handleSub(e){ //handleSub() the function that we will call on submit
        e.preventDefault()//to prevent the page from refreshing
        setTodo([...todo , newTask])
    }
    return(
        <>
            {/* our html code  */}
            <div className='tasks_cont'>
                <div className='info'>
                    <h1>My Day</h1>
                    <p style={{fontSize : props.size}}>{day}</p>
                </div>
                <form name='f1'>
                    <div className='list_of_tasks' onScroll={()=>setSee('▼')}>
                        {todo.length>0 ? todo.map((td,index)=><div key={index}><span>{index+1}</span><input type='checkbox' id='dlt' onChange={check_task}/><div><p>{td}</p></div></div>) : <h2 className='notasks'>No tasks</h2>} {/*if no task is available we show no tasks */}
                    </div>
                </form>
                <p className='see_more'>{see}</p>
                <form onSubmit={(e)=>handleSub(e)} className='form' id='f1'> {/*on submiting the form we call handleSub function */}
                    <input type="text" id="t" value={newTask} placeholder='Add a task' onChange={e => setNewTask(e.target.value)/*giving the value of the input to the variable newTask*/}/>
                </form>
            </div>
            
        </>
    )
    function check_task(){
        let t = document.querySelectorAll('.list_of_tasks>div');
        for(let i = 0 ; i < t.length ; i++ ){
            if(document.querySelectorAll(".list_of_tasks input[type='checkbox']")[i].checked === true){
                t[i].style.backgroundColor = 'lightgreen'
                setTimeout(()=>{
                    t[i].remove();
                },1000) //cheking the task as completed it will also erase it from your to do list
            }
        }
        
    }

}


