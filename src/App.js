import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./Actions";
import {useEffect} from "react";

function App() {

  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadTodos());
  }, []);

  return (
    <div className="App">
      Список дел:
        {loading ? <div>Идёт загрузка, подождите, пожалуйста!gi</div> : (
            data.map((item) => {
                return (
                    <div>
                        {item.title}
                    </div>
                )
            })
        )}
    </div>
  );
}

export default App;
