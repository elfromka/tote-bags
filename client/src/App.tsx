import { Provider } from "react-redux";
import Router from "./routes/Router";
import store from "./redux/store";
import "./assets/scss/styles.scss";

const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
