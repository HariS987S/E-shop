import './App.css';

const name = "products";
const styling = {
    background: "blue",
    padding: "10px 25px"
}
function App() {
    return (
        <div style={styling}>
            img
            name
            {name}
            <div className="class" style={{ background: "red" }}>
                demo1
            </div>
            price
        </div>
    );
}

export default App;
